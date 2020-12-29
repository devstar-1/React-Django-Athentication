import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LangSelect } from "../../components/authentication";

const useStyles = makeStyles({
  background: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 1,
  },
  titleBox: {
    position: "absolute",
    top: "33px",
    left: "70px",
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "DM Sans",
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  langSelBox: {
    position: "absolute",
    top: "36px",
    right: "60px",
  },
  svg: {
    width: "100%",
  },
  formBox: {
    position: "relative",
    marginTop: 119,
    zIndex: 2,
  },
});

// Layout for sign up, sign in and forgot pass page
function AuthLayout({ title, children }) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.background}>
        <Box>
          <img
            className={classes.svg}
            src={process.env.PUBLIC_URL + "/svg/bg.svg"}
            alt="background"
          />
        </Box>
        <Box className={classes.titleBox}>
          {title && (
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
          )}
        </Box>
        <Box className={classes.langSelBox}>
          <LangSelect />
        </Box>
      </Box>
      <Box className={classes.formBox}>{children}</Box>
    </>
  );
}

AuthLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AuthLayout;
