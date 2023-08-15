import { useEffect, useState } from "react";
import { useAuth } from "@/Context/authContext";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Alert } from "@/Components/Alerts/Alert";
import { Input } from "@/Components/Inputs/Input";
import "./recoverPassword.css";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";

const schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.base": "The email must be a text string",
      "string.empty": "The email is a required field",
      "string.email": "The email must be a valid email address",
      "string.minDomainSegments":
        "The email must have at least 2 domain segments",
      "string.tlds.allow":
        "The email must have a valid top-level domain (.com or .net)",
    }),
});

export const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: joiResolver(schema),
  });

  const [message, setMessage] = useState();
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data) {
      setMessage("Recovery code sent,check your email");
      await forgotPassword(data.email);
      setTimeout(() => {
        setMessage(false);
      }, 4000);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <i className="back" onClick={() => navigate(-1)}>
        <BiArrowBack />
      </i>
      {message && <Alert setMessage={setMessage} message={message} />}
      <form className="form" id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <Input
            type="email"
            nameInput={"email"}
            nameTitle={"Email"}
            register={register}
            error={errors.email?.message}
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
