interface Category {
  name: string;
  description: string;
}

interface CategoryProps extends Category {
  handleStart: () => void;
}

const Categories: React.FC<CategoryProps> = ({
  name,
  description,
  handleStart,
}) => {
  return (
    <>
      <li >
        <div className="p-5 w-[22rem] border-[1px] border-gray-500 m-[2rem]">
          <div>
            <h1 className="font-bold text-[20px]">{name}</h1>
            <p className="font-thin py-3  text-[14px] text-gray-600">
              {description}
            </p>
          </div>
          <div className="text-end py-3">
            <button
              onClick={handleStart}
              className="place-self-end bg-blue-500 px-7 mt-4 text-white hover:bg-blue-700 py-2 rounded-[5rem] "
            >
              Start
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Categories;
