import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ImageDialogProps {
  open: boolean;
  handleClose: () => void;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ open, handleClose }) => (
  <Dialog.Root open={open}>
    <Dialog.Portal>
      <Dialog.Overlay
        onClick={handleClose}
        className="bg-gray-500 opacity-50 fixed inset-0"
      ></Dialog.Overlay>

      <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="m-0 text-[25px] font-bold text-blue-500">
          Upload Profile Picture
        </Dialog.Title>
        <Dialog.Description className=" mt-[10px] font-light text-gray-600 mb-5 text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <div className="mt-[25px] flex justify-end">
          <input type="file" />
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white hover:bg-blue-600 focus:shadow-blue-700 inline-flex py-3 w-[11rem]  items-center justify-center rounded-[4px]  px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none mt-9 "
          >
            {" "}
            Upload Profile{" "}
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ImageDialog;
