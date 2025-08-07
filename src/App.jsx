import { useRef, useState } from "react";
import "./app.css"
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export const App = () => {

  const [signupVisiblity, setSignupVisiblity] = useState(true);
  const [loginVisiblity, setLoginVisiblity] = useState(false);

  const showLogin = () => {
    setSignupVisiblity(false);
    setLoginVisiblity(true);
  }

  const showSignup = () => {
    setSignupVisiblity(true);
    setLoginVisiblity(false);
  }

  return (
    <div className="app-container">
      {signupVisiblity && <SignUp loginButtonClick={showLogin} />}
      {loginVisiblity && <Login signupButtonClick={showSignup} />}
    </div>
  );
};

export default App;