import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from './components/Services';
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ProjectGallery from './components/ProjectGallery';


function App() {

  // const navSlide = () => {
  //   const burger = document.querySelector('.burger');
  //   const nav = document.querySelector('.nav-links');
  //   const navLinks = document.querySelectorAll('.nav-links li');
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <ProjectGallery />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
