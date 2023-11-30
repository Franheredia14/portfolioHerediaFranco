import './app.css'
import {Header} from "../src/components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";
import Work from "./components/work/Work.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollUp/ScrollUp.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return <div>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <ToastContainer/>
    </main>
      <Footer/>
      <ScrollUp/>
  </div>
};

export default App;