import React, { useMemo } from "react";
import styles from "./userInfoField.module.scss";
import classnames from "classnames";

type UserInfoFieldProps = {
  icon: "user" | "email" | "phone" | "city";
  value?: string;
  className?: string;
};
const UserInfoField: React.FC<UserInfoFieldProps> = ({
  icon,
  value,
  className,
}) => {
  const iconSrc = useMemo(() => {
    switch (icon) {
      case "user":
        return "/assets/icons/user.svg";
      case "email":
        return "/assets/icons/email.svg";
      case "phone":
        return "/assets/icons/phone.svg";
      case "city":
        return "/assets/icons/location.svg";
      default:
        return "/assets/icons/user.svg";
    }
  }, [icon]);
  return (
    <div className={classnames(styles.container, className)}>
      <img src={iconSrc} alt={`${icon} icon`} className={styles.icon} />
      <div className={styles.value}>{value}</div>
    </div>
  );
};
export default UserInfoField;
