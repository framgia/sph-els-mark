import React from "react";
import Dummywords from "../../dummywords";
import WordTemplate from "./WordTemplate";
import TitleTemplate from "./TitleTemplate";

const WordsTaken = () => {
  const secondColumn = Math.floor(Dummywords.length / 2);
  return (
    <>
      <div>
        <TitleTemplate title="Words" />
        {Dummywords.slice(0, secondColumn).map((word: any, id: number) => (
          <WordTemplate key={id} word={word.answer} />
        ))}
      </div>
      <div>
        <TitleTemplate title="Answers" />
        {Dummywords.slice(0, secondColumn).map((word: any, id: number) => (
          <WordTemplate key={id} word={word.correct_answer} />
        ))}
      </div>
      <div className="border-r-[1px] mt-5 h-[15rem] border-gray-900" />
      <div>
        <TitleTemplate title="Words" />
        {Dummywords.slice(secondColumn).map((word: any, id: number) => (
          <WordTemplate key={id} word={word.answer} />
        ))}
      </div>

      <div>
        <TitleTemplate title="Answers" />
        {Dummywords.slice(secondColumn).map((word: any, id: number) => (
          <WordTemplate key={id} word={word.correct_answer} />
        ))}
      </div>
    </>
  );
};
export default WordsTaken;
