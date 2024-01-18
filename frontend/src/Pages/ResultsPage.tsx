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

  //using random since category page is  not yet merge
  const category_id = Math.floor(Math.random() * 1);
  const catId = category_id + 1;

  const totalScore = (category: any) => {
    const categoryScore = category.words.reduce(
      (categoryAcc: any, word: any) => categoryAcc + calculateScore(word),
      0
    );
    return categoryScore;
  };

  const specificCategory = DummyResult.find(
    (category) => category.category_id === catId
  );
  const score = totalScore(specificCategory);

  return (
    <>
      <title>Result</title>
      <Navbar title="E-Learning System" />
      <section>
        <div className="flex col-span-2 justify-evenly mt-[5rem] tracking-wide">
          <QuizHeader
            text={DummyResult[category_id].category_title}
            title="category"
          />
          <QuizHeader
            text={`Result : ${score} of ${DummyResult[category_id].words.length}`}
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
            {DummyResult[category_id].words.map((answer, word_id) => (
              <ul key={word_id}>
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
