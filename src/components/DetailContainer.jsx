import { useRef } from "react";
import "./CSS/DetailContainer.css"

export const DetailContainer = ({icon,placeholderData,id,className}) => {

    return (
        <div className= {`detail-container ${className}`}>
            <img src={icon}/>
            <input type="text" placeholder={placeholderData} />
        </div>
    );
};

export default DetailContainer;