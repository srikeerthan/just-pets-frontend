import React, { useState } from 'react';
import SignIn from './component/GoogleSignIn';
import SignOut from './component/GoogleSignOut';
import './App.css';

const clientId = "1050265963835-134l56tjbjfa23ijrjhssg5pcs9ltdqr.apps.googleusercontent.com";

const App = () => {
  const [profile, setProfile] = useState(null);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    console.log('success', res);
  };

  const onError = (res) => {
    console.log("error", res);
  };

  const logOut = () => {
    setProfile(null);
  };

  return (
    <div className="Signin">
      <header className="AppHeader">
        <div className="Frame">
          {profile ? (
            <SignOut
              clientId={clientId}
              profile={profile}
              onLogoutSuccess={logOut}
            />
            
          ) : (
            <SignIn
              clientId={clientId}
              onSuccess={onSuccess}
              onError={onError}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default App;