import UserProfile from '@/components/user.png';
import users from '@/dummydata';
import React from 'react';

interface Users {
  id: number;
  first_name: string;
  last_name: string;
  category: string;
  total_items: string;
  score: string;
  taken_category: number;
}

const AdminProfile = () => {
  return (
    <div className="p-[4rem] ml-[5rem] flex flex-col-2 items-center">
      <div>
        <h1 className="p-[1rem] text-[26px] font-bold tracking-normal">
          Dashboard
        </h1>
        <img
          src={UserProfile}
          alt="profile"
          className="h-[150px] bg-gray-200 p-2 rounded"
        />
      </div>
      {users.slice(1, 2).map((user: Users) => (
        <div className="px-8 mt-9" key={user.id}>
          <h1 className="font-semibold text-[21px]">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-blue-400 p-1">Admin</p>
        </div>
      ))}
    </div>
  );
};
export default AdminProfile;
