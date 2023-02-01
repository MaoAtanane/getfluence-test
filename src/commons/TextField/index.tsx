import React from "react";
import styles from "./textField.module.scss";
import classnames from "classnames";
import { UseFormRegister } from "react-hook-form";

interface TextFieldProps {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  onChange?: (value: string) => void;
  label?: string;
  value?: string;
  readOnly?: boolean;
  error?: string | null;
  className?: string;
  id?: string;
  register?: UseFormRegister<any>;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  name,
  type,
  onChange,
  readOnly = false,
  error,
  className,
  id,
  register,
}) => {
  return (
    <div className={classnames(styles.container, className)}>
      {register ? (
        <input
          id={id}
          className={classnames(styles.input, {
            [styles.errorContainer]: !!error,
          })}
          type={type}
          readOnly={readOnly}
          placeholder=" "
          {...register(name ?? "")}
        />
      ) : (
        <input
          id={id}
          name={name}
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
        />
      )}
      <span
        className={classnames(styles.label, {
          [styles.focusedLabel]: !!value,
        })}
      >
        {label}
      </span>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};
export default TextField;
