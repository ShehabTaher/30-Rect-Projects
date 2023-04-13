import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import ProfilePicture from "./img/profilePicture.jpg";

const LikeMyPhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setcount] = useState(0);
  //   let like = true;
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setcount(count + 1);
    } else {
      setLike(false);
      setcount(count - 1);
    }
  };
  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 400, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>Profile Picture</small>
        </div>
        <img src={ProfilePicture} alt="img" style={{ height: "fit-content" }} onDoubleClick={toggleLike}/>
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LikeMyPhoto;
