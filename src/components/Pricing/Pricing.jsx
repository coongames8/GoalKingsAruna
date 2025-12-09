import React, { useContext, useState } from "react";
import "./Pricing.scss";
import { PriceContext } from "../../PriceContext";
import { useNavigate } from "react-router-dom";
import { Star } from "@mui/icons-material";

export default function Pricing() {
  const navigate = useNavigate();
  const { setPrice } = useContext(PriceContext);

  const handleClick = (price) => {
    setPrice(price);
    navigate("/pay");
  };

  const plans = [
    {
      id: 1,
      title: "Silver",
      price: 250,
      duration: "/Day",
      features: [
        "Daily access to core football insights and match summaries",
        "Quick, easy-to-read analysis for busy users",
        "Reliable data-driven breakdowns for upcoming fixtures",
      ],
    },
    {
      id: 2,
      title: "Gold",
      price: 1000,
      duration: "/Week",
      features: [
        "Full weekly access to expert match previews and insights",
        "Detailed league coverage with performance trends",
        "Balanced analytics combining statistics and form analysis",
      ],
    },
    {
      id: 3,
      title: "Platinum",
      price: 3000,
      duration: "/Month",
      features: [
        "Complete monthly access to all advanced insights and analytics",
        "Deep-dive reports with team metrics, form charts and trend patterns",
        "Ideal for users who follow football consistently and want long-term performance monitoring",
      ],
    },
  ];

  const Item = ({ data }) => (
    <div
      className={`pricing-card ${data.title === "Gold" ? "featured" : ""}`}
      key={data.id}
    >
      {data.title === "Gold" && (
        <div className="featured-badge">
          <Star className="star-icon" />
          <span>Popular</span>
        </div>
      )}

      <div className="card-header">
        <h3 className="title">{data.title}</h3>
        <div className="price">
          <span className="currency">KSH</span>
          <span className="amount">{data.price}</span>
          <span className="duration">{data.duration}</span>
        </div>
      </div>

      <div className="card-features">
        <ul>
          {data.features.map((item, index) => (
            <li key={index}>
              <span className="checkmark">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="glass-btn" onClick={() => handleClick(data.price)}>
        Get Started
      </button>
    </div>
  );

  return (
    <div className="pricing-container" id="pricing">
      <div className="pricing-grid wrapper">
        {plans.map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
