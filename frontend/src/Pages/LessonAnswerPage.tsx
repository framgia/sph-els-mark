import ChoicesButton from '@/components/common/ChoicesButton';
import Done from '@/components/common/Done';
import Navbar from '@/components/common/Navbar';
import QuizHeader from '@/components/common/QuizHeader';
import DummyTest from '@/dummytest';
import { useState } from 'react';
import React from 'react';

const LessonAnswerPage = () => {
  const Items = DummyTest.length;
  const [question, setQuestion] = useState(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = question + 1;
    if (nextQuestion < Items) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <Navbar title="E-Learning System" />
      <section>
        {showScore ? (
          <Done />
        ) : (
          <div className="flex col-span-2 justify-evenly mt-[5rem] tracking-wide">
            <div>
              <QuizHeader
                text={DummyTest[question].category_title}
                title="category"
              />

              <QuizHeader
                text={DummyTest[question].question}
                title="question"
              />
            </div>

            <div>
              <QuizHeader
                text={`Question ${DummyTest[question].id} of ${Items}`}
                title="question_no"
              />
              <div className="mt-8">
                {DummyTest[question].choices.map((choices) => (
                  <ChoicesButton
                    handleNextQuestion={() =>
                      handleNextQuestion(choices.isCorrect)
                    }
                    choices={choices.options}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default LessonAnswerPage;
