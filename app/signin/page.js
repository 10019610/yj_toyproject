"use client"; // this is a client component

import { useState } from "react";
import "./signin.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  const signupRouter = () => {
    router.push("/signup");
  };

  return (
    <div className="base">
      <form className="form">
        <div>
          <input
            className="inputBox"
            placeholder="E-Mail"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <input
            className="inputBox"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit} className="signinBtn">
            Sign In
          </button>
        </div>
        <div>
          <button className="signupBtn" onClick={signupRouter}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
