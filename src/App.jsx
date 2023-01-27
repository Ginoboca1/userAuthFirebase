import AuthProvider from "./Context/authContext";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

import { Header } from "./component/Navbar";
import { ProtectedRoutes } from "./component/ProtectedRoutes";

import './App.css';
import { RecoverPassword } from "./Pages/RecoverPassword";


const App = () => {
  return (
    <div className="App-container">
      <Header />

      <AuthProvider>
        <Routes>
          <Route exact path="/userAuthFirebase" element={<Login />} />
          <Route path="/userAuthFirebase/register" element={<Register />} />
          <Route path="/userAuthFirebase/about" element={<About />} />
          <Route path="/userAuthFirebase/home" element = {
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }/>
          <Route path="/userAuthFirebase/reset-password" element = {<RecoverPassword />}/>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
