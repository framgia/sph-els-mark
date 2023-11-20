import Button from "./components/Button";
import InputField from "./components/InputField";
const SignUp = () => {
  return (
    <>
      <title>Student Register</title>
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
                      <InputField
                        type="text"
                        name="first_name"
                        id="first_name"
                        isAdmin={false}
                        value="First Name"
                        placeholder=""
                        email={false}
                      />
                      <InputField
                        type="text"
                        name="last_name"
                        id="last_name"
                        isAdmin={false}
                        value="Last Name"
                        placeholder=""
                        email={false}
                      />

                      <InputField
                        type="text"
                        name="email"
                        id="email"
                        isAdmin={false}
                        value="Email Address"
                        placeholder="your_email@mail.com"
                        email
                      />
                      <InputField
                        type="password"
                        name="createPassword"
                        id="createPassword"
                        isAdmin={false}
                        value="Create Password"
                        placeholder="Create Password"
                        email={false}
                      />
                      <InputField
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        isAdmin={false}
                        value="Confirm Password"
                        placeholder="Confirm Password"
                        email={false}
                      />
                    </div>
                    <div className="inline-flex items-end mt-6">
                      <Button text="Register as Student" />
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
