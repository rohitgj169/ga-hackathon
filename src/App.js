import "./App.css";
import React, { useState } from "react";
import { Redirect, Route, Switch} from "react-router-dom";
import {getUser} from './utilities/users-service';
import Profile from "./pages/ProfileIndex/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";
import AuthPage from "./pages/AuthPage/AuthPage";


import NavBar from "./components/Navbar/Navbar"
import NewProjectPage from "./pages/NewProjectPage/NewProjectPage";




function App() {
  
  const [user, setUser] = useState(getUser());
  const [projectList, setProjectList] = useState([]);

  return (
    <div className="App">
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Switch>
        <Route path="/EditProfile">
          <EditProfile user={user}/>
          </ Route>
        <Route path="/user/profile">
          <Profile user={user}/>
        </Route>
        <Route path='/projects'>
          <ProjectsIndex projectList={projectList} setProjectList={setProjectList}/>
        </Route>
        <Route path='/project/new'>
          <NewProjectPage user={user} />
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
