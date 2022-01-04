import React from "react";
import "./Blog1.css";
const Blog1 = () => {
  const blogList = [
    {
      id: 1,
      img: "https://i.ibb.co/RS1CY3X/blog1.jpg",
      title: "Spring – Summer Trending 2020",
      by: "By adminon April 6, 2020",
      desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
      id: 2,
      img: "https://i.ibb.co/7XP8Wcq/blog2.jpg",
      title: "Spring – Summer Trending 2020",
      by: "By adminon April 6, 2020",
      desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
      id: 3,
      img: "https://i.ibb.co/hV6JTMv/blog3.jpg",
      title: "Style for couple in Weeding season",
      by: "By adminon April 6, 2020",
      desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
  ];
  return (
    <div>
      <div className="text-center m-4">
        <h4>LATES FROM BLOG</h4>
        <span>The freshest and most exciting news</span>
      </div>
      <div className="container mb-5">
        <div className="row">
          {blogList.map((blog) => (
            <div data-aos="zoom-out" key={blog.id} className="col-lg-4 col-sm-6">
              <div className="card card1 card-block">
                <h4 className="card-title text-right">
                  <i className="material-icons">blog</i>
                </h4>
                <img data-aos="zoom-in" src={blog.img} alt="" />
                <h5 data-aos="fade-left" className="card-title mt-3 mb-3 p-3">{blog.title}</h5>
                <p data-aos="fade-right" className="card-text ps-2">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog1;
