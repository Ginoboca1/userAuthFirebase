import '../styles/Alert.css';

export const Alert = ({ message }) => {
  return (
    <div className="alert-banner">
      <span className="sm:inline block">{message}</span>
    </div>
  );
};
