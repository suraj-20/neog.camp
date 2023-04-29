import React from "react";
import user from "../Images/user_318-159711.avif";

function ContactCard(props) {
  const { name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        onClick={() => props.clickHandler()}
      ></i>
    </div>
  );
}

export default ContactCard;
