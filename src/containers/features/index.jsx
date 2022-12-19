import React from "react";
import { Feature } from "../../components";
import "./features.css";
const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
   {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush."
   }
];

export const Features = () => {
  return (
    <div className="features section-padding">
      <div className="features-heading">
        <h2 className="gradient-text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a href="#getstarted">Request Early Access to Get Started</a>
      </div>
      <div className="features-container">
      {featuresData.map((feature, i)=> (
        <Feature key={i} title={feature.title} text={feature.text} />
      ))}
      </div>
    </div>
  );
};
