import React from "react";
import "./blog.css";
import { cardInfo } from "./imports.js";

const BlogCard = ({ image, text }) => (
  <div className="blog-content-card">
    <img src={image} alt={`${image}`} />
    <div className="blog-content-card-text">
        <div>
        <small>Sep 26, 2022</small> <br />
        <p>{text} </p>
        </div>

        <a href="#fullarticle">
          <small>Read Full Article</small>
        </a>
    </div>
  </div>
);

export const Blog = () => {
  return (
    <section className="blog section-padding" id="features">
      <div className="blog-heading">
        <h3 className="gradient-text">
          A lot is happening, <br /> We are blogging about it.
        </h3>
      </div>
      <div className="blog-content">
        {/* {cardInfo.map((info, index)=> (
    <BlogCard key={index} image={info.image} text={info.text}  />
  ))} */}
        <BlogCard image={cardInfo[0].image} text={cardInfo[0].text} />

        <BlogCard image={cardInfo[1].image} text={cardInfo[1].text} />
        <BlogCard image={cardInfo[2].image} text={cardInfo[2].text} />
        <BlogCard image={cardInfo[3].image} text={cardInfo[3].text} />
        <BlogCard image={cardInfo[4].image} text={cardInfo[4].text} />
      </div>
    </section>
  );
};
