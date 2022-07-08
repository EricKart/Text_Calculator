import "./App.css"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="TEXT PLAYER" aboutText="About Us"/>
      <div className="container mb-3">
        <TextForm heading="Enter your text to analyze"/>
        {/* <About/> */}
      </div>
    </>
  
  );
}

export default App;
