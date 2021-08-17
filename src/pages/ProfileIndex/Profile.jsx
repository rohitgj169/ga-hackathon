import React ,{useState,useEffect} from "react";
import axios from "axios"

export default function Profile(props) {

    const [userObj, setUserObj] = useState({props})


    useEffect(() => {
        setUserObj(props);
      }, [props]);


    //   useEffect(async () => {
    //     await fetch("http://localhost:3001/users/createProfile", 
    //     {mode: "no-cors"}
    //     ).then((response) => response.json())
    //     .then((data) => console.log('This is your data', data));
    // }, [])
      useEffect(() => {
          async function axiosCreateProfile() {
            await axios({
                method: 'post',
                url: `http://localhost:3001/users/createProfile`,
                withCredentials: false,
                crossdomain: true,
                body: {},
                headers: new Headers({ "Content-Type": "application/json" }),
              }).then((res) => {
                console.log("this is the axios createprofile res.data " + res.data)
            }).catch((error) => {
                console.log(error)
            });
          };

        //     await axios.post('http://localhost:3001/users/createProfile', userObj)
        //     .then((res) => {
        //         console.log("this is the axios createprofile res.data " + res.data)
        //     }).catch((error) => {
        //         console.log(error)
        //     });
        //   }


          axiosCreateProfile()
      }, [])

    // useEffect(() => {
    //     async function fetchCreateProfile() {
    //       let response = await fetch('http://localhost:3001/users/createProfile', {
    //           mode: "no-cors",
    //           method: "POST",
    //           headers: new Headers({ "Content-Type": "application/json" }),
    //           body: JSON.stringify(props)
    //         })
    //       let response2 = await response.json()
    //         console.log("this is the useEffect response " + response2)
    //     }
    //     fetchCreateProfile()
    //   }, [])






        // fetch("http://localhost:3001/users/createProfile", {
        //     method: "POST",
        //     headers: new Headers({
        //       "Content-Type": "application/json",
        //       Authorization: props.userObj.googleId,
        //       body: JSON.stringify({ hello: "hello" }),
        //     }),
        //   }).then(async (res) => {
        //       console.log('This is the res in useEffect ' + res)
        //       if (res.ok) {
        //           try {
        //               let serverResponse = res.json();
        //           }
        //        catch (err) {
        //           console.log('this is the catch error ' + err)
        //           console.log(err)
        //       }}
        //   })
        
      


    return (
        <div>
            <h1>My Profile: </h1>
            <h3>Welcome, {props.userObj.name}</h3>
            <h4>My Email: {props.userObj.email}</h4>
        </div>
    )
}
