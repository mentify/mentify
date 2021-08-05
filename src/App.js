import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Registerpage } from "./pages/Registerpage/Registerpage";
import { Signinpage } from "./pages/Signinpage/Signinpage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route path="/signin" component={Signinpage} />
          <Route path="/register" component={Registerpage} />
          <Route path="/" component={Landingpage} />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
