import './App.css';
import GoogleLogin from 'react-google-login'
import { Mongoose } from 'mongoose';

function App() {

  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }
  return (
    <div className="App">
      App
      <GoogleLogin 
        clientId="893359449772-dd1ri95gq198m28a1k6t534k35fr0ovk.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
