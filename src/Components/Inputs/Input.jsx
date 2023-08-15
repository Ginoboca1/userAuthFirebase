import React from "react";
import "./inputs.css";
import { AiFillExclamationCircle } from "react-icons/ai";

export const Input = ({ register, error, type, nameInput, nameTitle }) => {
  return (
    <div className={error ? "form-field-error" : "form-field"}>
      <label className="label">{nameTitle}</label>
      <input
        type={type}
        name={nameInput}
        {...register(nameInput, {
          required: { value: true, message: "This field is required" },
        })}
      />
      {error ? (
        <div className="error-container">
          <i className={error ? "error-icon" : "error-icon-disabled"}>
            <AiFillExclamationCircle />
          </i>
          <p>{error}</p>
        </div>
      ) : (
        <div className="error-container-disabled">
          <i className={error ? "error-icon" : "error-icon-disabled"}>
            <AiFillExclamationCircle />
          </i>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
