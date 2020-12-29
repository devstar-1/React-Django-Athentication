import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    fontFamily: "DM Sans",
    color: "#6B59CC",
    textTransform: "none",
    fontSize: 12,
    fontWeight: "bold",
  },
}));

// Link button for 'forgot pass' and 'signup as a new user'
function TextButton({ caption, onClick }) {
  const classes = useStyles();

  return (
    <Button size="small" onClick={onClick}>
      <span className={classes.button}>{caption}</span>
    </Button>
  );
}

export default TextButton;
