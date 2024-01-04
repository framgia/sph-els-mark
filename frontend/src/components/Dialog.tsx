import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Note:  you can only take this Category once."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If you click continue, you will marked this category as taken.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default AlertDialog;
