import { Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
