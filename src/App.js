import "./App.css";
import React, { useState } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import {getUser} from './utilities/users-service';
import Profile from "./pages/ProfileIndex/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";
import AuthPage from "./pages/AuthPage/AuthPage";
import NavBar from "./components/NavBar/NavBar";



function App() {
  
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
        <Route path="/EditProfile">
          <EditProfile userObj={user}/>
          </ Route>
        <Route path="/user/profile">
          <Profile user={user}/>
        </Route>
        <Route path='/projects'>
          <ProjectsIndex />
        </Route>
        <Redirect to="/projects"/>
        </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </div>
  );
}

export default App;
