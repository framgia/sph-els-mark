import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/common/Navbar';
import DummyTest from '@/dummytest';
import EditDialog from '@/components/common/EditDialog';
import DeleteDialog from '@/components/common/DeleteDialog';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
interface Choice {
  options: string;
  isCorrect: boolean;
}
interface DummyTestInterface {
  id: number;
  category_id: number;
  category_title: string;
  question: string;
  choices: Choice[];
}

const itemsPerPage: number = 5;
const WordListPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(DummyTest.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const displayedWords: DummyTestInterface[] = DummyTest.slice(
    startIndex,
    endIndex
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleEditClick = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    setEditDialogOpen(true);
  };
  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedCategoryId(null);
  };

  const handleDeleteClick = (categoryId: number) => {
    // Implement your delete logic here
    setSelectedCategoryId(categoryId);
    setDeleteDialogOpen(true);
  };
  const handleDeleteDialogClose = () => {
    // Add function to close DeleteDialog
    setDeleteDialogOpen(false);
    setSelectedCategoryId(null);
  };
  return (
    <>
      <title>Word List</title>
      <Navbar title="E-Learning System | Admin" />
      <div className="pl-[13rem] pt-[2rem] w-[80rem] h-[40rem] mx-[8rem] bg-white rounded-xl">
        <h4 className="py-[1px] font-bold text-xl	">
          {displayedWords[0].category_title}
        </h4>
        <table className="border-4 border-black mt-[1rem] w-[56rem] h-[25rem] table-fixed">
          <thead>
            <tr>
              <th className="border-2 border-black">Question</th>
              <th className="border-2 border-black">Choices</th>
              <th className="border-2 border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedWords.map((category: DummyTestInterface) => (
              <tr key={category.id}>
                <td className="border-2 border-black whitespace-nowrap px-[5px]">
                  {category.question}
                </td>
                <td className="border-2 border-black p-[5px]">
                  {category.choices.map((choices: Choice, index: number) => (
                    <li key={index}>{choices.options}</li>
                  ))}
                </td>
                <td className="border-2 border-black whitespace-nowrap px-[5px] text-center">
                  <Link to={{ pathname: `/admin/${category.id}/addword` }}>
                    <button
                      type="button"
                      className="px-[5px] underline decoration-sky-500 hover:bg-sky-500"
                    >
                      Add Word
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="px-[5px] underline decoration-yellow-500 hover:bg-yellow-700"
                    onClick={() => handleEditClick(category.id)}
                  >
                    Edit Word
                  </button>

                  <button
                    type="button"
                    className="px-[5px] underline decoration-red-500 hover:bg-red-500"
                    onClick={() => handleDeleteClick(category.id)}
                  >
                    Delete Word
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedCategoryId !== null && (
          <>
            <EditDialog
              open={editDialogOpen}
              onClose={handleEditDialogClose}
              selectedCategoryId={selectedCategoryId}
            />
            <DeleteDialog // Add DeleteDialog
              open={deleteDialogOpen}
              onClose={handleDeleteDialogClose}
              selectedCategoryId={selectedCategoryId}
            />
          </>
        )}
        <div className="ml-[44rem] mt-[3rem]">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-insert ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outlin-offset-0"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
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
              className="inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
export default WordListPage;
