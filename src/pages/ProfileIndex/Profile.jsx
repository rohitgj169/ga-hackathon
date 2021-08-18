
import React ,{useState,useEffect} from "react";
import axios from "axios"
import './Profile.css'
import { ImTwitter, ImGithub, ImLinkedin } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'
import { Redirect, Route, Switch, Link } from "react-router-dom";


export default function Profile(props) {
    // const [user, setUser] = useState({props})

    // useEffect(() => {
    //     setUserObj(props);
    //   }, [props]);

    //   useEffect((userObj) => {
    //       async function axiosCreateProfile() {
    //         const res = await axios.post('http://localhost:3001/users/createProfile', {user: userObject})         
    //         console.log(res)
    //         // .then((res) => console.log(res))
    //       }
    //       axiosCreateProfile()
    //   }, [])

    return (
        
        <div className="profileContainer">
            <div className="profileTopHalf">
                <div className="profileStrip">
                    
                    <img className="profilePhoto" src={props.userObj.imageUrl}/>
                    
                  
                    
                    </div>
                    <div className="profileEditIcon">
                    <Link style={{ margin: "10px" }} to='/EditProfile'><AiFillEdit style={{ fontSize: "20px", margin: "10px",}}/></Link>
                    </div>
                
                <div className="profileDetails">
                    <p className="profileName">{props.userObj.name}</p>
                </div>
                <div className="profileIcons">
                    <ImTwitter style={{ fontSize: "40px", margin: "10px" }}/>

                    <ImGithub style={{ fontSize: "40px", margin: "10px" }}/>

                    <ImLinkedin style={{ fontSize: "40px", margin: "10px" }}/>
                </div>
                <div className="profileJob">
                    Software Engineer
                </div>
            </div>


            <div className="profileBottomHalf">
                <div className="profileBio">
                <h3>Bio</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                </div>
                <div className="profileSkills">
                    <h3>Current Skills</h3>
                    <p className="profileSkills">
                        <span>Wireframing</span>
                        <span>Front End Development</span>
                        <span>Interaction Design</span>
                    </p>
                </div>
                <div className="profileDesired">
                    <h3>Desired Skills</h3>
                    <p className="profileDesired">
                        <span>Wireframing</span>
                        <span>Front End Development</span>
                        <span>Interaction Design</span>
                    </p>
                </div>
            </div>

        </div>
    )
    }
