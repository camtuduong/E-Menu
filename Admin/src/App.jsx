import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./pages/Update/Update";
import ListCategory from "./pages/List/ListCategory";
import UpdateCategory from "./pages/Update/UpdateCategory";
function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/list-category" element={<ListCategory />} />
          <Route exact path="update/:id" element={<Update />} />
          <Route
            exact
            path="update-category/:id"
            element={<UpdateCategory />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
