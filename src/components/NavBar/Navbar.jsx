import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {
  
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/user/profile">Profile</Link>
      &nbsp; | &nbsp;
      <Link to="/project/new">New Project</Link>
      &nbsp; | &nbsp;
      <Link to="/projects">Projects</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}
