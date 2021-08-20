import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
 import { useHistory } from "react-router-dom";
 import Swal from 'sweetalert2'
 import './LogInForm.css'


export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  let history = useHistory()
  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
     Swal.fire('Login Success!')
      history.push("/user/profile");
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="logInContainer">
      <div className="formContainer"> <img className="image" src="https://i.imgur.com/fvOaG9D.png"/>
      <img className="appTitle" src="https://i.imgur.com/kVZIj9m.png" /> 
      <p className="headerLogIn">Welcome back!</p>
      <p className="headerLogIn">Let's get you working!</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required /></div>
          <div><label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required /></div>
          <div className="logInDivButton">
          <button className="logInButton" type="submit">SIGN IN</button></div>
        </form>
        <p className="signupMsg">New to Collabocado? SIGN UP!</p>
      </div>
      <p className="error-message">&nbsp;{error}</p>
   </div> </div>
  );
}