import { object, string } from "yup";

// Validation schema for forgot password form
export default object().shape({
  email: string().required("Email is required"),
});
