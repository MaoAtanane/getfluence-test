import React from "react";
import styles from "./textField.module.scss";
import classnames from "classnames";

type TextFieldProps = {
  type?: React.HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  label?: string;
  value?: string;
  readOnly?: boolean;
  error?: string;
  className?: string;
  id?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  type,
  onChange,
  readOnly = false,
  error,
  className,
  id,
}) => {
  return (
    <div className={classnames(styles.container, className)}>
      <input
        id={id}
        className={classnames(styles.input, {
          [styles.errorContainer]: !!error,
        })}
        value={value ?? ""}
        type={type}
        readOnly={readOnly}
        onChange={(event) => {
          event.preventDefault();
          onChange && onChange(event.target.value);
        }}
      ></input>
      <span
        className={classnames(styles.label, { [styles.focusedLabel]: !!value })}
      >
        {label}
      </span>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
export default TextField;
