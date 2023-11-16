import React from "react";

interface InputFieldPRops{
  type:string;
  name:string;
  id:string;
  userType: 'admin' | 'student';
  inputType: 'name' | 'email' 
  value: string
  placeholder:string
}

const InputField:React.FC<InputFieldPRops> = ({inputType, type,placeholder, name, id, userType, value}) => {
  return (
    <div className={`${inputType === 'name' ? "md:col-span-2" : "md:col-span-4"}`}>
    <label id={id} >{value}</label>
    <input
      type={type}
      name={name}
      id={id}
      className={`${userType === 'admin' ? "h-10 border mt-1 rounded px-4 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white " : "h-10 border mt-1 rounded px-4 w-full bg-gray-50"}`}
      placeholder={placeholder}
    />
  </div>
  )
}
export default InputField;
