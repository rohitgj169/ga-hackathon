import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'

export default function NavBar({user, setUser}) {
  
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="Navbar">
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
