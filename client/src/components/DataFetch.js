import React from 'react';
import axios from 'axios';
import Display from './Display';

class DataFetch extends React.Component {

    state = {
      players: [],
    }

  componentDidMount() {

    axios.get("http://localhost:5000/api/players")
      .then(response => {
          console.log(response.data)
          this.setState({
            players: response.data
          });
      })
      .catch(error => {
          console.log('boooooooo', error)
      });
  }

  render(){
    return (
      <div>
        {this.state.players.map(player => (
          <Display
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
          />
        ))}
      </div>
    );
  }
}

export default DataFetch;
