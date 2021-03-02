import React from "react";
import { bio, name } from "../../data";

export default function index() {
  return (
    <div className="header">
      <div className="profile-pic">
        <img
          className="profile-pic"
          src="https://pbs.twimg.com/profile_images/1180727567550046208/FfZHC8NX_400x400.jpg"
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
