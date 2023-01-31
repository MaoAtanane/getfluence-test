import React from "react";
import classnames from "classnames";
import styles from "./button.module.scss";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "submit" | "button";
};
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  size = "medium",
  color = "primary",
  disabled = false,
  fullWidth = false,
  className,
  type,
}) => {
  return (
    <button
      className={classnames(
        styles.container,
        [styles[variant]],
        [styles[color]],
        [styles[size]],
        className,
        {
          [styles.fullWidth]: fullWidth,
        }
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
export default Button;
