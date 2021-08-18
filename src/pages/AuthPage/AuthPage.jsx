import React from "react";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </div>
  );
}
