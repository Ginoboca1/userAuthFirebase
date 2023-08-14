import "../styles/Alert.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Alert = ({ error, message, setError, setMessage }) => {
  const handleCloseClick = () => {
    if (error) {
      setError(false);
    } else {
      setMessage(false);
    }
  };

  return (
    <div className={error ? "alert-banner-error" : "alert-banner"}>
      <i className="icon" onClick={handleCloseClick}>
        <AiFillCloseCircle />
      </i>
      <p className="">{message}</p>
    </div>
  );
};
