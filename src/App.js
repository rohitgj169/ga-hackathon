import "./App.css";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import Profile from "./pages/ProfileIndex/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import ProjectsIndex from "./pages/ProjectsIndex/ProjectsIndex";
import AuthPage from "./pages/AuthPage/AuthPage";
import NavBar from "./components/NavBar/Navbar";
import NewProjectPage from "./pages/NewProjectPage/NewProjectPage";
import ProjectIdPage from "./pages/ProjectIdPage/ProjectIdPage";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import MyProjects from "./pages/MyProjects/MyProjects"

function App() {
  const [user, setUser] = useState(getUser());
  const [projectList, setProjectList] = useState([]);
  const [userProfile, setUserProfile] = useState({
    about: "",
    imageUrl: "",
    profession: "",
    portfolio: "",
    linkedin: "",
    twitter: "",
    github: "",
    skill1: "",
    skill2: "",
    skill3: "",
    desiredSkill1: "",
    desiredSkill2: "",
    desiredSkill3: "",
  });

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/EditProfile">
              <EditProfile
                user={user}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Route>
            <Route path="/user/profile">
              <Profile
                user={user}
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            </Route>
            <Route path="/user/myProjects">
              <MyProjects user={user} userProfile={userProfile} setUserProfile={setUserProfile}/>
            </Route>
            <Route exact path="/projects">
              <ProjectsIndex
                user={user}
                projectList={projectList}
                setProjectList={setProjectList}
              />
            </Route>
            <Route exact path="/notifications">
              <NotificationPage/>
            </Route>
            <Route
              path="/projects/:id"
              render={(props) => <ProjectIdPage user={user} {...props} />}
            />
            <Route exact path="/project/new">
              <NewProjectPage user={user} />
            </Route>
            <Redirect to="/projects" />
          </Switch>
          
        </>
      ) : (
        <Switch>
          <AuthPage setUser={setUser} />
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
}

export default App;
