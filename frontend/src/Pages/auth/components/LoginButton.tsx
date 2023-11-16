import React from "react";

interface FormButtonProps{
  userType: 'admin' | 'student'
}


const LoginButton:React.FC<FormButtonProps> = ({userType}) => {
  return (
    <button type="submit" 
    className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600  focus:ring-primary-800">
      Sign in as {`${userType === 'admin' ? 'Admin' : 'Student'}`}
      </button>
  )
}
export default LoginButton;
