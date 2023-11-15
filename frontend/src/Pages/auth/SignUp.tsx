const SignUp = () => {
  return (
    <>
      <head>
        <title>Student Register</title>
      </head>
      <form>
        <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <h2 className="font-semibold text-xl text-gray-600">
                Create your Account
              </h2>
              <p className="text-gray-500 mb-6">E - LEARNING SYSTEM</p>

              <div className="bg-white rounded shadow-lg p-9 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid gap-4 gap-y-3 text-sm grid-cols-2 md:grid-cols-4">
                      <div className="md:col-span-2">
                        <label id="first_name">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label id="last_name">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label id="email">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="your_email@mail.com"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label id="createPassword">Create Password</label>
                        <input
                          type="password"
                          name="createPassword"
                          id="createPassword"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Password"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label id="confirmPassword">Confirm Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div className="inline-flex items-end mt-6">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Register as Student
                      </button>
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

export default SignUp;
