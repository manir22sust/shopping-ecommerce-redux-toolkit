import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import { Home } from "./pages/home/Home";
import { Category } from "./pages/category/Category";
import { Cart } from "./pages/cart/Cart";

//components
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
