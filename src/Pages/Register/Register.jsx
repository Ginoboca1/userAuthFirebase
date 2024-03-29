import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/authContext";
import "./register.css";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Alert } from "@/Components/Alerts/Alert";
import { Input } from "@/Components/Inputs/Input";

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

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: joiResolver(schema),
  });

  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await signUp(user.email, user.password);
      navigate("/userAuthFirebase/home");
    } catch (error) {
      if (error) {
        setError("Already registered user");
      }
      if (error.code === "auth/internal-error") {
        setError("Invalid email");
      }
      if (error.code === "auth/weak-password") {
        setError("The password must have a minimum of six characters");
      }
      if (error.code === 400) {
        setError("Already registered user");
      }
    }
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
          <button className="form-btn" clickAction={() => {}}>
            register
          </button>
        </div>
      </form>
      <div className="text-contain">
        <p>Do you have an account?</p>
        <NavLink to="/">Login</NavLink>
      </div>
    </div>
  );
};
