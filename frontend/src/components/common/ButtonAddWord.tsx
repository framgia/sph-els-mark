import React from "react";

interface ButtonAddWordProps {
  text: string;
}
const ButtonAddWord: React.FC<ButtonAddWordProps> = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-96 mt-[30px] ml-[40px] text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600  focus:ring-primary-800"
    >
      {text}
    </button>
  );
};

export default ButtonAddWord;
