import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import CategoryPage from "../Pages/Categorypage";
import LoginPage from "../Pages/auth/LoginPage";
import SignUp from "../Pages/auth/SignupPage";
import AdminLogin from "../Pages/auth/AdminLogin";
import AdminSignin from "../Pages/auth/AdminSignUp";
import Dashboard from "../Pages/Dashboard";
import AddCategoryPage from "../Pages/AddCategoryPage";


const Main = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/categories" element={<CategoryPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/admin-login" element={<AdminLogin/>} />
      <Route path="/admin-register" element={<AdminSignin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/admin/category/addcategory" element={<AddCategoryPage/>} />
    </Routes>
    
  )
}

export default Main
