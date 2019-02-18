import React from "react";
import PropTypes from "prop-types";

const imageStyle = { height: 240, flex: 1 };

// User Details Fragment
const UserItem = ({ name, email, phone, imageSrc }) => {
  const picture = imageSrc ? (
    <img src={imageSrc} alt="Person" style={imageStyle} />
  ) : (
    ""
  );
  return (
    <li>
      <div className="container">
        {picture}
        <h3 className="fullname">{name}</h3>
        <p className="contact">{email}</p>
        <p className="contact">{phone}</p>
      </div>
    </li>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default UserItem;
