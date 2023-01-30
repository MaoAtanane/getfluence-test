import React from "react";

import styles from "./login.module.scss";
import LoginForm from "./LoginForm";

type LoginPageProps = {};
const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formCardContainer}>
        <img
          className={styles.avatarIcon}
          src="/images/avatar.svg"
          alt="avatar icon"
        />
        <h1 className={styles.title}>Login</h1>
        <h2 className={styles.subTitle}>Enter your credentials</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
