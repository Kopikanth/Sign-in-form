import "./CSS/CustomButton.css"

export const CustomButton = ({ className, buttonName, buttonClick }) => {

  return (
    <div>
      <button className={`default-button ${className}`} onClick={buttonClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default CustomButton;