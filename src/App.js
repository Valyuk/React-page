import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectItem from "./pages/ProjectItem";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectItem/:id" element={<ProjectItem />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/projects" element={<Projects />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

