import React from "react";
import { signInWithGooglePopUp } from "../../firebase/firebase";
import "./SignIn.styles.css";

const SignIn = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {};

  return (
    <>
      <button>
        <button
          className="sign-in"
          onClick={async () => {
            const result = await signInWithGooglePopUp();
            setIsAuth(true);
          }}
        >
          Sign in with Google
        </button>
      </button>
    </>
  );
};

export default SignIn;
