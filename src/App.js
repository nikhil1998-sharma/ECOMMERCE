import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Appp">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
