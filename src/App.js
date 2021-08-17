import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Mongoose } from "mongoose";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  return (
    <div className="App">
      App
      <GoogleLogin
        clientId="893359449772-dd1ri95gq198m28a1k6t534k35fr0ovk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
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
