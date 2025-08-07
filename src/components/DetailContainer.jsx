import { useRef } from "react";
import "./CSS/DetailContainer.css"

export const DetailContainer = ({icon,placeholderData,className,type}) => {

    return (
        <div className= {`detail-container ${className}`}>
            <img src={icon}/>
            <input type={type} placeholder={placeholderData}/>
        </div>
    );
};

export default DetailContainer;