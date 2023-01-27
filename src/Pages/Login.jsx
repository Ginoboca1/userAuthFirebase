import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { Alert } from "../component/Alert";
import "../styles/Form.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();
  const { login, googleLogin, forgotPassword } = useAuth();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/userAuthFirebase/home");
    } catch (error) {
      if (error) {
        setError("Contraseña incorrecta");
      }
      if (error) {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
      }
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/userAuthFirebase/home");
  };

  const handleForgotPassword = (email) => {
    console.log(email)
  }

  return (
    <div className="form-container">
      {error && <Alert message={error} />}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>

        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </div>

        <div className="submit-area">
          <button type="submit">login</button>
          <NavLink to= "/userAuthFirebase/reset-password">Forgot Password?</NavLink>
        </div>
      </form>

      <button onClick={handleGoogleLogin} className="googleButton">
        Login with Google
      </button>

      <div className="text-contain">
        <p>Don't have an account?</p>
        <NavLink to="/userAuthFirebase/register">Register</NavLink>
      </div>
    </div>
  );
};
