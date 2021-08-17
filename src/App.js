import "./App.css";
import React ,{useState} from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Mongoose } from "mongoose";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";
import Profile from "./pages/ProfileIndex/Profile";
import { GoogleLogout } from 'react-google-login';



function App() {

const [userObj, setUserObj] = useState({})


  const handleLogin = (response) => {
    console.log(response.profileObj);
    console.log(response.profileObj.isSignedIn);
    let profileObj = response.profileObj
    setUserObj({...profileObj})
  };

  const handleLogout = (e) => {
    console.log('you are logged out')
  }

  return (
    <div className="App">
      App
      <GoogleLogin
        clientId='893359449772-dd1ri95gq198m28a1k6t534k35fr0ovk.apps.googleusercontent.com'
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
      <GoogleLogout
  clientId="893359449772-dd1ri95gq198m28a1k6t534k35fr0ovk.apps.googleusercontent.com"
  buttonText="Logout"
  onLogoutSuccess={handleLogout}
>
</GoogleLogout>
      <Link to='/projects'>Projects</Link>
      <Link to='/profile'>Profile</Link>
      <Switch>
        <Route path="/projects">
          <ProjectsIndex />
        </Route>
        <Route path="/profile">
          <Profile userObj={userObj} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
