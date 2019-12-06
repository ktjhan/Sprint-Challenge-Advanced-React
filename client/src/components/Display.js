import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const Card = styled.div`
  background-color: rgb(70, 169, 212);
  width: 380px;
  height: 150px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const Display = ({name, country, searches}) => {
  return (
    <Card>
      <Title>Name: {name}</Title>
      <Title>Country: {country}</Title>
      <Title>Searches: {searches}</Title>
    </Card>
  )
}

export default Display;
