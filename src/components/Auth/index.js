import React,{useContext} from "react";
import btnIcon from "../../assects/btn.png";
import "./auth.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import {UserContext} from '../../context/userContext'
function Auth({ usertype }) {
  const provider = new GoogleAuthProvider();
  const [userData,dispatch]=useContext(UserContext);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const {user} = result ;
        const { email, displayName, photoURL } = user;
        console.log(email, displayName, photoURL, "user");
        dispatch({
          type:'LOGIN',
          payload:{
            email, displayName, photoURL 
          }
        })
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error, "error");
      });
  };
  return (
    <div className="auth-container">
      <div>
        <h1>Welcome {usertype}!!</h1>
        <h3>Please Sign IN</h3>

        <div>
          <button onClick={signIn}>
            <img src={btnIcon} alt="btn" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
