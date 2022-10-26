import { useState } from "react";
import { IFormInput } from "../../utils/types";
import "./Input.common.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const PasswordInput = ({
  label,
  name,
  placeholder,
  register,
  errors,
  rules,
  icon,
}: IFormInput) => {
  const [showPassword, setShowPassowrd] = useState(false);

  const showPasswordHandler = () => {
    setShowPassowrd(!showPassword);
  };

  return (
    <div className="form-input">
      <label htmlFor="email">{label}</label>
      <div className="input-with-icon">
        {icon}
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          {...register(name, rules)}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible
            onClick={showPasswordHandler}
            style={{ color: "#656565", fontSize: "1.3rem", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineEye
            onClick={showPasswordHandler}
            style={{ color: "#656565", fontSize: "1.3rem", cursor: "pointer" }}
          />
        )}
      </div>
      {errors[name] && (
        <span className="error-message">{errors[name]?.message}</span>
      )}
    </div>
  );
};
