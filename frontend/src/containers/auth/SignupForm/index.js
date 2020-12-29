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
import { signup } from "../../../services/authApi";
import { useGlobalState } from "../../../store";

const useStyles = makeStyles({
  title: {
    fontSize: 46,
    fontFamily: "DM Sans",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 50,
    color: "#171725",
  },
  subtitle: {
    fontFamily: "DM Sans",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "#8F92A1",
  },
  error: {
    fontFamily: "DM Sans",
    fontSize: 12,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    color: "#AB003C",
    fontWeight: "bold",
  },
  container: {
    width: 436,
    height: 557,
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

const INITIAL_VALUES = {
  email: "",
  password: "",
};

// Sign up form
function SignupForm({ history }) {
  const handleSubmit = (values, { setSubmitting }) => {
    signup(values);
    setSubmitting(false);
  };
  const [errmsg] = useGlobalState("autherror");

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Sign up</Typography>
      <Typography className={classes.subtitle}>
        Create an account to continue
      </Typography>
      {errmsg && <Typography className={classes.error}>{errmsg}</Typography>}
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
            <Field
              component={InputField}
              name="password"
              label="Password"
              type="password"
              placeholder="Your password"
            />
            <Box className={classes.forgot}>
              <span
                style={{
                  display: "block",
                  fontFamily: "DM Sans",
                  fontSize: 12,
                }}
              >
                By signing up, you confirm that you’ve read
              </span>
              <span style={{ fontFamily: "DM Sans", fontSize: 12 }}>
                {" "}
                and accepted our
              </span>
              <TextButton caption="Privacy Policy"></TextButton>
            </Box>
            <FilledButton
              type="submit"
              loading={isSubmitting}
              caption="Sign up"
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
        ></TextButton>
        <span style={{ color: "#6B59CC" }}> • </span>
        <TextButton
          caption="Sign up for new user"
          onClick={() => history.push("/signup")}
        ></TextButton>
      </Box>
    </Container>
  );
}

SignupForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(SignupForm);
