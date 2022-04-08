import React from "react";

const Content_ttl = (props) => {
  const { ttl, sub } = props;
  return (
    <div className="content_ttl container">
      <h2>{ttl}</h2>
      <p>{sub}</p>
    </div>
  );
};

export default Content_ttl;
