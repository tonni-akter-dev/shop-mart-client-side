import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./component/Dashboard/MyOrder/MyOrder";
import Home from "./component/Home/Home/Home";
import About from "./component/pages/About/About";
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path={`/dashboard/myOrders`} element={<MyOrder></MyOrder>} />
              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>}>
              </Route>
            </Route>



          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
