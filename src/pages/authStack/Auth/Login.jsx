import React, { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import LoginForm from "./LoginForm";
import ButtonLanguage from "../../../components/utils/Button/LanguageBTN";
import { useSelector } from "react-redux";

const Login = () => {
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
      <LoginForm />
    </Box>
  );
};

export default Login;
