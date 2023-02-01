import React from "react";
import styles from "./profilPage.module.scss";
import Button from "../../commons/Button";
import ProfileInfos from "./ProfileInfos";
import EditeProfileInfos from "./EditeProfileInfos";
import { getProfileCall } from "../../apiCalls/profile";
import { useQuery } from "react-query";
import Loader from "../../commons/Loader";
import Card from "../../commons/Card";
import Header from "../../components/Header";

const ProfilePage: React.FC = () => {
  const [isEditingProfile, setIsEditingProfile] = React.useState(false);
  const profileData = useQuery("profileData", getProfileCall);

  if (profileData.isLoading) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <Header />
      <Card className={styles.layoutCard}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Profile</h1>
          {!isEditingProfile && (
            <Button
              onClick={() => {
                setIsEditingProfile(true);
              }}
              variant={"outlined"}
            >
              Edite Profile
            </Button>
          )}
        </div>
        <div className={styles.profileInfosContainer}>
          {isEditingProfile ? (
            <EditeProfileInfos setIsEditingProfile={setIsEditingProfile} />
          ) : (
            <ProfileInfos
              data={{
                username: profileData.data?.data.username,
                email: profileData.data?.data.email,
                city: profileData.data?.data.city,
              }}
            />
          )}
        </div>
      </Card>
    </div>
  );
};
export default ProfilePage;
