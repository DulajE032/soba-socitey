import React,{useState} from 'react';
import './loginForm.css';



function loginForm() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

  return (
    <div className="login-form">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default loginForm;