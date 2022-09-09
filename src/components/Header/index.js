import React from "react";
import { bio, name } from "../../data";

export default function index() {
  return (
    <div className="header">
      <div className="profile-pic">
        <img
          className="profile-pic"
          src="/public/pics/lilpony-pink_400x400.jpg"
          alt="profile"
        />
      </div>
      <div className="bio">
        <h1 className="name">{name}</h1>
        <p>{bio}</p>
      </div>
    </div>
  );
}
