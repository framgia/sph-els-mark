import AlertDialog from "../components/Dialog";
import Categories from "../components/common/Categories";
import Navbar from "../components/common/Navbar";
import dummyCategories from "../dummycategory";
import { useState } from "react";

const CategoryPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleStart = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <title>Categories</title>
      <Navbar />
      <AlertDialog open={isOpen} handleClose={handleClose} />
      <section className="ml-[7rem]">
        <h1 className="text-[25px] font-bold py-8">Categories</h1>
        <div>
          <ul className="flex flex-wrap ">
            {dummyCategories.map((category: any, index: number) => (
              <Categories
                name={category.name}
                description={category.description}
                handleStart={handleStart}
                key={index}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default CategoryPage;
