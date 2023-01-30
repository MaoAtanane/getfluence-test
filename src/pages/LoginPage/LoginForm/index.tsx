import React, { useCallback, useState } from "react";
import TextField from "../../../commons/TextField";
import styles from "./loginForm.module.scss";
import Button from "../../../commons/Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  }, []);
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        label={"Email"}
        value={email}
        className={styles.field}
        onChange={setEmail}
      ></TextField>
      <TextField
        label={"Password"}
        className={styles.field}
        value={passWord}
        type={"password"}
        onChange={setPassWord}
      ></TextField>
      <Button onClick={() => {}} fullWidth className={styles.button}>
        Log In
      </Button>
    </form>
  );
};
export default LoginForm;
