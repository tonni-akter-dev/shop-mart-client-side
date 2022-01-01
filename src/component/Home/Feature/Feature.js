import React from "react";
import "./Feature.css";
import Img_1 from "./FeatureImg/ins_1_03-300x300.jpg.webp";
import Img_2 from "./FeatureImg/ins_2_01-300x300.jpg.webp";
import Img_3 from "./FeatureImg/ins_3_01-300x300.jpg.webp";
import Img_4 from "./FeatureImg/ins_4_02-300x300.jpg.webp";
import Img_5 from "./FeatureImg/ins_5_02-300x300.jpg.webp";
import Img_6 from "./FeatureImg/ins_6_01-300x300.jpg.webp";

const Feature = () => {
<<<<<<< HEAD
  const feature = [
    { img: Img_1 },
    { img: Img_2 },
    { img: Img_3 },
    { img: Img_4 },
    { img: Img_5 },
    { img: Img_6 },
  ];
  return (
    <div className="container-fluid">
      <div className="row py-3">
        {feature.map((f, index) => (
          <img
            key={index}
            className="featureImg col-lg-2 img-fluid m-0 p-0"
            src={f.img}
            alt=""
          />
        ))}
      </div>
    </div>
  );
=======
    const feature = [
        { img: Img_1 },
        { img: Img_2 },
        { img: Img_3 },
        { img: Img_4 },
        { img: Img_5 },
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

            </div>
        </div>
    );
>>>>>>> rukon
};

export default Feature;
