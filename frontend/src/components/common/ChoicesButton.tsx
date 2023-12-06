import React from "react";

interface ChoicesButtonProps {
  handleNextQuestion: () => void;
  choices: string;
}

const ChoicesButton: React.FC<ChoicesButtonProps> = ({
  handleNextQuestion,
  choices,
}) => {
  return (
    <>
      <div>
        <button
          onClick={() => handleNextQuestion()}
          className="w-[20rem] tracking-wide bg-blue-600 my-4 rounded-full text-base font-mono  text-white hover:bg-blue-700   border-[1px] p-3"
        >
          {choices}
        </button>
      </div>
    </>
  );
};
export default ChoicesButton;
