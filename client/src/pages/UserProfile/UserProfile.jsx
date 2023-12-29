import React, { useState } from "react";
import LeftSideBar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import "../../App.css";
const UserProfile = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.userReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);

  const [Switch, setSwitch] = useState(false);

  return (
    <div
      // style={{
      //   minHeight: "100vh",
      //   minWidth: "1250px",
      //   width: "100%",
      //   display: "flex",
      //   margin: "1% auto",
      // }}
      className="pro-container-1"
    >
      <LeftSideBar />
      <div className="pro-container-2">
        <section className="user-details-container">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <div>
                  <Avatar
                    backgroundColor="purple"
                    color="white"
                    fontSize="50px"
                    px="40px"
                    py="30px"
                  >
                    {currentProfile?.name.charAt(0).toUpperCase()}
                  </Avatar>
                </div>
                <div>
                  <h1>{currentProfile?.name}</h1>
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faBirthdayCake} />
                    Joined on :{moment(currentProfile?.joinedOn).fromNow()}
                  </p>
                </div>
              </div>
              <div>
                {currentUser?.result._id === id && (
                  <button
                    type="button"
                    className="edit-profile-btn"
                    onClick={() => setSwitch(true)}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faPen} />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* bio update */}
            <div className="user-name">
              <div> </div>
              <>
                {Switch ? (
                  <EditProfileForm
                    currentUser={currentUser}
                    setSwitch={setSwitch}
                  />
                ) : (
                  <ProfileBio currentProfile={currentProfile} />
                )}
              </>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
