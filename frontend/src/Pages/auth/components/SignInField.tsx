
import React from "react";

interface SignInFieldProps{
  id: string;
  name: string;
  type: string;
  userType: 'admin' | 'student'
  value: string;
  placeholder: string

}

const SignInField:React.FC<SignInFieldProps> = ({id, userType,type, name, value, placeholder}) => {
  return (
    <div>
    <label id={id} className={`block mb-2 text-sm font-medium ${userType === 'admin' ? 'text-white' : 'text-gray-900'}`}>{value}</label>
    <input type={type} name={name} id={id} className={`${userType === 'admin' ? "border  sm:text-sm rounded-lg lock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"}`} placeholder={placeholder} />
</div>
  )
}
export default SignInField;
