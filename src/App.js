import {Route,Switch} from "react-router"
import { HashRouter as Router } from 'react-router-dom'
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import PlanPage from "./Components/PlanPage";

function App() {


  return (
    <>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
    <Router >
    <Switch>
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/" component={Home} />
    <Route exact path="/order" component={Order} />
    <Route exact path="/plan" component={PlanPage} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
