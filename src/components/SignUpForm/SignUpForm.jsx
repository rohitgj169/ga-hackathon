import React, {  Component } from "react";
import {signUp} from '../../utilities/users-service';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import './SignUpForm.css'



export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const userData = {...this.state};
      delete userData.error;
      delete userData.confirm;
      const user = await signUp(userData);
      // console.log(user);
      this.props.setUser(user);
      
      Swal.fire('Signup Success!')
    } catch {
      this.setState({error: 'Sign Up Failed'})
    }
  };

  render() {

    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="logInContainer">
      <div className="formContainer"> <img className="image" src="https://i.imgur.com/fvOaG9D.png"/>
      <img className="appTitle" src="https://i.imgur.com/kVZIj9m.png" /> 
      <p className="headerLogIn">We're glad to see you join!</p>
      <p className="headerLogIn">We just need a few details before you can start!</p>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <div className="password">
              <div>
            <label>Password</label>
            <input className="passwordInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} required /></div>
            <div>
            <label>Confirm</label>
            <input className="passswordInput" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /></div></div>
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div></div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}