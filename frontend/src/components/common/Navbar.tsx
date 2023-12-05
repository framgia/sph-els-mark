import { Link } from 'react-router-dom';
import React from 'react';


interface NavbarProps{
  title: string;
}

const Navbar:React.FC<NavbarProps> = ({title}) => {
  return (
  
   <div className="flex flex-col-2 bg-primary-600 px-9 py-5 items-baseline justify-between text-white">
    <div className="p-2 pl-[5rem]">
      <h1 className="font-bold text-[26px] "><Link to={'/dashboard'}>{title}</Link></h1>
    </div>
  </div>
  );
};
export default Navbar;
