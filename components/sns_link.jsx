import React from "react";
import Link from "next/link";

const Sns_link = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <img src={props.icon_url} alt={props.alt} />
      </a>
    </Link>
  );
};

export default Sns_link;
