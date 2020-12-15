
import React, {useState, useEffect} from 'react';
import ColorsList from './ColorsList';
import ColorPage from './ColorPage';
import UserForm from './UserForm'
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import './App.css';
 


function App() {

  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }
  return (
    <div className="App">   
    <BrowserRouter>
    <Switch>
    <Route exact path="/colors" >
      <ColorsList colors={colors}/> 
    </Route>
    <Route path="/colors/new">
     <UserForm addColor={handleAdd}/>
    </Route>
    <Route path="/colors/:color">
      <ColorPage colors={App.defaultProps}/> 
    </Route>
    <Redirect to="/colors" />
    </Switch>
    </BrowserRouter>
    <form action="/colors/new">
    <input type="submit" value="GO TO ADD COLORFORM"/>
    </form>
    </div>

  );
}
App.defaultProps = [
  {color: 'red'},
  {color: 'blue'},
  {color: 'green'}
]
export default App;
