import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import CategoryPage from "../Pages/Categorypage";
import LoginPage from "../Pages/auth/LoginPage";
import SignUp from "../Pages/auth/SignUp";
import AdminLogin from "../Pages/auth/AdminLogin";
import AdminSignin from "../Pages/auth/AdminSignUp";


const Main = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/admin-login" element={<AdminLogin/>} />
      <Route path="/admin-register" element={<AdminSignin/>} />
    </Routes>
    
  )
}

export default Main
