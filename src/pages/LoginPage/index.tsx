import React from "react";

import styles from "./login.module.scss";
import LoginForm from "./LoginForm";
import Card from "../../commons/Card";

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.formCardContainer}>
        <img
          className={styles.avatarIcon}
          src="/assets/images/avatar.svg"
          alt="avatar icon"
        />
        <h1 className={styles.title}>Login</h1>
        <h2 className={styles.subTitle}>Enter your credentials</h2>
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
