import React from "react";
import styles from "./card.module.scss";
import classnames from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={classnames(styles.container, className)}>{children}</div>
  );
};

export default Card;
