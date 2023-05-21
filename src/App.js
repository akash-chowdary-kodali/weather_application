import "./App.css";
import NAVI_BAR from "./components/nav-bar/navigation";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import {HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NAVI_BAR />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
