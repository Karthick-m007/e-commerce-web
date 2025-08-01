import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Products from "../src/Components/Products"
import Brands from './Components/Brands';
import AboutUS from './Components/AboutUS';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className=" bg-shipe-cove-400 ">
     <Navbar/>
     <HeroSection/>
     <Products />
     <Brands/>
     <AboutUS/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
