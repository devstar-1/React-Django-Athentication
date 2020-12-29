import React from "react";
import AuthLayout from "../containers/layout/AuthLayout";
import SigninForm from "../containers/auth/SigninForm";

// Sign in page
function Signin() {
  return (
    <AuthLayout title="Sellerfusion">
      <SigninForm />
    </AuthLayout>
  );
}

export default Signin;
