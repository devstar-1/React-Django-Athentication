import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textField: {
    width: 320,
    height: 38,
    padding: "0px 20px",
    margin: "10px 0px",
    borderRadius: 10,
    backgroundColor: "#F5F5FA",
    border: 0,
    "&:focus": {
      outline: "none",
    },
  },
});

// Input comp for email and password input
function InputField(props) {
  const { field, form, type, disabled, placeholder } = props;
  const classes = useStyles();

  return (
    <input
      className={classes.textField}
      id={field.name}
      type={type}
      disabled={form.isSubmitting || disabled}
      placeholder={placeholder}
      {...field}
    />
  );
}

InputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
