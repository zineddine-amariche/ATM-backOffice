import React from "react";
import { PrimaryText } from "../../../../../components/utils/typography";
import { CircularProgress, Stack, Box, useTheme } from "@mui/material";
import { registerHooks } from "../../Hooks/RegisterHooks";
import { Formik } from "formik";
import Space from "../../../../../components/Layouts/Space";
import InputFeilds from "../../../../../components/utils/Inputs/InputFeilds";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useState } from "react";
import Stepper from "../stepper"

const index = () => {
  const theme = useTheme();

  const { isLoading } = useSelector((state) => state.auth);
  const {
    initialState,
    validationSchema1,
    validationSchema2,
    OnSubmit,
    OnStep1,
    hidePass,
    HandlehidePass,
  } = registerHooks();

  const steps = ["Step 1", "Step 2"];
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  const isFristStep = activeStep === 0;
  var validationSchema;
  switch (activeStep) {
    case 0:
      validationSchema = validationSchema1;
      console.log("case 0");
      console.log(validationSchema);
      break;
    case 1:
      validationSchema = validationSchema2;
      console.log("case 1");
      console.log( validationSchema);
      break;
    default:
      break;
  }
  const handleNext = () => {
    if (isLastStep) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    if (isFristStep) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const rowDirection = currentLanguage === "ar" ? "row-reverse" : "row";
  const direction = currentLanguage === "ar" ? "rtl" : "ltr";
  return (
    <Stack
      pt={5}
      bgcolor={theme.palette.background.alt}
      width={{
        xs: "93%",
        sm: "80%",
        lg: "30%",
        md: "50%",
      }}
      borderRadius={2}
    >
      <Box textAlign="center">
        <PrimaryText
          fontWeight={"500"}
          fontSize={"25px"}
          text={`${t("greeting")} - Algerian tech makers !`}
          color={theme.palette.text.dark}
          cursor
        />
      </Box>
      <Space space={10} />
      <Box
        display="flex"
        alignItems={"start"}
        flexDirection={rowDirection}
        textAlign="start"
      >
        <PrimaryText
          fontWeight={"500"}
          fontSize={"18px"}
          text={`${t("register.0.title")} `}
          color={theme.palette.text.contrastText}
          cursor
          lineHeight={1.5}
        />
      </Box>
      <Space space={10} />
      <Stepper dir={direction} currentStep={activeStep} />
      <Space space={10} />
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, formikAction) => {
          switch (activeStep) {
            case 0:
              OnStep1(values);
              handleNext();
              console.log("onSubmit case 0");
              break;
            case 1:
              console.log("onSubmit case 1");
              OnSubmit(values);
              break;
            default:
              break;
          }
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
          const {
            fname="",
            lname="",
            phone="",
            email="",
            degree="",
            specialty="",
            password="",
            confirmPassword="",
          } = values;
          console.log("values", values);
          return (
            <>
              {isFristStep && (
                <>
                  <InputFeilds
                    value={values.fname}
                    dir={direction}
                    label={t("register.0.first_name")}
                    error={errors.fname && touched.fname}
                    helperText={
                      errors.fname && touched.fname ? errors.fname : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="fname"
                    required={true}
                    name={"fname"}
                    onBlur={() => {
                      setFieldTouched("fname", true);
                    }}
                  />
                  <InputFeilds
                    value={values.lname}
                    dir={direction}
                    label={t("register.0.last_name")}
                    error={errors.lname && touched.lname}
                    helperText={
                      errors.lname && touched.lname ? errors.lname : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="lname"
                    required={true}
                    name={"lname"}
                    onBlur={() => {
                      setFieldTouched("lname", true);
                    }}
                  />
                  <InputFeilds
                    value={values.phone}
                    dir={direction}
                    label={t("register.0.phone_number")}
                    error={errors.phone && touched.phone}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="phone"
                    required={true}
                    name={"phone"}
                    onBlur={() => {
                      setFieldTouched("phone", true);
                    }}
                  />
                  <InputFeilds
                    value={values.email}
                    dir={direction}
                    label={t("register.0.email")}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    autoComplete="Email"
                    required={true}
                    name={"email"}
                    onBlur={() => {
                      setFieldTouched("email", true);
                    }}
                  />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <InputFeilds
                    value={values.degree}
                    dir={direction}
                    error={errors.degree && touched.degree}
                    helperText={
                      errors.degree && touched.degree ? errors.degree : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    onBlur={() => {
                      setFieldTouched("degree", true);
                    }}
                    label={`${t("register.0.degree")} `}
                    name={"degree"}
                  />
                  <InputFeilds
                    value={values.specialty}
                    dir={direction}
                    error={errors.specialty && touched.specialty}
                    helperText={
                      errors.specialty && touched.specialty
                        ? errors.specialty
                        : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    onBlur={() => {
                      setFieldTouched("specialty", true);
                    }}
                    label={`${t("register.0.specialty")} `}
                    name={"specialty"}
                  />
                  <InputFeilds
                    value={values.password}
                    dir={direction}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password ? errors.password : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    onBlur={() => {
                      setFieldTouched("password", true);
                    }}
                    label={`${t("register.0.password")} `}
                    name={"password"}
                    secureTextEntry={hidePass ? true : false}
                    type={hidePass ? "text" : "password"}
                    hidePass={hidePass}
                    HandlehidePass={HandlehidePass}
                  />
                  <InputFeilds
                    value={values.confirmPassword}
                    dir={direction}
                    error={errors.confirmPassword && touched.confirmPassword}
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : ""
                    }
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    onBlur={() => {
                      setFieldTouched("confirmPassword", true);
                    }}
                    label={`${t("register.0.confirmPassword")} `}
                    name={"confirmPassword"}
                    secureTextEntry={hidePass ? true : false}
                    type={hidePass ? "text" : "confirmPassword"}
                    hidePass={hidePass}
                    HandlehidePass={HandlehidePass}
                  />
                </>
              )}
              <Space space={5} />
              <Box
                display="flex"
                justifyContent="center"
                alignItems={"center"}
                flexDirection={rowDirection}
                textAlign="center"
              >
                <PrimaryText
                  fontWeight={"500"}
                  fontSize={"14px"}
                  text={`${t("register.0.loginMessage")} `}
                  color={theme.palette.text.contrastText}
                  cursor
                  lineHeight={1.5}
                />
                <Button
                  style={{
                    backgroundColor: theme.palette.background.primary,
                    color: theme.palette.text.dark,
                    textTransform: "lowercase",
                    fontSize: 14,
                    mt: 3,
                    paddingTop: 4,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.contrastText,
                      color: theme.palette.primary.light,
                    },
                  }}
                  href="/login"
                >
                  <PrimaryText
                    fontWeight={"500"}
                    fontSize={"14px"}
                    text={`${t("register.0.signin")} `}
                    color="offwhite"
                    cursor
                    lineHeight={1.5}
                  />
                </Button>
              </Box>
              <Space space={10} />
              <Stack
                direction={{ xs: "column", sm: rowDirection }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
                alignItems="center"
              >
                {!isFristStep && (
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: theme.palette.background.primary,
                      borderColor: theme.palette.primary.main,
                      textTransform: "lowercase",
                      marginRight: 1,
                      color: theme.palette.primary.main,
                      width: "100%",
                      fontSize: 17,
                      mt: 3,
                      paddingTop: 4,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.contrastText,
                        color: theme.palette.primary.light,
                      },
                    }}
                    onClick={handleBack}
                    startIcon={
                      isLoading ? (
                        <CircularProgress size={25} sx={{ p: "5px" }} />
                      ) : (
                        <Space space={0} />
                      )
                    }
                  >
                    {`${t("register.0.back")}`}
                  </Button>
                )}
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: theme.palette.background.primary,
                    color: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    fontWeight: "bold",
                    width: "100%",
                    textTransform: "lowercase",
                    fontSize: 17,
                    mt: 3,
                    paddingTop: 4,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.contrastText,
                      color: theme.palette.primary.light,
                    },
                  }}
                  onClick={handleSubmit}
                  type="submit"
                  startIcon={
                    isLoading ? (
                      <CircularProgress size={25} sx={{ p: "5px" }} />
                    ) : (
                      <Space space={0} />
                    )
                  }
                >
                  {isLastStep
                    ? `${t("register.0.submit")}`
                    : `${t("register.0.next")}`}
                </Button>
              </Stack>
              <Space space={20} />
            </>
          );
        }}
      </Formik>
    </Stack>
  );
};

export default index;
