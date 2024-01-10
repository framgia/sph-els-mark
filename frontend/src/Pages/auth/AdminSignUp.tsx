import InputField from '@/Pages/auth/components/InputField';
import Button from '@/Pages/auth/components/Button';
import React from 'react';

const AdminSignin = () => {
  return (
    <>
      <title>Student Register</title>
      <form>
        <div className="min-h-screen p-8 bg-gray-900 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-300">
                Register as Admin
              </h2>
              <p className="text-gray-500 mb-6">E - LEARNING SYSTEM</p>

              <div className="bg-gray-800 border-gray-400 border-[1px] rounded shadow-lg p-9 px-4 md:p-8 mb-6">
                <div className=" grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg text-gray-300">
                      Admin Details
                    </p>
                    <p className="text-gray-400">
                      Please fill out all the fields.
                    </p>
                  </div>

                  <div className="md:col-span-2 text-gray-300">
                    <div className="grid gap-4 gap-y-3 text-sm grid-cols-2 md:grid-cols-4">
                      <InputField
                        type="text"
                        name="first_name"
                        id="first_name"
                        isAdmin
                        value="First Name"
                        placeholder=""
                        email={false}
                      />
                      <InputField
                        type="text"
                        name="last_name"
                        id="last_name"
                        isAdmin
                        value="Last Name"
                        placeholder=""
                        email={false}
                      />

                      <InputField
                        type="text"
                        name="email"
                        id="email"
                        isAdmin
                        value="Email Address"
                        placeholder="your_email@mail.com"
                        email
                      />
                      <InputField
                        type="password"
                        name="createPassword"
                        id="createPassword"
                        isAdmin
                        value="Create Password"
                        placeholder="Create Password"
                        email={false}
                      />
                      <InputField
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        isAdmin
                        value="Confirm Password"
                        placeholder="Confirm Password"
                        email={false}
                      />
                    </div>
                    <div className="inline-flex items-end mt-6">
                      <Button text="Register as Admin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminSignin;
