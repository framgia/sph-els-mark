import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Homepage";
import CategoryPage from "../Pages/Categorypage";
import LoginPage from "../Pages/auth/LoginPage";
import SignUp from "../Pages/auth/SignUp";


const Main = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<SignUp/>} />
    </Routes>
    
  )
}

export default Main
