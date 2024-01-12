import React from 'react';

interface UserProfiles {
  id?: number;
  first_name?: string;
  last_name?: string;
  category?: string;
  total_items?: string;
  score?: string;
  taken_category?: number;
}

interface FollowProps extends UserProfiles {
  UserProfile: string;
  handleFollow: () => void;
  follow: boolean;
  selectedUser?: UserProfiles;
}

const Follow: React.FC<FollowProps> = ({
  UserProfile,
  handleFollow,
  follow,
  selectedUser,
}) => {
  return (
    <>
      <div className="p-[4rem] ml-[4rem] items-center">
        <div>
          <img
            src={UserProfile}
            alt="profile"
            className="h-[240px] bg-gray-200 p-2 rounded"
          />
        </div>

        <div className=" mt-9  border-b-2 border-gray-500 pb-[1rem] w-[240px] text-center">
          <h1 className="font-semibold text-[21px] ">
            {`${selectedUser?.first_name} ${selectedUser?.last_name}`}
          </h1>
        </div>
        <div className="flex flex-col-2 pt-[1rem] text-center w-[240px] ml-5">
          <div className="p-3">
            <h1>50</h1>
            <p className="">followers</p>
          </div>
          <div className="p-3 ">
            <h1>31</h1>
            <p>following</p>
          </div>
        </div>

        <button
          onClick={handleFollow}
          className="bg-blue-500  text-white px-[4rem] ml-5 py-2 rounded-[5rem] mt-5"
        >
          {follow ? 'Unfollow' : 'Follow'}
        </button>

        <p className="py-4 px-6 text-blue-500 underline ml-5">
          Learned 120 words
        </p>
      </div>
    </>
  );
};

export default Follow;
