import React, { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import RegisterForm from "./Components/RegisterForm";
import ButtonLanguage from "../../../components/utils/Button/LanguageBTN";
import { useSelector } from "react-redux";

const Register = () => {
  const buttonRef = useRef(null);
  const mode = useSelector((state) => state.AppTheme.mode);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: theme.palette.background.main,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 20,
          borderRadius: 0.6,
        }}
      >
        <ButtonLanguage ref={buttonRef} />
      </Box>
      <RegisterForm />
    </Box>
  );
};

export default Register;
