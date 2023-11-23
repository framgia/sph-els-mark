
import Navbar from "../components/common/Navbar";
import Profile from "../components/common/Profile";
import UserProfile from "../components/user.png";
import users from "../dummydata";
import Activities from "../components/common/Activities";



const Dashboard = () => {
  return (
    <>
      <head>
        <title>Dashboard</title>
      </head>
      <Navbar />
      <section className="flex flex-col-2  mt-[2rem]">
        <div>
          <Profile />
        </div>
      
        <div
    className="border-[1px] border-gray-300 p-[1rem] w-[45rem] mt-[3rem] ml-[3rem]">
          <h1 className="font-medium border-b-2 border-gray-500 p-3 w-full text-[25px]">
            Activities
          </h1>
          {users.slice(1, 5).map((user:any) => (
              <Activities 
              key={user.id}
              UserProfile={UserProfile}
              {...user}
              />
            ))}
          </div>
           
              
      </section>
    </>
  );
};
export default Dashboard;