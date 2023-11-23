import { Link } from "react-router-dom";

interface UserProfiles {
  id?: number;
  first_name?: string;
  last_name?: string;
  category?: string;
  total_items?: string;
  score?: string;
  taken_category?: number;
}

interface ActivitiesProps extends UserProfiles {
  UserProfile: string;
  users: any;
}

const Activities: React.FC<ActivitiesProps> = ({ UserProfile, ...user }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <div className="flex w-full items-center">
              <img src={UserProfile} alt="user" className="h-[60px] m-4" />
              <div>
                <h1 className="text-[18px]">
                  <span className="text-blue-500 cursor-pointer">
                    {" "}
                    <Link to={`/profile/student/${user.first_name}`}>
                      {user.first_name}
                    </Link>{" "}
                  </span>{" "}
                  learned{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {" "}
                    {user.score}{" "}
                  </span>{" "}
                  of{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {user.total_items}{" "}
                  </span>{" "}
                  words in{" "}
                  <span className="text-blue-500 cursor-pointer">
                    {user.category}
                  </span>
                </h1>
                <p className="font-light text-gray-400">2 days ago</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Activities;
