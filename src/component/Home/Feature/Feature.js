import React from "react";
import "./Feature.css";
import Img_1 from "./FeatureImg/ins_1_03-300x300.jpg.webp";
import Img_2 from "./FeatureImg/ins_2_01-300x300.jpg.webp";
import Img_3 from "./FeatureImg/ins_3_01-300x300.jpg.webp";
import Img_4 from "./FeatureImg/ins_4_02-300x300.jpg.webp";
import Img_5 from "./FeatureImg/ins_5_02-300x300.jpg.webp";
import Img_6 from "./FeatureImg/ins_6_01-300x300.jpg.webp";

const Feature = () => {
  const feature = [
    { img: Img_1 },
    { img: Img_2 },
    { img: Img_3 },
    { img: Img_4 },
    { img: Img_5 },
<<<<<<< HEAD
    { img: Img_6 },
  ];
  return (
    <div className="container">
      <div className="row py-3">
        {feature.map((f, index) => (
          <img
            key={index}
            className="featureImg col-lg-2 img-fluid m-0 p-0"
            src={f.img}
            alt=""
          />
        ))}
=======
    { img: Img_6 }

  ]
  return (
    <div className='container'>
      <div className='row py-3'>
        {
          feature.map((f, index) =>
            <img
              key={index}
              className='featureImg col-lg-2 img-fluid m-0 p-0'
              src={f.img} alt="" />


          )
        }

>>>>>>> 97b35ef3bf6dbe71c1dfd3a6bef352ff368df27a
      </div>
    </div>
  );
};

export default Feature;
