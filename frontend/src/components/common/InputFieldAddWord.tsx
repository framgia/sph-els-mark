import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
}

const InputFieldAddWord: React.FC<InputFieldProps> = ({ id, name }) => {
  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        className="w-[23rem]  ml-[1rem] mt-[20px] px-3 py-2  bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500   rounded-md sm:text-sm focus:ring-1"
      />
    </>
  );
};

export default InputFieldAddWord;
