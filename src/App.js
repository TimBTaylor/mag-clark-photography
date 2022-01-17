import "./App.css";
import { Landing } from "../src/pages/Landing";
import { Pricing } from "./pages/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
