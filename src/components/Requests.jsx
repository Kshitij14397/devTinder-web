import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store?.requests);
  const dispatch = useDispatch();

  const getRequests = async () => {
    try {
      if (requests) return;
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  const reviewRequest = async (status, requestId) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0)
    return (
      <p className="flex items-center justify-center text-xl opacity-60 tracking-wide my-10">
        No Requests
      </p>
    );

  return (
    <div className="bg-base-100 flex flex-col items-center justify-center my-10">
      <p className="p-4 pb-2 text-xl opacity-60 tracking-wide">Requests</p>
      <ul className="list rounded-box shadow-md">
        {requests?.map((request) => (
          <li className="list-row" key={request?._id}>
            <div>
              <img
                className="size-10 rounded-box"
                src={request?.fromUserId?.photoUrl}
              />
            </div>
            <div>
              <div>
                {request?.fromUserId?.firstName +
                  " " +
                  request?.fromUserId?.lastName}
              </div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {request?.fromUserId?.about}
              </div>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => reviewRequest("rejected", request?._id)}
            >
              Reject
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => reviewRequest("accepted", request?._id)}
            >
              Accept
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Requests;
