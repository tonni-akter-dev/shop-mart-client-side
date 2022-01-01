import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import Home from "./component/Home/Home/Home";
<<<<<<< HEAD
import Register from "./component/Register/Register";
import Blogs from "./component/Routes/Blogs/Blogs/Blogs";

function App() {
  return (
    <div className="App">
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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
>>>>>>> d5a4f57eb664a647219214396c88b997eaf7cc20
    </div>
  );
}
export default App;
