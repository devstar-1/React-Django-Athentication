import { object, string } from "yup";

// Validation schema for sign up form
export default object().shape({
  email: string().required("Email is required"),
  password: string().required("Password is required"),
});
