import ChoicesButton from '@/components/common/ChoicesButton';
import Done from '@/components/common/Done';
import Navbar from '@/components/common/Navbar';
import QuizHeader from '@/components/common/QuizHeader';
import dummyQuestions from '@/context/dummytest';
import { useState } from 'react';
import React from 'react';
const LessonAnswerPage = () => {
  const totalQuestions = dummyQuestions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
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
                text={dummyQuestions[questionIndex].category_title}
                title="category"
              />

              <QuizHeader
                text={dummyQuestions[questionIndex].question}
                title="question"
              />
            </div>

            <div>
              <QuizHeader
                text={`Question ${dummyQuestions[questionIndex].id} of ${totalQuestions}`}
                title="question_no"
              />
              <div className="mt-8">
                {dummyQuestions[questionIndex].choices.map((choices) => (
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
