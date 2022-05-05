import React from "react";

const Content_bg = (props) => {
  const { bg_url, bg_position, content_ttl, content_detail, bg_size } = props;

  const contentStyle = {
    background: "url(" + bg_url.src + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: bg_size,
    backgroundPosition: bg_position,
  };

  return (
    <div className="lineup_inner" style={contentStyle}>
      <div className="lineup_box">
        <h3>{content_ttl}</h3>
        {(() => {
          if (content_detail) {
            return (
              <>
                <p>{content_detail}</p>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
};
Content_bg.defaultProps = {
  bg_position: "center",
};

export default Content_bg;
