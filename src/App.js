
import './App.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Attribute from "./components/Attribute";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <Content />
      <Attribute />
    </div>
  );
}

export default App;
