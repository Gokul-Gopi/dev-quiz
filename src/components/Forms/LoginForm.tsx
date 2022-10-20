import { useForm } from "react-hook-form";
import { TextInput } from "../FormInputs/TextInput";
import "./Form.common.css";
import { FiMail, FiUnlock } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { IconButton } from "../IconButton/IconButton";
import { PasswordInput } from "../FormInputs/PasswordInput";
import { ILogin } from "../../utils/types";
import { emailRegex } from "../../utils/regex";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const loginHandler = (data: ILogin) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(loginHandler)}>
      <TextInput
        label="Email"
        name="email"
        placeholder="Enter email"
        icon={<FiMail className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: emailRegex,
            message: "Invalid email",
          },
        }}
        register={register}
        errors={errors}
      />
      <PasswordInput
        label="Password"
        name="password"
        placeholder="Enter password"
        icon={<FiUnlock className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Password is requried",
          },
        }}
        register={register}
        errors={errors}
      />
      <IconButton className="form-btn" icon={<HiOutlineLogin />} text="Login" />

      <div className="form-footer">
        <span>
          Don't have account? <strong>Sign up</strong>
        </span>
      </div>
    </form>
  );
};
