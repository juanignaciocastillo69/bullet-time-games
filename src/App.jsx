import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="app">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:type/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;