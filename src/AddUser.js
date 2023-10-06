import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { FaWpforms } from "react-icons/fa";
import ErrorModal from "./components/Modal/ErrorModal";

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

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = () => {
    if (name.trim() === "" || age.trim() === "") {
      setErrorMessage("Both fields are required.");
      setOpenErrorModal(true);
    } else {
      console.log("Name:", name);
      console.log("Age:", age);
    }
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle}>
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
          <Button
            variant="contained"
            type="button"
            onClick={handleFormSubmit}
            style={buttonStyle}
          >
            Add User
          </Button>
        </div>
      </form>

      {/* Render the ErrorModal component */}
      <ErrorModal
        open={openErrorModal}
        onClose={handleCloseErrorModal}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default AddUser;
