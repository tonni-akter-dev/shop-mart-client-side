import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import AddProduct from "./component/Dashboard/Add A Product/AddProduct";
import AddReview from "./component/Dashboard/AddReview/AddReview";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./component/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./component/Dashboard/ManageProducts/ManageProducts";
import MyOrder from "./component/Dashboard/MyOrder/MyOrder";
import Payment from "./component/Dashboard/Payment/Payment";
import Home from "./component/Home/Home/Home";
import About from "./component/pages/About/About";
import Contact from "./component/pages/Contact/Contact";
import NotFound from "./component/pages/NotFound/NotFound";
import Portfolio from "./component/pages/Portfolio/Portfolio";
import Register from "./component/Register/Register";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Blogs from "./component/Routes/Blogs/Blogs/Blogs";
import Order from "./component/ProductsComponents/Order/Order";
import Shops from "./component/Routes/ShopRoutes/Shops/Shops";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/homeProducts/:id" element={<ProductDetails />} />
           
            <Route path="/order/:id" element={<Order />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<NotFound />} />
            <Route path="/blog" element={<Blogs />} />
            {/* /shop */}
            <Route path="/shop" element={<Shops />} />
            {/* dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path={`/dashboard/myOrders`}
                element={<MyOrder></MyOrder>}
              />
              <Route
                path={`/dashboard/addReview`}
                element={<AddReview></AddReview>}
              />
              <Route
                path={`/dashboard/payment`}
                element={<Payment></Payment>}
              />
              <Route
                path={`/dashboard/manageAllOrders`}
                element={<ManageAllOrders></ManageAllOrders>}
              />
              <Route
                path={`/dashboard/addProduct`}
                element={<AddProduct></AddProduct>}
              />
              <Route
                path={`/dashboard/makeAdmin`}
                element={<MakeAdmin></MakeAdmin>}
              />
              <Route
                path={`/dashboard/manageProducts`}
                element={<ManageProducts></ManageProducts>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
