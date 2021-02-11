import {Route,Switch} from "react-router"
import { HashRouter as Router } from 'react-router-dom'
import Home from "./Components/Home";
import Menu from "./Components/Menu";

function App() {


  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/" component={Home} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
