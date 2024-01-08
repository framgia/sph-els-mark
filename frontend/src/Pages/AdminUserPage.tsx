import { useState } from 'react';
import ViewUserList from '../components/common/ViewUserlist';
import Navbar from '../components/common/Navbar';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import users from '../dummydata';
import React from 'react';
import clsx from 'clsx';

interface UserList {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const itemsPerPage: number = 5;

const AdminUserPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages: number = Math.ceil(users.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const displayedUsers: UserList[] = users.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Navbar title="E-Learning System | Admin" />
      <div className="w-[80rem] h-[40rem] mx-[8rem] bg-white rounded-xl shadow-md">
        <h1 className="ml-[10rem] mt-[2rem] font-bold">User List</h1>
        <table className="ml-[10rem] mt-[1rem] w-[56rem] h-[30rem] table-fixed">
          <tr className="border-2 border-black">
            <th className="border-r-2 border-black">Name</th>
            <th className="border-r-2 border-black">Email</th>
            <th>Action</th>
          </tr>

          {displayedUsers.map((user: UserList) => (
            <tr key={user.id} className="border-2 border-black">
              <td className="border-r-2 border-black ">
                <h1 className="text-center">
                  {user.first_name} {user.last_name}
                </h1>
              </td>
              <td className="border-r-2 border-black ">
                <h1 className="text-center">{user.email}</h1>
              </td>
              <td>
                <ViewUserList text="View User" />
              </td>
            </tr>
          ))}
        </table>
        <div className="ml-[55rem] mt-[3rem]">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only"></span>
              <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={clsx(
                  'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  {
                    'bg-blue-600 text-white': currentPage === index + 1,
                    'bg-white-900 text-black-200 hover:bg-grey-800 border-[2px]':
                      currentPage !== index + 1,
                  }
                )}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only"></span>
              <HiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminUserPage;
