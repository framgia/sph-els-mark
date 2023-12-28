import React from 'react';
import Navbar from '../components/common/Navbar';
import InputField from './auth/components/InputField';
import CategoryButton from '../components/common/AddCategoryButton';

const AddCategoryPage = () => {
  return (
    <>
      <title>Add Category</title>
      <Navbar title="E-Learning System | Admin" />
      <section className="flex ml-[10rem] flex-col-2  mt-[2rem]">
        <div className=" p-[1rem] w-[45rem] mt-[1rem] ml-[17rem]">
          <h1 className="font-bold border-gray-500 w-full text-[25px]">
            Add Category
          </h1>
          <h4 className="flex mt-[2rem] text-xl text-[18px]">Title</h4>
          <InputField
            type="text"
            name="category_title"
            id="title"
            isAdmin={false}
            value=""
            placeholder=""
            email={false}
          />
          <h4 className="flex mt-[2rem] text-xl text-[18px]">Description</h4>
          <textarea
            rows={10}
            cols={86}
            className="resize-none border mt-1 rounded-lg bg-gray-50 ps-5 pe-5"
          ></textarea>

          <CategoryButton text="Submit" />
        </div>
      </section>
    </>
  );
};

export default AddCategoryPage;
