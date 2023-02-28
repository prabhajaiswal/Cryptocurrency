import React from 'react'
import './Login.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function login() {
  return (
    <div>
      <div className="log">
      <h1>User LogIn</h1>
      <input className="username"  placeholder="username" type="text" />
      <AccountCircleIcon />
      <input className="username"  placeholder="password" type="text" />
    <button type="button" class="btn btn-info"  id="button" >LOGIN</button>
     </div>
       </div>
  )
}

export default login
