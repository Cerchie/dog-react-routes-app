import React from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

  
    <BrowserRouter>
    <Nav  dogs={App.defaultProps}/>
    <Switch>
    <Route exact path="/dogs" >
      <DogList dogs={App.defaultProps}/> 
    </Route>
    <Route path="/dogs/:name">
      <DogDetails  dogs={App.defaultProps}/> 
    </Route>
    <Redirect to="/dogs" />
  </Switch>
  </BrowserRouter>

    </div>
  );
} 



App.defaultProps = [
    {
      name: "Whiskey",
      age: 5,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

export default App;