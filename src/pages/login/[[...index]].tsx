import React from "react";
import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SignIn
        path="/login"
        routing="path"
        signUpUrl="/register"
        afterSignInUrl={"/quiz"}
        redirectUrl={"/quiz"}
      />
    </main>
  );
};

export default Login;
