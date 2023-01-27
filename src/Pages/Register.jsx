import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Alert } from "../component/Alert";
import { useAuth } from "../Context/authContext";
import "../styles/Form.css";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password)
      navigate('/userAuthFirebase/home')
    } catch (error) {
      if(error){
        setError('Usuario ya registrado')
      }
      if(error.code === 'auth/internal-error'){
        setError('Correo Invalido')
      }
      if (error.code === 'auth/weak-password'){
        setError('La contraseña tiene que tener minimo seis caracteres')
      }
      if(error.code === 400){
        setError('Usuario ya registrado')
      }  
    }
  };

  
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
          <button type="submit">register</button>
        </div>
      </form>
      <div className="text-contain">
        <p>Do you have an account?</p>
        <NavLink to="/userAuthFirebase">Login</NavLink>
      </div>
    </div>
  );
};
