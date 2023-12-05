import React from "react";

interface AddCategoryButton {
    text: string;
}
const CategoryButton: React.FC<AddCategoryButton> = ({text}) => {
    return(
        <button
        type="submit" className="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none mt-[2rem] font-medium rounded-lg py-2.5 text-center text-xl bg-primary-600 focus:ring-primary-800">
        
        {text}
        </button>
    );
};

export default CategoryButton;