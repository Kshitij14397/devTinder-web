import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  });

  if(!feed) return;

  if(feed?.length === 0) return <p className="flex items-center justify-center text-xl opacity-60 tracking-wide my-10">No Feed!!!</p>;

  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed?.[0]} showButtons={true} />
      </div>
    )
  );
};

export default Feed;
