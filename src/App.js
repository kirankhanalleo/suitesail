import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
