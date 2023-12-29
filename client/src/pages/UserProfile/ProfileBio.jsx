import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p
                key={tag}
                style={{
                  width: "10%",
                  padding: "5px 5px",
                  margin: "3px",
                  fontSize: "13px",
                  color: "#39739d",
                  textDecoration: "none",
                  lineHeight: "22px",
                }}
              >
                {tag}
              </p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;
