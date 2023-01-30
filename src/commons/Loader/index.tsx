import styles from "./loader.module.scss";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}>
        <img
          className={styles.loaderIcon}
          src={"/images/loader.svg"}
          alt={"leader icon"}
        />
      </div>
    </div>
  );
};
export default Loader;
