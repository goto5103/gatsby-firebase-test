import React from "react";
import { useAuth } from "gatsby-theme-firebase";

const Profile = () => {
  const { isLoggedIn, profile } = useAuth();
  console.log(profile);

  return (
    <>
      {isLoggedIn && (
        <>
          <p>お名前: {profile.displayName}</p>
          <p>
            <img src={profile.photoURL} width="150" />
          </p>
        </>
      )}
    </>
  );
};

export default Profile;