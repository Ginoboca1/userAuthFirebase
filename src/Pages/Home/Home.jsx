import { useAuth } from "../../Context/authContext";
import { useNavigate } from "react-router-dom";
import "./home.css";

export const Home = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/userAuthFirebase");
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="home-container">
        <p className="text-xl mb-4">Bienvenido! {user.email}</p>

        <button className="button-logout" onClick={handleLogout}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};
