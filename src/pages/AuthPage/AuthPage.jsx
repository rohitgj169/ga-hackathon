import React from "react";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
    </div>
  );
}
