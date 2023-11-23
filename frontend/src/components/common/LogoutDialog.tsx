import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface IDialog {
  open: boolean;
  handleClose: () => void;
}

const LogoutDialog: React.FC<IDialog> = ({ open, handleClose }) => (
  <Dialog.Root open={open}>
    <Dialog.Portal>
      <Dialog.Overlay
        onClick={handleClose}
        className="bg-gray-500 opacity-50 fixed inset-0"
      />
      <Dialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="m-0 text-[25px] font-bold text-blue-500">
          <h1>Log out </h1>
        </Dialog.Title>
        <Dialog.Description className=" mt-[10px] font-light text-gray-600 mb-5 text-[15px] leading-normal">
          Are you sure you want to Log out ?
        </Dialog.Description>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              onClick={handleClose}
              className="mx-4 bg-blue-400 text-white hover:bg-blue-500 focus:shadow-blue-600 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px]  focus:outline-none"
            >
              Cancel
            </button>
          </Dialog.Close>

          <Dialog.Close asChild>
            <button
              onClick={handleClose}
              className="bg-red-500 text-white hover:bg-red-600 focus:shadow-red-700 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px]  focus:outline-none"
            >
              Log out
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default LogoutDialog;
