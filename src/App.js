import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Mongoose } from "mongoose";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";

function App() {

  const handleLogin = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  return (
    <div className="App">
      App
      <GoogleLogin
        clientId={process.env.CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
      <Switch>
        <Route path="/projects">
          <ProjectsIndex />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
