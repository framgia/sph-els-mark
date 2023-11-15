
import { Link } from "react-router-dom";


const AdminLogin = () => {
    return(
    <>
    <head>
    <title>
        Admin 
    </title>
    </head>
<section className="bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[30px] font-bold   md:text-xl text-white">
                  E - Learning System Admin
              </h1>
              <form className="space-y-4 md:space-y-6" >
                  <div>
                      <label id="email" className="block mb-2 text-sm font-medium  text-white">Your email</label>
                      <input type="email" name="email" id="email" className="border  sm:text-sm rounded-lg lock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label id="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="border   sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 "  />
                  </div>

                  <button type="submit" className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600  focus:ring-primary-800">Sign in as Admin</button>
                  <p className="text-sm font-light text-gray-400">
                      <Link to="/admin-register" className="text-blue-600">Register as Admin</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section> 
    </>
    )
}



export default AdminLogin;