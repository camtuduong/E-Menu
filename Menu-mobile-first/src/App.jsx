import Home from "./LayoutHome/Home";
import { Routes, Route } from "react-router-dom";
import MenuCategoryLayout from "./MenuCategory/MenuCategoryLayout";
import OrderLayout from "./Order/OrderLayout";

function App() {
  return (
    <>
      {/* <LayoutHome /> */}
      {/* navigation */}
      <Routes>
        <Route exact path="/menu" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="menu/test" element={<MenuCategoryLayout />} />
        <Route path="menu/order" element={<OrderLayout />} />
      </Routes>
    </>
  );
}

export default App;
