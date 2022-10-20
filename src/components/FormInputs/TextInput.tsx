import { IFormInput } from "../../utils/types";
import "./Input.common.css";

export const TextInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  rules,
  icon,
}: IFormInput) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <div className="input-with-icon">
        {icon}
        <input
          type={type || "text"}
          placeholder={placeholder}
          name={name}
          {...register(name, rules)}
        />
      </div>
      {errors[name] && (
        <span className="error-message">{errors[name]?.message}</span>
      )}
    </div>
  );
};
