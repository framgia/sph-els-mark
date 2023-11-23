import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FiXCircle } from "react-icons/fi";
import DialogInput from "./DialogInput";



interface IDialog {
  open: boolean;
  handleClose: () => void;
}

const ChangePassDialog: React.FC<IDialog> = ({ open, handleClose }) => (
  <Dialog.Root open={open}>
    <Dialog.Portal>
      <Dialog.Overlay
        onClick={handleClose}
        className="bg-gray-500 opacity-50 fixed inset-0"
      />
      <Dialog.Content className=" fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="m-0 text-[25px] font-bold text-blue-500">
          Change password
        </Dialog.Title>
        <Dialog.Description className=" mt-[10px] font-light text-gray-600 mb-5 text-[15px] leading-normal">
          Make changes to your password here. Click save when you're done.
        </Dialog.Description>
        <DialogInput
          id="password"
          value="Current Password"
          defaultValue={""}
          type="password"
        />
        <DialogInput
          id="password"
          defaultValue={""}
          value="New Password"
          type="password"
        />

        <DialogInput
          id="password"
          defaultValue={""}
          value="Confirm New Password"
          type="password"
        />

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              onClick={handleClose}
              className="bg-blue-500 text-white hover:bg-blue-600 focus:shadow-blue-700 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            onClick={handleClose}
            className="p-[1.75rem] absolute top-[10px] right-[8px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none text-black"
            aria-label="Close"
          >
            <FiXCircle />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ChangePassDialog;
