import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import './index.css';

const SignIn = ({ clientId, onSuccess, onError }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email profile',
        
      });
    };
    gapi.load('client:auth2', initClient);
  }, [clientId]);

  return (
    <div className="FrameSignIn">
      <h2>Google Sign in</h2>
      <br />
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onError={onError}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        theme='dark'
      />
      <br/>
    </div>
  );
};

export default SignIn;