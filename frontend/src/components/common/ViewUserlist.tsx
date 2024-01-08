import React from "react";

interface ViewUserListProps {
  text: string;
}
const ViewUserList: React.FC<ViewUserListProps> = ({ text }) => {
  return (
    <div className="items-center">
    <button
      type="submit"
      className="text-white  hover:bg-blue-700  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600  focus:ring-primary-800 ml-[6rem] "
    >
      {text}
    </button>
    </div>
  );
};

export default ViewUserList;
