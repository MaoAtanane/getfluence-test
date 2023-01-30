import React, { useCallback, useState } from "react";
import TextField from "../../../commons/TextField";
import styles from "./loginForm.module.scss";
import Button from "../../../commons/Button";
import { useMutation } from "react-query";
import { logInCall } from "../../../apiCalls/login";
import Loader from "../../../commons/Loader";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errors, setError] = useState<{
    email: string | null;
    passWord: string | null;
  }>({
    email: null,
    passWord: null,
  });
  const navigate = useNavigate();

  const mutation = useMutation(logInCall, {
    onError: (error: AxiosError) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        setError({
          email: "Invalid email or password",
          passWord: "Invalid email or password",
        });
      }
      setError({
        email: "Invalid email or password",
        passWord: "Invalid email or password",
      });
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data[0]?.token);
      navigate("/profile");
    },
  });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutation.mutate({ email, passWord });
    },
    [email, passWord]
  );
  return (
    <>
      {mutation.isLoading && <Loader />}
      <form onSubmit={handleSubmit} className={styles.container}>
        <TextField
          label={"Email"}
          value={email}
          className={styles.field}
          onChange={setEmail}
          error={errors.email}
        ></TextField>
        <TextField
          label={"Password"}
          className={styles.field}
          value={passWord}
          type={"password"}
          onChange={setPassWord}
          error={errors.passWord}
        ></TextField>
        <Button onClick={() => {}} fullWidth className={styles.button}>
          Log In
        </Button>
      </form>
    </>
  );
};
export default LoginForm;
