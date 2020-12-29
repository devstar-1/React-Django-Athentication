import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { withRouter } from "react-router-dom";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextButton,
  FilledButton,
  Links,
  InputField,
} from "../../../components/authentication";
import validationSchema from "./schema";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

const useStyles = makeStyles({
  title: {
    fontSize: 46,
    fontFamily: "DM Sans",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 60,
    color: "#171725",
    lineHeight: 1,
  },
  subtitle: {
    fontFamily: "DM Sans",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    color: "#8F92A1",
  },
  container: {
    width: 436,
    height: 497,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  or: {
    textAlign: "center",
    color: "#92929D",
    fontSize: 12,
    fontFamily: "DM Sans",
    padding: 5,
  },
  forgot: {
    textAlign: "center",
    margin: "12px 0px",
  },
});
// Form for password recovery in case of pass forgot
function ForgotpassForm({ history }) {
  const handleSubmit = (values) => {};

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>
        <span style={{ display: "block" }}>Lost Your</span>
        <span>Password?</span>
      </Typography>
      <Typography className={classes.subtitle}>
        Enter your email to recover your password.
      </Typography>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            <Field
              component={InputField}
              name="email"
              label="Email"
              type="email"
              placeholder="Your email"
            />
            <FilledButton
              type="submit"
              loading={isSubmitting}
              caption="Continue"
            />
          </Form>
        )}
      </Formik>
      <Typography className={classes.or}>OR</Typography>
      <Links />
      <Box className={classes.forgot}>
        <TextButton
          caption="Forgot password?"
          onClick={() => history.push("/forgotpass")}
        />
        <span style={{ color: "#6B59CC" }}> • </span>
        <TextButton
          caption="Sign up for new user"
          onClick={() => history.push("/signup")}
        />
      </Box>
    </Container>
  );
}

ForgotpassForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgotpassForm);
