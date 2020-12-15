import React from "react";

const OnlineUsers = (props) => {
  const { onlineUsers } = [props];
  console.log(props);
  return (
    <ul className="containerList-OnlineUsers">
      {props.onlineUsers.map((user) => {
        return (
          <li className="onlineUser">
            <img src={user.avatar} alt="avatar" width="50" height="50" />
            <h6>{user.name}</h6>
          </li>
        );
      })}
    </ul>
  );
};
export default OnlineUsers;
