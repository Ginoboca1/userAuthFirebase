import { useState } from "react";
import { Alert } from "../component/Alert";
import { useAuth } from "../Context/authContext";
import "../styles/Form.css";

export const RecoverPassword = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      return setMessage("Recovery code sent,check your email");
    }
    await forgotPassword(email);
  };

  return (
    <div className="form-container" onSubmit={handleSubmit}>
      {message && <Alert setMessage={setMessage} message={message} />}
      <form className="form" id="form">
        <div className="form-field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="description-container">
          <p className="description">
            We will send you a recovery code at the email address
          </p>
        </div>
      </form>

      <button className="reset-button" type="submit" form="form">
        Reset Password
      </button>
    </div>
  );
};
