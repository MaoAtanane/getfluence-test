import React from "react";
import styles from "./profileInfos.module.scss";
import UserInfoField from "../../../commons/UserInfoField";

type ProfileInfos = {
  data: { username?: string; email?: string; city?: string };
};

const ProfileInfos: React.FC<ProfileInfos> = ({
  data: { username, email, city },
}) => {
  return (
    <div className={styles.container}>
      <UserInfoField className={styles.field} icon={"user"} value={username} />
      <UserInfoField className={styles.field} icon={"city"} value={city} />
      <UserInfoField className={styles.field} icon={"email"} value={email} />
    </div>
  );
};

export default ProfileInfos;
