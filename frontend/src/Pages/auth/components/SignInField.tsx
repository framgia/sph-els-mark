
import clsx from "clsx";
import React from "react";

interface SignInFieldProps{
  id: string;
  name: string;
  type: string;
  isAdmin: boolean
  value: string;
  placeholder: string

}

const SignInField:React.FC<SignInFieldProps> = ({id, isAdmin,type, name, value, placeholder}) => {
  return (
    <div>
    <label id={id} 
   
    className={clsx(
      'block mb-2 text-sm font-medium ',
      {
        'text-white' :isAdmin === true,
        'text-gray-900' : !isAdmin
        
      }
    )}
    
    >{value}</label>
    <input type={type} name={name} id={id} 
    // className={`${userType === 'admin' ? "border  sm:text-sm rounded-lg lock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"}`} 

    className={clsx(
      {
        "border  sm:text-sm rounded-lg lock w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : isAdmin === true,
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" : !isAdmin

      }
    )}
    placeholder={placeholder} />
</div>
  )
}
export default SignInField;
