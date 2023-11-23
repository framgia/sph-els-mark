import React from "react";

interface SelectButtonProps {
  handleDialog: () => void;
  text: string;
}
const SelectButton: React.FC<SelectButtonProps> = ({ handleDialog, text }) => {
  return (
    <button
      className="bg-blue-500 p-4 m-3 rounded-lg text-white hover:text-gray-100 hover:bg-gray-600"
      onClick={handleDialog}
    >
      {text}
    </button>
  );
};
export default SelectButton;
