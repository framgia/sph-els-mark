const dummyQuestions = [
  {
    id: 1,
    category_id: 1,
    category_title: 'Basic 500',
    question: 'かぎ針編み',
    choices: [
      { options: 'Dog', isCorrect: false },
      { options: 'Walking', isCorrect: false },
      { options: 'Crochet', isCorrect: true },
      { options: 'Fly', isCorrect: false },
    ],
  },
  {
    id: 2,
    category_id: 1,
    category_title: 'Basic 500',
    question: 'こんにちは',
    choices: [
      { options: 'Hi', isCorrect: true },
      { options: 'How are you ?', isCorrect: false },
      { options: "I'm fine", isCorrect: false },
      { options: 'Go out', isCorrect: false },
    ],
  },

  {
    id: 3,
    category_id: 1,
    category_title: 'Basic 500',
    question: 'ありがとう',
    choices: [
      { options: "You're welcome", isCorrect: false },
      { options: 'Thanks', isCorrect: true },
      { options: 'Goodbye', isCorrect: false },
      { options: 'Lets walk', isCorrect: false },
    ],
  },
];

export default dummyQuestions;
