// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import Add from "./pages/Add/Add";
// import List from "./pages/List/List";
// import Orders from "./pages/Orders/Orders";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Update from "./pages/Update/Update";
// import ListCategory from "./pages/List/ListCategory";
// import UpdateCategory from "./pages/Update/UpdateCategory";
// import OrderDetail from "./pages/Orders/OrderDetail";
// import AddTable from "./pages/Add/AddTable";
// import UpdateTable from "./pages/Update/UpdateTable";
// import Register from "./pages/Register/Register";

// function App() {
//   return (
//     <div>
//       <div>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//         </Routes>
//         <ToastContainer />
//         <Navbar />
//         <hr />
//         <div className="app-content">
//           <Sidebar />
//           <Routes>
//             <Route path="/table" element={<AddTable />} />
//             <Route path="/add" element={<Add />} />
//             <Route path="/list" element={<List />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/list-category" element={<ListCategory />} />
//             <Route exact path="update/:id" element={<Update />} />
//             <Route exact path="update-table/:id" element={<UpdateTable />} />
//             <Route
//               exact
//               path="update-category/:id"
//               element={<UpdateCategory />}
//             />
//             <Route exact path="order-detail/:id" element={<OrderDetail />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./pages/Update/Update";
import ListCategory from "./pages/List/ListCategory";
import UpdateCategory from "./pages/Update/UpdateCategory";
import OrderDetail from "./pages/Orders/OrderDetail";
import AddTable from "./pages/Add/AddTable";
import UpdateTable from "./pages/Update/UpdateTable";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/table" element={<AddTable />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/list-category" element={<ListCategory />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/update-table/:id" element={<UpdateTable />} />
          <Route path="/update-category/:id" element={<UpdateCategory />} />
          <Route path="/order-detail/:id" element={<OrderDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
