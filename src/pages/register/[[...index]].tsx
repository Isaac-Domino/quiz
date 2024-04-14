import React from "react";
import { SignUp } from "@clerk/nextjs";

const Register = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SignUp
        path="/register"
        routing="path"
        signInUrl="/login"
        afterSignUpUrl={"/quiz"}
      />
    </main>
  );
};

export default Register;
