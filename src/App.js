import React from "react";
import { BrowserRouter as Router, Route,Link, Switch } from 'react-router-dom';
import  Home  from "./Initial/Home.js";
import  Login  from "./Initial/Login.js";
import  Signup  from "./Initial/Signup.js";

// componente state less. Si necesito un componente uqe dependa de una clase , lo cambio
//son componentes mas rapidos y mas eficitentes

const Header = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sing up</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

const App = () => {
  return (
    <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <h2>
        Dentro deApp
      </h2>
    </div>
    </Router>
  )
}

export default App;

