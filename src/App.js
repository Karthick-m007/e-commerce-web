import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Products from "../src/Components/Products"
function App() {
  return (
    <div className=" bg-shipe-cove-400">
     <Navbar/>
     <HeroSection/>
     <Products />
    </div>
  );
}

export default App;
