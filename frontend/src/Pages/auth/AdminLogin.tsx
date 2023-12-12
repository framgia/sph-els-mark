import { Link } from 'react-router-dom';
import SignInField from './components/SignInField';

import Button from './components/Button';

const AdminLogin = () => {
  return (
    <>
      <title>Admin</title>

      <section className="bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[30px] font-bold   md:text-xl text-white">
                E - Learning System Admin
              </h1>
              <form className="space-y-4 md:space-y-6">
                <SignInField
                  id="email"
                  value="Your Email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  isAdmin
                />

                <SignInField
                  id="password"
                  value="Password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  isAdmin
                />

                <Button text="Login as Admin" />
                <p className="text-sm font-light text-gray-400">
                  <Link to="/admin-register" className="text-blue-600">
                    Register as Admin
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
