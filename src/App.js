import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/Index";
import Error from "./components/ErrorPage";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/oops" component={Error} />
      <Route exact component={Index} />
    </Switch>
  );
};
export default App;
