import logo from "./favicon.png";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Projectpage from "./components/projectpage";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      = {/* <Navbar /> */}
      <Home />
      <About />
      <Projectpage />
      <Contact />
    </div>
  );
}

export default App;
