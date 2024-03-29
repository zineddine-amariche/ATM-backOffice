import React from "react";
import { PrimaryText } from "../../../../components/utils/typography";
import { CircularProgress, Stack, useTheme } from "@mui/material";
import { authHooks } from "../hooks/authHooks";
import { Formik } from "formik";
import Space from "../../../../components/Layouts/Space";
import InputFeilds from "../../../../components/utils/Inputs/InputFeilds";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const theme = useTheme();

  const { initialState, validationSchema, OnSubmit, hidePass, HandlehidePass } =
    authHooks();
  const { t } = useTranslation();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <Stack
      p={5}
      bgcolor={theme.palette.background.alt}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "30%",
        md: "50%",
      }}
      borderRadius={2}
    >
      <PrimaryText
        fontWeight={"500"}
        fontSize={"25px"}
        text={`${t("greeting")} - Algerian tech makers !`}
        color={theme.palette.text.dark}
        cursor
      />
      <Space />
      <PrimaryText
        fontWeight={"500"}
        fontSize={"18px"}
        text={`${t("greeting_sous_titre")} `}
        color={theme.palette.text.contrastText}
        cursor
        lineHeight={1.5}
      />

      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          OnSubmit(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
        }) => {
          const { email, password } = values;
          return (
            <>
              <Space space={"20px"} />
              <Stack width={"100%"} spacing={3} display="flex">
                <InputFeilds
                  label={"E-mail"}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  value={email}
                  onChange={handleChange}
                  autoFocus={true}
                  autoComplete="Email"
                  required={true}
                  id={"outlined-controlled"}
                  name={"email"}
                  onBlur={() => {
                    setFieldTouched("email", true);
                  }}
                />
                <InputFeilds
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  onChange={handleChange}
                  autoFocus={true}
                  required={true}
                  id={"outlined-controlled"}
                  onBlur={() => {
                    setFieldTouched("password", true);
                  }}
                  label="Mot de passe"
                  name={"password"}
                  value={password}
                  secureTextEntry={hidePass ? true : false}
                  type={hidePass ? "text" : "password"}
                  hidePass={hidePass}
                  HandlehidePass={HandlehidePass}
                />
              </Stack>
              <Space space={40} />

              <Button
                variant="contained"
                style={{
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.light,
                  fontSize: 17,
                  mt: 3,
                  paddingTop: 4,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.light,
                  },
                }}
                onClick={handleSubmit}
                startIcon={
                  isLoading ? (
                    <CircularProgress size={25} sx={{ p: "5px" }} />
                  ) : (
                    <Space space={0} />
                  )
                }
              >
                {!isLoading ? "Login" : ""}
              </Button>
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default LoginForm;

<></>;
