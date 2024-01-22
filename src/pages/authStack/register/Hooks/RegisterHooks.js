import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { loginTest } from "../../../../Redux/auth/slice";
import login from "../../../../Redux/auth/login/api";
import { useTranslation } from "react-i18next";

const IS_LOGGED_IN = import.meta.env.VITE_REACT_IS_LOGGED_IN;
const HAS_DATA = import.meta.env.VITE_REACT_HAS_DATA;

export function registerHooks() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const initialState = {
    email: "",
    fname: "",
    lname: "",
    phone: "",
    password: "",
    confirmPassword: "",
    degree: "",
    specialty: "",
  };

  const phoneRegex = //from 0-9 and length 10 digits first digit is 0 and second digit is 5 or 6 or 7
    /^(0)([5|6|7])([0-9]{8})$/;
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  let validationSchema1 = Yup.object().shape({
    email: Yup.string()
      .required(t("registerHooks.0.email.0.required"))
      .min(8, t("registerHooks.0.email.0.min"))
      .matches(emailRegex, t("registerHooks.0.email.0.matches")),
    fname: Yup.string()
      .required(t("registerHooks.0.fname.0.required"))
      .min(3, t("registerHooks.0.fname.0.min")),
    lname: Yup.string()
      .required(t("registerHooks.0.lname.0.required"))
      .min(3, t("registerHooks.0.lname.0.min")),
    phone: Yup.string()
      .required(t("registerHooks.0.phone.0.required"))
      .min(10, t("registerHooks.0.phone.0.min"))
      .matches(phoneRegex, t("registerHooks.0.phone.0.matches"))
  });
  let validationSchema2 = Yup.object().shape({
    password: Yup.string()
      .required(t("registerHooks.0.password.0.required"))
      .min(6, t("registerHooks.0.password.0.min")),
    confirmPassword: Yup.string()
      .required(t("registerHooks.0.confirmPassword.0.required"))
      .min(6, t("registerHooks.0.confirmPassword.0.min"))
      .oneOf(
        [Yup.ref("password"), null],
        t("registerHooks.0.confirmPassword.0.oneOf")
      ),
    degree: Yup.string()
      .required(t("registerHooks.0.degree.0.required")),
    specialty: Yup.string()
      .required(t("registerHooks.0.specialty.0.required")),
  });

  const onErrorAction = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };
  const onSuccessAction = (message, dataObject) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });

    localStorage.setItem(IS_LOGGED_IN, "true");
    localStorage.setItem(HAS_DATA, JSON.stringify(dataObject));

    navigate("/login");
  };

  const OnStep1 = async (data) => {
    let object = {
      onSuccessAction,
      onErrorAction,
      obj: data,
    };
  };
  const OnSubmit = async (data) => {
    let object = {
      onSuccessAction,
      onErrorAction,
      obj: data,
    };
    // dispatch(login(object));
    dispatch(loginTest("ADMIN"));
    navigate("/login");
  };

  const [hidePass, setHidePass] = useState(false);
  const HandlehidePass = () => {
    setHidePass(!hidePass);
  };

  return {
    initialState,
    validationSchema1,
    validationSchema2,
    OnSubmit,
    OnStep1,
    HandlehidePass,
    hidePass,
  };
}
