import React from "react";
import "./Blog1.css";
const Blog1 = () => {
  const blogList = [
    {
      img: "https://i.ibb.co/RS1CY3X/blog1.jpg",
      title: "Spring – Summer Trending 2020",
      by: "By adminon April 6, 2020",
      desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
      img: "https://i.ibb.co/7XP8Wcq/blog2.jpg",
      title: "Spring – Summer Trending 2020",
      by: "By adminon April 6, 2020",
      desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
    },
    {
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
            <div class="col-lg-4 col-sm-6">
              <div class="card card1 card-block">
                <h4 class="card-title text-right">
                  <i class="material-icons">blog</i>
                </h4>
                <img src={blog.img} alt="" />
                <h5 class="card-title mt-3 mb-3 p-3">{blog.title}</h5>
                <p class="card-text ps-2">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog1;
