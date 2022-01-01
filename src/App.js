import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import MyOrder from "./component/Dashboard/MyOrder/MyOrder";
import Home from "./component/Home/Home/Home";
<<<<<<< HEAD
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
   <AuthProvider>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
   </AuthProvider>

=======
import About from "./component/pages/About/About";
function App() {
  return (
    <div className="App">
>>>>>>> b7099ca3403a4fd5b7243bcc0ebb4369a53a0939
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
<<<<<<< HEAD
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
=======
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
>>>>>>> d5a4f57eb664a647219214396c88b997eaf7cc20
>>>>>>> b7099ca3403a4fd5b7243bcc0ebb4369a53a0939
    </div>
  );
}
export default App;
