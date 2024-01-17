import clsx from 'clsx';
import React from 'react';

interface ScoreProps {
  answer: string;
  question: boolean;
}

const Score: React.FC<ScoreProps> = ({ answer, question }) => {
  return (
    <div
      className={clsx('text-gray-700', {
        'mx-[6rem] w-[5rem] ': question === true,
        'mx-[11rem]': !question,
      })}
    >
      {answer}
    </div>
  );
};
export default Score;
