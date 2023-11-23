import React from "react";

interface TitleProps {
  title: string;
}

const TitleTemplate: React.FC<TitleProps> = ({ title }) => {
  return <h1 className="py-6 font-semibold text-[17px]">{title}</h1>;
};
export default TitleTemplate;
