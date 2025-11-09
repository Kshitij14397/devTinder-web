import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router";

const Connections = () => {
  const connections = useSelector((store) => store?.connections);
  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0)
    return (
      <p className="flex items-center justify-center text-xl opacity-60 tracking-wide my-10">
        No Connections
      </p>
    );

  return (
    <div className="bg-base-100 flex flex-col items-center justify-center my-10">
      <p className="p-4 pb-2 text-xl opacity-60 tracking-wide">Connections</p>
      <ul className="list rounded-box shadow-md">
        {connections?.map((connection) => (
          <li
            className="flex justify-between items-center"
            key={connection?._id}
          >
            <div className="list-row">
              <div>
                <img
                  className="size-10 rounded-box"
                  src={connection?.photoUrl}
                />
              </div>
              <div>
                <div>{connection?.firstName + " " + connection?.lastName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {connection?.about}
                </div>
              </div>
            </div>
            <Link to={`/chat/${connection?._id}`} className="link link-hover">
              <button className="btn btn-primary m-4">Chat</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
