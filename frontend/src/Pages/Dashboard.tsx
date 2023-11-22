import Navbar from "../components/common/Navbar";
import Profile from "../components/common/Profile";
import UserProfile from '../components/user.png'
import users from '../dummydata'



const Dashboard = () => {
  return (
<>
<head>
  <title>Dashboard</title>
</head>
<Navbar />
<section className="flex flex-col-2  mt-[2rem]">
      <div>
      <Profile/>
      </div>
           <div className="border-[1px] border-gray-300 p-[1rem] w-[45rem] mt-[3rem] ml-[3rem]">
             <h1 className="font-medium border-b-2 border-gray-500 p-3 w-full text-[25px]">Activities</h1>
             <div>
             {users.slice(1,5).map((user:any, index:number) => (
              <ul key={index}>
              <li >
                <div className="flex w-full items-center">
                  <img src={UserProfile} alt="user" className="h-[60px] m-4"/>
                  <div>
                  <h1 className="text-[18px]"><span className="text-blue-500 cursor-pointer"> {user.first_name} </span> learned <span className="text-blue-500 cursor-pointer"> {user.score} </span> of <span className="text-blue-500 cursor-pointer">{user.total_items} </span> words in <span className="text-blue-500 cursor-pointer">{user.category}</span></h1>
                  <p className="font-light text-gray-400">2 days ago</p>
                  </div>
                </div>
              </li>
              </ul>
             ) )}
             </div>
           </div>
    </section>
</>
  )
}
export default Dashboard;