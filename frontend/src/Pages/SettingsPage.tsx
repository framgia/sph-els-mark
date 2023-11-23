import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Profile from "../components/common/Profile";
import EditProfileDialog from "../components/common/EditDialog";
import SelectButton from "../components/common/SelectButton";
import LogoutDialog from "../components/common/LogoutDialog";
import ChangePassDialog from "../components/common/ChangePassDialog";
import ImageDialog from "../components/common/ImageDialog";

const SettingsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [passwordOpen, setPasswordOpen] = useState<boolean>(false);
  const [imageOpen, setImageOpen] = useState<boolean>(false);
  const handleDialog = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangePassword = () => {
    setPasswordOpen((prev) => !prev);
  };

  const handleUpload = () => {
    setImageOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIsClose = () => {
    setIsOpen(false);
  };

  const ClosePassword = () => {
    setPasswordOpen(false);
  };

  const handleUploadClose = () => {
    setImageOpen(false);
  };

  return (
    <>
      <title>Settings</title>
      <Navbar />
      <EditProfileDialog open={open} handleClose={handleClose} />
      <LogoutDialog open={isOpen} handleClose={handleIsClose} />
      <ChangePassDialog open={passwordOpen} handleClose={ClosePassword} />
      <ImageDialog open={imageOpen} handleClose={handleUploadClose} />
      <section className="flex flex-col-2  mt-[2rem]">
        <Profile />
        <div className="border-[1px] border-gray-300 p-[1rem] w-[45rem] mt-[3rem] ml-[3rem]">
          <h1 className="font-medium border-b-2 border-gray-500 p-3 w-full text-[25px]">
            Settings
          </h1>
          <div className="justify-center my-[3rem] mx-[10rem]">
            <SelectButton text="Edit Profile" handleDialog={handleDialog} />
            <SelectButton
              text="Change Password"
              handleDialog={handleChangePassword}
            />
            <SelectButton
              text="Change Profile Picture"
              handleDialog={handleUpload}
            />
            <SelectButton text="Logout" handleDialog={handleLogout} />
          </div>
        </div>
      </section>
    </>
  );
};
export default SettingsPage;
