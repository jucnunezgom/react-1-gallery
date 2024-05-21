import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SungJinwoo from "./components/SungJinwoo";
import ChaHaeIn from "./components/ChaHaeIn";
import SongChiyul from "./components/SongChiyul";
import TaeGyu from "./components/TaeGyu";
import YooJinho from "./components/YooJinho";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/sung-jinwoo" element={<SungJinwoo />} />
          <Route path="/cha-hae-in" element={<ChaHaeIn />} />
          <Route path="/song-chiyul" element={<SongChiyul />} />
          <Route path="/tae-gyu" element={<TaeGyu />} />
          <Route path="/yoo-jinho" element={<YooJinho />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
