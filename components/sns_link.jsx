import React from "react";

const Sns_link = (props) => {
  return (
    <a href={props.link}>
      <img src={props.icon_url} alt={props.alt} />
    </a>
  );
};

export default Sns_link;
