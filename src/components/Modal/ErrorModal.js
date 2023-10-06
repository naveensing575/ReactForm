import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ErrorModal = ({ open, onClose, errorMessage }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <p>{errorMessage}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
