import Navbar from '@/components/common/Navbar';
import { GoCheckCircle } from 'react-icons/go';
import { IoCloseSharp } from 'react-icons/io5';
import QuizHeader from '@/components/common/QuizHeader';
import DummyResult from '@/context/dummyresult';
import Score from '@/components/common/Score';
import React from 'react';
const ResultsPage = () => {
  const calculateScore = (word: any) => {
    return word.answer === word.correct_answer ? 1 : 0;
  };

  const totalScore = DummyResult.reduce((acc, category) => {
    const categoryScore = category.words.reduce(
      (categoryAcc, word) => categoryAcc + calculateScore(word),
      0
    );
    return acc + categoryScore;
  }, 0);

  return (
    <>
      <title>Result</title>
      <Navbar title="E-Learning System" />
      <section>
        <div className="flex col-span-2 justify-evenly mt-[5rem] tracking-wide">
          <QuizHeader text={DummyResult[0].category_title} title="category" />
          <QuizHeader
            text={`Result : ${totalScore} of ${DummyResult[0].words.length}`}
            title="question_no"
          />
        </div>
        <div>
          <div className="flex justify-around mx-[21rem] w-[55rem] mt-9">
            <QuizHeader text="Word" title="question_no" />
            <QuizHeader text="Answer" title="question_no" />
            <div />
          </div>
          <div>
            {DummyResult[0].words.map((answer) => (
              <ul>
                <li className="flex justify-start mx-[10rem] w-[70rem] mt-4">
                  <div className="ml-[14rem] px-[2rem]">
                    {answer.correct_answer === answer.answer ? (
                      <GoCheckCircle className="text-[2rem]" />
                    ) : (
                      <IoCloseSharp className="text-[2rem]" />
                    )}
                  </div>
                  <Score answer={answer.question} question />
                  <Score answer={answer.answer} question={false} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ResultsPage;
