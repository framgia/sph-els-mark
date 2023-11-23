import { useParams } from "react-router-dom";
import UserProfile from "../components/user.png";
import users from "../dummydata";
import Navbar from "../components/common/Navbar";
import { useState } from "react";
import Follow from "../components/common/Follow";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const params = useParams();
  const User = params.slug;
  console.log(params);
  const [follow, setFollow] = useState<boolean>(false);

  const handleFollow = () => {
    setFollow((prev) => !prev);
  };

  const selectedUser = users.find((users) => users.first_name === User);
  return (
    <>
      <head>
        <title>Dashboard | {selectedUser?.first_name} </title>
      </head>
      <Navbar />
      <section className="flex flex-col-2  mt-[2rem]">
        <Follow
          key={selectedUser?.id}
          UserProfile={UserProfile}
          handleFollow={handleFollow}
          follow={follow}
          selectedUser={selectedUser}
          {...selectedUser}
        />
        <div className="border-[1px] h-[25rem] border-gray-300 p-[40px] w-[47rem] mt-[3rem] ml-[5rem]">
          <h1 className="font-medium border-b-2 border-gray-500 p-3 w-full text-[25px]">
            Activities
          </h1>
          <div>
            <ul>
              <li>
                <div className="flex w-full items-center">
                  <img src={UserProfile} alt="user" className="h-[60px] m-4" />
                  <div>
                    <h1 className="text-[18px]">
                      <span className="text-blue-500 cursor-pointer">
                        {" "}
                        <Link
                          to={`/profile/student/${selectedUser?.first_name}`}
                        >
                          {selectedUser?.first_name}
                        </Link>{" "}
                      </span>{" "}
                      learned{" "}
                      <span className="text-blue-500 cursor-pointer">
                        {" "}
                        {selectedUser?.score}{" "}
                      </span>{" "}
                      of{" "}
                      <span className="text-blue-500 cursor-pointer">
                        {selectedUser?.total_items}{" "}
                      </span>{" "}
                      words in{" "}
                      <span className="text-blue-500 cursor-pointer">
                        {selectedUser?.category}
                      </span>
                    </h1>
                    <p className="font-light text-gray-400">2 days ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfilePage;
