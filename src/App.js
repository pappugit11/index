import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CatList from "./components/CatList";
import Article from "./components/Article";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <div id="templatemo_wrapper">
            <Router>
              <Header />
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cat-list/:cat_id" element={<CatList />} />
                <Route path="/articles/:id" element={<Article />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
