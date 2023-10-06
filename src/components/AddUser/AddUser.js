import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Alert,
  AlertTitle,
  Snackbar,
} from "@mui/material";
import { FaWpforms } from "react-icons/fa";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#b691fa",
};

const formStyle = {
  border: "1px solid #ccc",
  padding: "16px",
  borderRadius: "8px",
  width: "300px",
};

const formControlStyle = {
  margin: "8px",
};

const labelStyle = {
  fontWeight: "bold",
};

const buttonStyle = {
  marginTop: "16px",
  backgroundColor: "purple",
};

const iconStyle = {
  fontSize: "2rem",
  marginRight: "10px",
};

const snackbarStyle = {
  animation: "slide-in 0.5s",
};

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "") {
      setErrorMessage("Both fields are required!");
      setOpenAlert(true);
    } else {
      console.log("Name:", name);
      console.log("Age:", age);
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleFormSubmit}>
        <h1>
          <FaWpforms style={iconStyle} />
          React Forms
        </h1>
        <FormControl style={formControlStyle}>
          <InputLabel style={labelStyle}>Username</InputLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.target.classList.add("input-focused")}
            onBlur={(e) => e.target.classList.remove("input-focused")}
          />
        </FormControl>
        <FormControl style={formControlStyle}>
          <InputLabel style={labelStyle}>Age (years)</InputLabel>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onFocus={(e) => e.target.classList.add("input-focused")}
            onBlur={(e) => e.target.classList.remove("input-focused")}
          />
        </FormControl>

        <div>
          <Button variant="contained" type="submit" style={buttonStyle}>
            Add User
          </Button>
        </div>
      </form>

      <Snackbar
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        style={snackbarStyle}
      >
        <Alert severity="error" onClose={handleAlertClose}>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddUser;
