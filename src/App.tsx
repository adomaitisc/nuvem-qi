import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Start } from "./pages/Start";

import "./App.css";

function App() {
  return (
    <div className="app-background">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="start" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
