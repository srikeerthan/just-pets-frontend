import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './index.css';

const SignOut = ({ clientId, profile, onLogoutSuccess }) => {
  return (
    <div className="FrameLoggedIn">
      <h2>User Logged in</h2>
      <img src={profile.imageUrl} alt="user" onError={(e) => e.target.style.display = 'none'}/>
      
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <br />
      <GoogleLogout
        clientId={clientId}
        buttonText="Log out"
        onLogoutSuccess={onLogoutSuccess}
        theme='dark'
      />
      <br />
    </div>
  );
};

export default SignOut;