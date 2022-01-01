import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import Home from "./component/Home/Home/Home";
import About from "./component/pages/About/About";
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
<<<<<<< HEAD
          <Route path="/blogs" element={<Blogs/>} />
=======
          <Route path="/about" element={<About />} />
>>>>>>> 93ac5b1f317763dceeab77b1ea8d7b754b87e0ea
        </Routes>
      </BrowserRouter>
   </AuthProvider>
    </div>
  );
}
export default App;
