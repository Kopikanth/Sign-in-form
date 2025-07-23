import "./css/signup.css"
import person from "./Assets/person.png"
import email from "./Assets/email.png"
import pass from "./Assets/password.png";
import DetailContainer from "./DetailContainer";
import CustomButton from "./CustomButton";

export const SignUp = () => {

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <div className="signup-detail">
                <DetailContainer icon={person} placeholderData="Name" />
                <DetailContainer icon={email} placeholderData="Email id" />
                <DetailContainer icon={person} placeholderData="Password" className="password" />
            </div>
            <div className="signup-buttons">
                <CustomButton buttonName={"Sign Up"} className="signup-signup-button"/>
                <CustomButton buttonName={"Login"} className={"signup-login-button"}/>
            </div>
        </div>
    );
};

export default SignUp;