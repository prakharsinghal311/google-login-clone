import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields(props) {
  const emailHandler = (e) => {
    props.handleEmailChange(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "42ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Email or phone"
          helperText="Incorrect entry."
        />
      </div> */}
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        onChange={emailHandler}
      />
    </Box>
  );
}
