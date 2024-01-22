import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";



const Pills = (props) => {
  const theme = useTheme();
  const { text, bgColorPill } = props;
  return (
    <Typography
      bgcolor={bgColorPill}
      sx={{
        display: "inline-flex",
        width: "auto",
        borderRadius: "16px",
        padding: ".3rem .6rem",
        color: theme.palette.primary.dark,
      }}
      variant="body2"
    >
      {text}
    </Typography>
  );
};

export default Pills;
