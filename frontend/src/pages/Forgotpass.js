import React from "react";
import AuthLayout from "../containers/layout/AuthLayout";
import ForgotpassForm from "../containers/auth/ForgotpassForm";

// Forgot password page
function Forgotpass() {
  return (
    <AuthLayout title="Sellerfusion">
      <ForgotpassForm />
    </AuthLayout>
  );
}

export default Forgotpass;
