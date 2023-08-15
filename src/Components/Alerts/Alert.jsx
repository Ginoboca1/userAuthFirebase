import "./alert.css";

export const Alert = ({ error, message }) => {
  return (
    <div className={error ? "alert-banner-error" : "alert-banner"}>
      <p className="">{message}</p>
    </div>
  );
};
