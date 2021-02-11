import {Route,Switch} from "react-router"
import Home from "./Components/Home";
import Menu from "./Components/Menu";

function App() {


  return (
    <>
    <Switch>
    <Route exact path="/menu" component={Menu} />
    <Route exact path="/" component={Home} />
    </Switch>
    </>
  );
}

export default App;
