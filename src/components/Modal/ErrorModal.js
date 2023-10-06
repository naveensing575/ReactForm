import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "80%",
  borderRadius: 8,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#ffffff",
};

const titleStyle = {
  backgroundColor: "#f44336",
  color: "#fff",
  padding: "12px 16px",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const contentStyle = {
  padding: "16px",
};

const buttonStyle = {
  backgroundColor: "#f44336",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#d32f2f",
  },
};

const ErrorModal = ({ open, onClose, errorMessage }) => {
  return (
    <Dialog open={open} onClose={onClose} style={modalStyles}>
      <DialogTitle style={titleStyle}>Error</DialogTitle>
      <DialogContent style={contentStyle}>
        <Typography variant="body1">{errorMessage}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={buttonStyle}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
