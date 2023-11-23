import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="flex flex-col-2 bg-primary-600 px-9 py-5 items-baseline justify-between text-white">
    <div className="p-2 pl-[5rem]">
      <h1 className="font-bold text-[26px] "><Link to={'/dashboard'}>E-learning System</Link></h1>
    </div>
    <div className=" flex ">
      <ul className="flex p-2 text-[18px]">
        <li className="px-9  hover:text-cyan-300"><Link to={'/categories'}>Categories</Link></li>
<<<<<<< Updated upstream
        <li className="px-9 hover:text-cyan-300"><Link to={'#wordslearned'}>Words Learned</Link></li>
=======
        <li className="px-9 hover:text-cyan-300"><Link to={'/learning'}>Words Learned</Link></li>
>>>>>>> Stashed changes
        <li className="px-9  hover:text-cyan-300"><Link to={'#editprofile'}>Settings</Link></li>
      </ul>
    </div>
   </div>
  );
}
export default Navbar;