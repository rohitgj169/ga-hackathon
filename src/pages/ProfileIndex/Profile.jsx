import React ,{useState,useEffect} from "react";

export default function Profile(props) {

    const [userObj, setUserObj] = useState({props})


    useEffect(() => {
        setUserObj(props);
      }, [props]);


    return (
        <div>
            <h1>My Profile: </h1>
            <h3>Welcome, {props.userObj.name}</h3>
            <h4>My Email: {props.userObj.email}</h4>
        </div>
    )
}
