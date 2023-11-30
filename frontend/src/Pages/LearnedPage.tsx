import Navbar from "../components/common/Navbar";
import Profile from "../components/common/Profile";
import WordsTaken from "../components/common/Words";
const LearnedPage = () => {
  return (
    <>
      <title>Dashboard</title>
      <Navbar />
      <section className="flex flex-col-2  mt-[2rem] align-top">
        <div>
          <Profile />
        </div>
        <div className="border-[1px] h-[25rem] border-gray-300 p-[40px] w-[47rem] mt-[3rem] ml-[5rem]">
          <h1 className="font-medium border-b-2 border-gray-500 p-3 w-full text-[25px]">
            Words Learned
          </h1>
          <div className="flex col-span-2 justify-around">
            <WordsTaken />
          </div>
        </div>
      </section>
    </>
  );
};
export default LearnedPage;
