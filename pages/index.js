import Head from "next/head";

import logo from "../public/img/logo_white.svg";
import top_img from "../public/img/top_bg.jpg";
import concept_img from "../public/img/concept_img.jpg";
import Concept from "../components/concept";
import Content_bg from "../components/content_bg";
import Content_ttl from "../components/content_ttl";
import Grid_img from "../components/grid_img";
import Sns_link from "../components/sns_link";
import First_view from "../components/first_view";

import bmw_bg from "../public/img/bmw_bg.jpg";
import mercedes_bg from "../public/img/mercedes_benz_bg.jpg";
import audi_bg from "../public/img/audi_bg.jpg";
import porsche_bg from "../public/img/porsche_bg.jpg";
import mini_bg from "../public/img/mini_bg.jpg";
import vehicle_inspection from "../public/img/vehicle_inspection.jpg";
import purchase from "../public/img/purchase.jpg";
import sale from "../public/img/sale.jpg";

import deco_1 from "../public/img/deco_1.jpg";
import deco_2 from "../public/img/deco_2.jpg";
import deco_4 from "../public/img/deco_4.jpg";

import service_img_1 from "../public/img/service_img_1.jpg";
import service_img_2 from "../public/img/service_img_2.jpg";
import service_img_3 from "../public/img/service_img_3.jpg";
import profile_icon from "../public/img/profile_icon.jpg";

export default function Home() {
  const lineup_keyword =
    "その他、ご希望の車種があれば\nお気軽にお申し付けください。";
  const concept_ttl = "毎日の生活に\n最高の瞬間を届けたい。";
  const grid_img_random = [
    bmw_bg,
    mercedes_bg,
    audi_bg,
    porsche_bg,
    mini_bg,
    service_img_1,
    service_img_2,
    service_img_3,
    concept_img,
    deco_1,
    deco_2,
    deco_4,
  ];

  const top_img_array = [top_img, concept_img, service_img_3];

  const company_name = "CAR NORUEL\nINTERNATIONAL";

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <title>CAR NORUEL INTERNATIONAL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <First_view top_img={top_img_array} />
      <div className="concept">
        <Concept concept_ttl={concept_ttl} concept_img={concept_img} />
      </div>
      <div id="LINEUP" className="first_content">
        <Content_ttl ttl="LINEUP" sub="ラインナップ" />
        <Content_bg
          content_ttl="BMW"
          bg_url={bmw_bg}
          content_detail=""
          bg_position="60% 70%"
          bg_size="cover"
        />
        <Content_bg
          content_ttl="MERCEDES BENZ"
          bg_url={mercedes_bg}
          content_detail=""
          bg_position="5% 60%"
          bg_size="125%"
        />
        <Content_bg
          content_ttl="Audi"
          bg_url={audi_bg}
          content_detail=""
          bg_size="200%"
        />
        <Content_bg
          content_ttl="PORSCHE"
          bg_url={porsche_bg}
          content_detail=""
          bg_position="50% 60%"
          bg_size="cover"
        />
        <Content_bg
          content_ttl="MINI"
          bg_url={mini_bg}
          content_detail=""
          bg_position="70% 50%"
          bg_size="120%"
        />
        <div className="lineup_keyword">
          <p className="white_space">{lineup_keyword}</p>
        </div>
      </div>

      <div id="SERVICE" className="second_content">
        <Content_ttl ttl="SERVICE" sub="サービス" />
        <Content_bg
          content_ttl="販売"
          bg_url={sale}
          content_detail="高品質、希少性、低価格を拘り抜いたラインナップに自信があります。高品質と他社にはない安心をお届け致します。"
          bg_size="cover"
        />
        <Content_bg
          content_ttl="買取"
          bg_url={purchase}
          content_detail="お客様が大事にお乗り頂いたお車と想いを高価買取致しております。他社様と比較検討下さい。ご納得いく価格にて買取致します。"
          bg_size="cover"
        />
        <Content_bg
          content_ttl="車検"
          bg_url={vehicle_inspection}
          content_detail="一般整備、車検お任せ下さい。
          お客様がご納得いくまでご案内致します。輸入車整備及び車検は高額と思われがちですが、当社車検整備は低価格にてご案内が可能です。ぜひ、ご相談下さい。"
          bg_size="cover"
        />
      </div>

      <div className="third_content">
        <div className="container">
          <Grid_img img={grid_img_random} />
        </div>
      </div>

      <div id="ABOUTUS" className="fourth_content">
        <Content_ttl ttl="ABOUT US" sub="会社概要" />
        <div className="container aboutus_inner">
          <div className="row">
            <div className="col-md-6 row">
              <div
                className="col-5 aboutus_icon"
                style={{ backgroundImage: `url(${profile_icon.src})` }}
              ></div>
              <div className="col-7">
                <p>株式会社カーノルエル</p>
                <p>代表取締役</p>
                <p className="name">松浦和弘</p>
              </div>
            </div>
            <div className="col-md-6">
              <table>
                <tbody>
                  <tr>
                    <th>住所</th>
                    <td>〒669-3309 兵庫県丹波市柏原町柏原2871-6</td>
                  </tr>
                  <tr>
                    <th>TEL</th>
                    <td>0795-71-6428</td>
                  </tr>
                  <tr>
                    <th>MAIL</th>
                    <td>carnoruel@outlook.jp</td>
                  </tr>
                  <tr>
                    <th>営業時間</th>
                    <td>月 - 金 : 10:00 - 19:00（定休日 水曜日）</td>
                  </tr>
                </tbody>
              </table>
              <Sns_link link="" icon_url="" alt="" />
              <Sns_link link="" icon_url="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={logo.src} alt="フッターロゴ" />
        <p>copyrights© CAR NORUEL INTERNATIONAL. All Rights Reserved.</p>
      </div>
    </>
  );
}
