- [ ] Why would you use class component over function components (removing hooks from the question)?

* Class Components should be used when managing state or requiring life cycle methods..

if it's only receiving props it's better to use functional component

- [ ] Name three lifecycle methods and their purposes.

* Mounting – Birth of your component
* Update – Growth of your component
* Unmount – Death of your component

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint

componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.

componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed.

- [ ] What is the purpose of a custom hook?

* Building your own hooks lets you extract component logic into reusable functions.

- [ ] Why is it important to test our apps?

* So that we know that it works as intended, and can minimize the chances of bugs
