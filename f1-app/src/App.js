import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/home";
import Profile from "./components/pages/driverProfile/profile";
import ConstructorProfile from "./components/pages/constructorProfile/constructorProfile";
import Circuits from "./components/pages/circuits/circuits";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/circuits" element={<Circuits />} />
          <Route
            exact
            path="/drivers/:driverId/:season"
            element={<Profile />}
          />
          <Route
            exact
            path="/constructors/:consId/:season"
            element={<ConstructorProfile />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
