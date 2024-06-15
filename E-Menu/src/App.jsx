import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ScanQr from "./pages/ScanQrCode/ScanQr";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const [name, setName] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const nameParam = searchParams.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, [location]);
  return (
    <div className="app">
      <ToastContainer />
      <Navbar name={name} />
      <Routes>
        <Route path="/" element={<ScanQr />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart name={name} />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
