import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const InputFeilds = (props) => {
  const {
    dir,
    error,
    id,
    value,
    onChange,
    autoComplete,
    label,
    type,
    multiline,
    rows,
    onBlur,
    select,
    margin,
    required,
    helperText,
    name,
    handleBlur,
    marginRight,
    defaultValue,
    shrink,
    hidePass,
    HandlehidePass,
  } = props;
  const { mode } = useSelector((state) => state.AppTheme);

  const classes = useStyles(mode);
  const theme = useTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache


  console.log('CacheProvider', CacheProvider)
  const cacheRtl = createCache({
    key: 'muirtl',
    // stylisPlugins: [prefixer, rtlPlugin],
  });
  const handleMouseDownPassword = (event) => event.preventDefault();
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <TextField
            dir={dir}
            name={name}
            error={error}
            value={value}
            helperText={helperText}
            className={
              mode == "dark" ? classes.inputStyles : classes.inputStylesDark
            }
            type={type}
            variant="outlined"
            margin="normal"
            id={id}
            label={label}
            autoComplete={autoComplete}
            onChange={(val) => {
              onChange(val);
            }}
            multiline={multiline}
            minRows={rows}
            onBlur={onBlur}
            fullWidth
            select={select}
            InputLabelProps={{
              style: { color: theme.palette.text.dark },
              shrink: shrink,
            }}
            required={required}
            InputProps={{
              style: { color: theme.palette.neutral.dark },
              endAdornment:
                name == "password" || name == "confirmPassword" ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={HandlehidePass}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {hidePass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ) : undefined,
            }}
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default InputFeilds;

const useStyles = makeStyles((theme) => ({
  inputStyles: {
    flexGrow: 1,
    color: "#FFF",
    "&.MuiInputBase-input MuiOutlinedInput-input": {
      color: theme.palette.primary.light,
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#22407b",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
      },
      "&:hover fieldset": {
        border: "2px solid #22407b",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #22407b",
      },
    },
  },

  inputStylesDark: {
    flexGrow: 1,
    color: "#FFF",
    "& .MuiInputBase-input MuiOutlinedInput-input": {
      color: "#FFF",
      backgroundColor: "#FFF",
    },
    "& .Mui-focused": {
      color: "#FFF",
      fontWeight: "bold",
    },

    "&.MuiFormLabel-root": {
      color: "#FFF",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: ".5px solid #ccc",
        color: "#FFF",
      },
      "&:hover fieldset": {
        border: "2px solid #22407b",
        color: "#FFF",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #22407b",
        color: "#FFF",
      },
    },
  },
}));
