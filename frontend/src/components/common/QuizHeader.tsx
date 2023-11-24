import clsx from "clsx";

interface HeaderProps {
  text: string;
  title: "category" | "question_no" | "question";
}

const QuizHeader: React.FC<HeaderProps> = ({ text, title }) => {
  return (
    <>
      <h1
        className={clsx("font-semibold", {
          "text-[28px]": title === "category",
          "mt-[8rem] text-[35px] ": title === "question",
          "text-[20px] ml-[10rem]": title === "question_no",
        })}
      >
        {text}
      </h1>
    </>
  );
};
export default QuizHeader;
