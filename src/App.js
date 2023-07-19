import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Categories from "./pages/collection/Collection";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/CategorySlice";
import Payments from "./components/payments/Payments";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="Appp">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Categories />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/payments/:status" element={<Payments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
