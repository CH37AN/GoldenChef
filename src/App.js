  
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Registration from "./pages/registration";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Registration} />
      <Route exact path="/main" component= {Main}/>
      </Switch>
    </Router>
  );
}

export default App;
// {() => <Main authorized={true} />} 