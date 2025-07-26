import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ user, showButtons }) => {
  const { firstName, lastName, photoUrl, age, gender, about, _id } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, toUserId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + toUserId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(toUserId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <img className="" src={photoUrl} alt="userPhoto" />
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        {showButtons && (
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
