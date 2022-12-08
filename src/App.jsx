import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <h1>React Router Dom</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
