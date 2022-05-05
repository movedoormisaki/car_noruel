import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

const StyleGallery = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  }
`;

const Grid_img = (props) => {
  let count = 9;
  if (isMobile) {
    count = 8;
  } else {
    count = 9;
  }

  const random_img = choose_at_random(props.img, count);
  const Change_number = Math.floor(Math.random() * 9);

  return (
    <StyleGallery className="gallery row">
      {random_img.map((item, index) => {
        return (
          <div
            key={index}
            className="col-sm-4 col-6 gallery_img"
            style={{
              background:
                "url(" + item.src + ")  center center / cover no-repeat",
            }}
          ></div>
        );
      })}
    </StyleGallery>
  );
};

const choose_at_random = (arrayData, count) => {
  // countが設定されていない場合は1にする
  var count = count || 1;
  var arrayData = [...arrayData];
  var result = [];
  for (var i = 0; i < count; i++) {
    var arrayIndex = Math.floor(Math.random() * arrayData.length);
    result[i] = arrayData[arrayIndex];
    // 1回選択された値は削除して再度選ばれないようにする
    arrayData.splice(arrayIndex, 1);
  }
  return result;
};

export default Grid_img;
