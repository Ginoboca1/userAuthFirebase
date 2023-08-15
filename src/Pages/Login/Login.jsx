import { useEffect, useState } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "@/Context/authContext";
import { Alert } from "@/Components/Alerts/Alert";
import { Input } from "@/Components/Inputs/Input";

import "./login.css";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.base": "The email must be a text string",
      "string.empty": "Email is required",
      "string.email": "The email must be a valid email address",
      "string.minDomainSegments":
        "The email must have at least 2 domain segments",
      "string.tlds.allow":
        "The email must have a valid top-level domain (.com or .net)",
    }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .required()
    .messages({
      "string.pattern.base":
        "The password must contain at least one lowercase letter, one uppercase letter, and one digit",
      "string.min": "Password must be at least 8 characters long",
      "string.empty": "Password is required",
    }),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: joiResolver(schema),
  });

  const [error, setError] = useState();
  const { login, googleLogin, forgotPassword } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/userAuthFirebase/home");
    } catch (error) {
      if (error) {
        setError("Incorrect password");
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
      if (error) {
        setError("Incorrect password");
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
      if (error.code === "auth/user-not-found") {
        setError("Not registered user");
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate("/userAuthFirebase/home");
  };

  return (
    <div className="form-container">
      {error && <Alert error={error} setError={setError} message={error} />}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <Input
            type="email"
            nameInput={"email"}
            nameTitle={"Email"}
            register={register}
            error={errors.email?.message}
          />
        </div>

        <div className="form-field">
          <Input
            type={"password"}
            nameInput={"password"}
            nameTitle={"Password"}
            register={register}
            error={errors.password?.message}
          />
        </div>

        <div className="submit-area">
          <button clickAction={() => {}} className="form-btn">
            login
          </button>
          <NavLink to="/reset-password">Forgot Password?</NavLink>
        </div>
      </form>

      <button onClick={handleGoogleLogin} className="googleButton">
        Login with Google
      </button>

      <div className="text-contain">
        <p>Don't have an account?</p>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};
