import React ,{useState,useEffect} from "react";
import axios from "axios"
import './Profile.css'

export default function Profile(props) {
    const [userObj, setUserObj] = useState({props})
    const userObject = props.userObj
    console.log(props.userObj)

    useEffect(() => {
        setUserObj(props);
      }, [props]);

      useEffect((userObj) => {
          async function axiosCreateProfile() {
            const res = await axios.post('http://localhost:3001/users/createProfile', {user: userObject})
            
            console.log(res)
            
            // .then((res) => console.log(res))
          }
          axiosCreateProfile()
      }, [])

    return (
        <div>
            <h1>My Profile: </h1>
            <h3>Welcome, {props.userObj.name}</h3>
            <h4>My Email: {props.userObj.email}</h4>
        </div>
    )
}
