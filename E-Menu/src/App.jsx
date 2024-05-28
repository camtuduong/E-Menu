import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ScanQr from "./pages/ScanQrCode/ScanQr";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<ScanQr />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
