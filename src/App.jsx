import "./App.css";
import Hello from "./components/Hello/Hello";
import Advanced from "./components/Advanced/Advanced";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Boost from "./components/Boost/Boost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hello />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
