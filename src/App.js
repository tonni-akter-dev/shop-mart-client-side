import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./component/context/AuthProvider/AuthProvider";
import Home from "./component/Home/Home/Home";
import Register from "./component/Register/Register";
import Blog from "./component/Routes/Blog/Blog";
function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
   </AuthProvider>

    </div>
  );
}
export default App;
