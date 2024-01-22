import React, { useEffect, useMemo } from "react";
import MainRoutes from "./Routes/Routes";
import { themeSettings } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import login from "./Redux/auth/login/api";


const IS_LOGGED_IN = import.meta.env.VITE_REACT_IS_LOGGED_IN;
const HAS_DATA = import.meta.env.VITE_REACT_HAS_DATA;


function App() {
  const mode = useSelector((state) => state.AppTheme.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };
  const onSuccessAction = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });

    navigate("/dashboard");
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);
    const storedData = localStorage.getItem(HAS_DATA);
    const parsedData = JSON.parse(storedData);

    if (isLoggedIn === "true") {
      let object = {
        onSuccessAction,
        onErrorAction,
        obj: parsedData,
      };
      dispatch(login(object));
    } else {
      console.log("isLoggedIn", isLoggedIn);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <MainRoutes />
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default App;
