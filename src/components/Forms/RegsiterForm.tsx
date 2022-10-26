import { BiUserCircle } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { FiMail, FiUnlock } from "react-icons/fi";
import { emailRegex, passwordRegex } from "../../utils/regex";
import { IRegisterUser } from "../../utils/types";
import { PasswordInput } from "../FormInputs/PasswordInput";
import { TextInput } from "../FormInputs/TextInput";
import "./Form.common.css";
import { IconButton } from "../IconButton/IconButton";
import { VscVerified } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

interface IRegsiterForm {
  closeForm: (e: React.MouseEvent) => void;
}

export const RegsiterForm = ({ closeForm }: IRegsiterForm) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterUser>();

  const registerHandler = (data: IRegisterUser) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(registerHandler)} className="register-form">
      <IoCloseOutline onClick={closeForm} className="close-icon" />
      <h1>
        <span>Dev</span> Quiz!
      </h1>
      <h2>Register</h2>
      <TextInput
        label="Name"
        name="name"
        placeholder="Enter name"
        icon={<BiUserCircle className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Name is required",
          },
          minLength: {
            value: 2,
            message: "Name should have atleast 2 characters",
          },
        }}
        register={register}
        errors={errors}
      />
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
        placeholder="Create a password"
        icon={<FiUnlock className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Password is requried",
          },
          pattern: {
            value: passwordRegex,
            message:
              "Min 8 characters, must include atleast 1 number and 1 special character",
          },
        }}
        register={register}
        errors={errors}
      />
      <PasswordInput
        label="Confirm password"
        name="confirmPassword"
        placeholder="Confirm password"
        icon={<FiUnlock className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Password is requried",
          },
          validate: {
            value: (value: string) =>
              value !== watch("password") ? "Password doesn't match" : null,
          },
        }}
        register={register}
        errors={errors}
      />
      <IconButton className="form-btn" icon={<VscVerified />} text="Register" />
    </form>
  );
};
