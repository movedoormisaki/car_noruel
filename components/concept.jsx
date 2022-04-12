import React from "react";
import { isMobile } from "react-device-detect";

const Concept = (props) => {
  const { concept_ttl, concept_img } = props;
  let concept_detail_sentence = "";

  if (isMobile) {
    concept_detail_sentence =
      "CAR NORUEL INTERNATIONALは、兵庫県丹波市にある高級輸入車専門店です。経験豊富な知識で販売、買取、車検を承っております。\n 車は、皆様の生活をとても色鮮やかなものにします。日々の買い物、恋人との旅行、家族との時間。 皆様の輝かしい最高の瞬間に花を添える。 そんな想いで、日々営業しております。";
  } else {
    concept_detail_sentence =
      "CAR NORUEL INTERNATIONALは、\n兵庫県丹波市にある高級輸入車専門店です。\n経験豊富な知識で販売、買取、車検を承っております。\n 車は、皆様の生活をとても色鮮やかなものにします。\n日々の買い物、恋人との旅行、家族との時間。\n 皆様の輝かしい最高の瞬間に花を添える。\n そんな想いで、日々営業しております。";
  }

  return (
    <div className="container">
      <div className="row">
        <section className="col-sm-6">
          <div className="concept_inner white_space">
            <h2>{concept_ttl}</h2>
            <p className="white_space">{concept_detail_sentence}</p>
          </div>
        </section>

        {(() => {
          if (isMobile) {
          } else {
            return (
              <>
                <section className="col-sm-6">
                  <div
                    className="concept_img"
                    style={{ backgroundImage: `url(${concept_img.src})` }}
                  />
                </section>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Concept;
