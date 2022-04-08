import React from "react";

export const Sns_link = (props) => {
    return(
        <a href={props.link}>
            <img src={props.icon_url} alt={props.alt} />
        </a>
    );
};