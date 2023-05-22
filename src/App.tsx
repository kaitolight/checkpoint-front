import { Routes, Route } from "react-router-dom";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries/:continentName" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
