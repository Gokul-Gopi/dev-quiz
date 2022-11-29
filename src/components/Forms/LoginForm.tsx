import { useForm } from "react-hook-form";
import { TextInput } from "../FormInputs/TextInput";
import "./Form.common.css";
import { FiLock, FiMail } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { IconButton } from "../IconButton/IconButton";
import { PasswordInput } from "../FormInputs/PasswordInput";
import { ILogin } from "../../utils/types";
import { emailRegex } from "../../utils/regex";
import { ModalActions, useModal } from "../../context/ModalProvider";
import { useState } from "react";
import { loginUser } from "../../services/user";

import {
  addAuthHeader,
  saveToLocalStorage,
  showToast,
} from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const LoginForm = () => {
  const { modalDispatch } = useModal();
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const loginHandler = async (data: ILogin) => {
    setLoading(true);
    const response: any = await loginUser(data);
    if (response?.status === 200) {
      const userDetails = response?.data?.data;
      saveToLocalStorage(userDetails);
      addAuthHeader(userDetails?.token);
      authDispatch({
        type: "SET_USER",
        payload: { name: userDetails?.firstname, isLoggedIn: true },
      });
      showToast("Logged in", "success");
      navigate("/quiz");
    }
    setLoading(false);
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
        icon={<FiLock className="input-icon" />}
        rules={{
          required: {
            value: true,
            message: "Password is requried",
          },
        }}
        register={register}
        errors={errors}
      />
      <IconButton
        className="form-btn"
        isLoading={loading}
        icon={<HiOutlineLogin />}
        text="Login"
      />

      <div className="form-footer">
        <span>
          {`Don't have account?`}
          <strong onClick={() => modalDispatch({ type: ModalActions.signup })}>
            Sign up
          </strong>
        </span>
      </div>
    </form>
  );
};
