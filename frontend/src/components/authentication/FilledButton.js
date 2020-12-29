import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#6B59CC",
    maxWidth: 320,
    maxHeight: 38,
    minWidth: 320,
    minHeight: 38,
    borderRadius: 10,
    margin: 10,
    fontFamily: "DM Sans",
    textTransform: "none",
  },
});

// Button comp for sign up, sign in, continue in auth pages
function FilledButton({ caption, type }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      type={type}
    >
      {caption}
    </Button>
  );
}

FilledButton.propTypes = {
  caption: PropTypes.string,
  type: PropTypes.string,
};

export default FilledButton;
