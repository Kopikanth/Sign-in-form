import "./css/login.css"
import DetailContainer from "./DetailContainer";
import email from "./Assets/email.png";
import pass from "./Assets/password.png";
import CustomButton from "./CustomButton";

export const Login = ({loginClass, loginStyle, signupButtonClick}) => {

  return (
    <div className={`login ${loginClass}`} style={loginStyle}>
      <h1>Login</h1>
      <div className="login-detail">
        <DetailContainer icon={email} placeholderData={"Email Id"} />
        <DetailContainer icon={pass} placeholderData={"Password"} type={"password"}/>
      </div>
      <p>Lost password?<span> Click here!</span></p>
      <div className="login-buttons">
        <CustomButton buttonName={"Sign Up"} className={"login-signup-button"} buttonClick={signupButtonClick}/>
        <CustomButton buttonName={"Login"} className={"login-login-button"}/>
      </div>
    </div>
  );
};

export default Login;