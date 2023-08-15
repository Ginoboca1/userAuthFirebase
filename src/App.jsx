import AuthProvider from "./Context/authContext";
import { Routes, Route } from "react-router-dom";

import { Login } from "@/Pages/Login/Login";
import { Register } from "@/Pages/Register/Register";
import { About } from "@/Pages/About/About";
import { Home } from "./Pages/Home/Home";
import { RecoverPassword } from "@/Pages/RecoverPassword/RecoverPassword";

import { Header } from "@/Components/Navbar/Navbar";

import { ProtectedRoutes } from "@/Components/ProtectedRoutes/ProtectedRoutes";

import "./App.css";

const App = () => {
  return (
    <div className="App-container">
      <Header />

      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/reset-password" element={<RecoverPassword />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
