import React from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service';
import './Navbar.css'
import { BsFillFolderFill, BsFillHouseDoorFill, BsFillBellFill} from 'react-icons/bs';
import {GiExitDoor} from 'react-icons/gi'
import {RiUser3Fill} from 'react-icons/ri'

export default function NavBar({user, setUser}) {
  
  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  }

  const styleSheet = {
    textDecoration:"none",
    color: "black",
    size: "25px"
  }


  return (
    <nav className="Navbar">
      <Link style={styleSheet} to="/user/profile"><RiUser3Fill size={22} color={"#86615C"} /><br></br>Profile</Link>
      
      <Link style={styleSheet}  to="/user/myProjects"><BsFillFolderFill size={22} color={"#86615C"} /><br></br>My Projects</Link>
      
      <Link style={styleSheet}  to="/projects"><BsFillHouseDoorFill size={22} color={"#86615C"} /><br></br>Home</Link>

      <Link style={styleSheet}  to="/notifications"><BsFillBellFill size={22} color={"#86615C"} /><br></br>Notifications</Link>

      <Link style={styleSheet}  to="" onClick={handleLogOut}><GiExitDoor  size={22} color={"#86615C"}/><br></br>Log Out</Link>
    </nav>
  )
}
