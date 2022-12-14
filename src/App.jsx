import "./App.css";
import Navbar from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Projects />
    </div>
  );
}

export default App;
