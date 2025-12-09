import React, { useEffect, useState } from "react";
import "./Testimonials.scss";
import { testimonials } from "../../data";
import { FormatQuote } from "@mui/icons-material";

export default function Testimonials() {
  return (
    <div className="testimonials-wrapper">
      <h2 className="section-title">Client Testimonials</h2>
      <div className="testimonials-scroller">
        {testimonials &&
          testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <FormatQuote className="quote-icon" />
              <p className="testimonial-text">{testimonial.testimonial}"</p>
              <div className="user-details">
                <span className="user-name">— {testimonial.name}</span>
                <span className="user-location">{testimonial.country}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
