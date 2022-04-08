import React from "react";

export const Content_ttl = (props) => {
    const {ttl,sub} = props;
    return (
        <div className="content_ttl container">
            <h2>{ttl}</h2>
            <p>{sub}</p>
        </div>
    );
};