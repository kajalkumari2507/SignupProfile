import React from "react";
import axios from "axios";
import { useContext, useCallback } from "react";
import CreateContext from "../Context/CreateContext";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState();

  let { userId } = useContext(CreateContext);

  const fetchdata = useCallback(async () => {
    let responce = await axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((resp) => resp)
      .catch((error) => console.log(error));
    console.log(responce.data);
    setUserData(responce.data);
  }, [userId]);

  useEffect(() => {
    fetchdata();
  }, [fetchdata]);

  console.log(userData);

  return (
    <div className="pcentre">
      <div className="profile-container">
        {userData && (
          <>
            <div className="right">
              <img src={userData.image} alt="png" />
            </div>
            <div className="left">
              <p className="profileDetails">
                <span className="namee">Id : </span>
                <span className="value">{userData.id}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">First Name : </span>
                <span className="value">{userData.firstName}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">Middle Name : </span>
                <span className="value">{userData.maidenName}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">Last Name : </span>
                <span className="value">{userData.lastName}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">Age : </span>
                <span className="value">{userData.age}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">Gender : </span>
                <span className="value">{userData.gender}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">E-mail : </span>
                <span className="value">{userData.email}</span>
              </p>
              <p className="profileDetails">
                <span className="namee">D.O.B. : </span>
                <span className="value">{userData.birthDate}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
