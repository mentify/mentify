import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Signinpage } from "./pages/Signinpage/Signinpage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/signin" component={Signinpage} />
        <Route path="/" component={Landingpage} />
      </Switch>
    </div>
  );
};

export default App;
