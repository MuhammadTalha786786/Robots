import React from "react";
import "tachyons";
const Card = ({ name, email, id }) => {
  return (
    <div className=" tc bg-light-purple dib br2 pa3 ma2 grow">
      <img alt="Robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
