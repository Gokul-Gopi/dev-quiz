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
import { regsiterUser } from "../../services/user";
import { useState } from "react";
import { getErrorMessage, showToast } from "../../utils/helpers";
import { useModal } from "../../context/ModalProvider";

interface IRegsiterForm {
  closeForm: (e: React.MouseEvent) => void;
}

export const RegsiterForm = ({ closeForm }: IRegsiterForm) => {
  const [loading, setLoading] = useState(false);
  const { modalDispatch } = useModal();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterUser>();

  const registerHandler = async (data: IRegisterUser) => {
    try {
      setLoading(true);
      const response = await regsiterUser(data);
      if (response?.status === 201) {
        showToast("Account created, Please login to continue", "success");
        modalDispatch({ type: "SIGNUP_MODAL" });
      }
    } catch (error: any) {
      return showToast(getErrorMessage(error), "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(registerHandler)} className="register-form">
      <IoCloseOutline onClick={closeForm} className="close-icon" />
      <h1>
        <span>Dev</span> Quiz!
      </h1>
      <TextInput
        label="Firstname"
        name="firstname"
        placeholder="Enter firstname"
        icon={<BiUserCircle className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Firstname is required",
          },
          minLength: {
            value: 2,
            message: "Firstname should have atleast 2 characters",
          },
        }}
        register={register}
        errors={errors}
      />
      <TextInput
        label="Lastname"
        name="lastname"
        placeholder="Enter lastname"
        icon={<BiUserCircle className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Lastname is required",
          },
          minLength: {
            value: 1,
            message: "Lastname should have atleast 1 character",
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
      <IconButton
        isLoading={loading}
        className="form-btn"
        icon={<VscVerified />}
        text="Register"
      />
    </form>
  );
};
