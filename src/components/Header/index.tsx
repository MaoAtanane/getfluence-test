import React from "react";
import Button from "../../commons/Button";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.container}>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => {
            navigate("/profile");
          }}
          variant={"outlined"}
          color={"secondary"}
          className={styles.button}
        >
          profile
        </Button>
        <Button
          onClick={() => {
            navigate("/calendar");
          }}
          className={styles.button}
        >
          Calendar
        </Button>
      </div>
    </header>
  );
};
export default Header;
