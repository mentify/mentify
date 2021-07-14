import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Landingpage } from "./pages/Landingpage/Landingpage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
    </div>
  );
};

export default App;
