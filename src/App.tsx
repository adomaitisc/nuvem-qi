import { Dashboard } from "./pages/Dashboard";
import { Start } from "./pages/Start";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/route/Route";

import "./App.css";

function App() {
  return (
    <div className="app-background">
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route path="/start">
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
