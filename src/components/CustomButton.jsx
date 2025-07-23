import "./CSS/CustomButton.css"

export const CustomButton = ({ className, buttonName }) => {

  return (
    <div>
      <button className={`default-button ${className}`}>
        {buttonName}
      </button>
    </div>
  );
};

export default CustomButton;