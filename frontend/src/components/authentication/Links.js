import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1) * 0.3,
    },
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  amazon: {
    textTransform: "none",
    fontFamily: "DM Sans",
    fontSize: 12,
    fontWeight: "bold",
    width: 234,
    height: 38,
    color: "#8F92A1",
  },
  google: {
    maxWidth: 38,
    minWidth: 38,
    maxHeight: 38,
    minHeight: 38,
  },
  facebook: {
    maxWidth: 38,
    minWidth: 38,
    maxHeight: 38,
    minHeight: 38,
  },
}));

// comp for button group of amazon, google and facebook on login page
function Links() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button variant="outlined" className={classes.amazon}>
        <img
          src={process.env.PUBLIC_URL + "/svg/amazon.svg"}
          alt="amazon icon"
          style={{ marginRight: 8 }}
        />
        <span>Continue with Amazon</span>
      </Button>
      <Button variant="outlined" className={classes.google}>
        <img
          src={process.env.PUBLIC_URL + "/svg/google.svg"}
          alt="google icon"
        />
      </Button>
      <Button variant="outlined" className={classes.facebook}>
        <img
          src={process.env.PUBLIC_URL + "/svg/facebook.svg"}
          alt="facebook icon"
        />
      </Button>
    </Box>
  );
}

export default Links;
