import { Link } from "react-router-dom";



const Done = () => {
  return (
    <>
      <div className="mt-[5rem] px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="font-bold text-[33px] tracking-wide">
          Great! you are done taking this Category!
        </h1>
        <p className="text-gray-600 text-[19px] py-5">
          “Dreams don't work unless you do.”
        </p>

        <Link to={"/result"}>
          <button className="bg-green-500 hover:bg-green-700 px-7 py-4  my-5 rounded-full text-white">
            See Results
          </button>
        </Link>
        {/* {dummyQuestions.slice(0,1).map((category)=> (
                  <Link to={`category/${category.category_id}/result`}>
                  <button className="bg-green-500 hover:bg-green-700 px-7 py-4  my-5 rounded-full text-white">
                    See Results
                  </button>
                </Link>
        ))} */}
      </div>
    </>
  );
};
export default Done;
