import React from "react";

interface WordTemplateProps {
  word: string;
  key: number;
}

const WordTemplate: React.FC<WordTemplateProps> = ({ key, word }) => {
  return (
    <div key={key}>
      <p className="font-light text-gray-600 py-1"> {word} </p>
    </div>
  );
};
export default WordTemplate;
