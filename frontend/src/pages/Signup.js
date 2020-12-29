import React from "react";
import AuthLayout from "../containers/layout/AuthLayout";
import SignupForm from "../containers/auth/SignupForm";

// Sign up page
function Signup() {
  return (
    <AuthLayout title="Sellerfusion">
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
