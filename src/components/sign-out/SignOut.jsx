import React from "react";
import { auth } from "../../firebase/firebase";

const SignOut = ({ isAuth, setIsAuth }) => {
  return (
    isAuth && (
      <button
        className="sign-out"
        onClick={() => {
          auth.signOut();
          setIsAuth(false);
        }}
      >
        Sign Out
      </button>
    )
  );
};

export default SignOut;
