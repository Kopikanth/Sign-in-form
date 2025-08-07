import "./css/signup.css"
import person from "./Assets/person.png"
import email from "./Assets/email.png"
import pass from "./Assets/password.png";
import DetailContainer from "./DetailContainer";
import CustomButton from "./CustomButton";

export const SignUp = ({signupClass, signupStyle, loginButtonClick}) => {

    return (
        <div className={`sign-up ${signupClass}`} style={signupStyle}>
            <h1>Sign Up</h1>
            <div className="signup-detail">
                <DetailContainer icon={person} placeholderData="Name" />
                <DetailContainer icon={email} placeholderData="Email id" />
                <DetailContainer icon={pass} placeholderData="Password" className="password" type={"password"}/>
            </div>
            <div className="signup-buttons">
                <CustomButton buttonName={"Sign Up"} className="signup-signup-button"/>
                <CustomButton buttonName={"Login"} className="signup-login-button" buttonClick={loginButtonClick}/>
            </div>
        </div>
    );
};

export default SignUp;