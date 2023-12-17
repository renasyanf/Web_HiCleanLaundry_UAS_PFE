import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hi Clean</span> <br />
            Laundry
          </h1>
          <p className="hero--section-description">
            Kami akan membuat bajumu menjadi bersih, wangi dan rapi!
            <br /> Siap antar dan jemput sesuai tujuan
            <br /> Buka jam 07.00 - 20.00
          </p>
        </div>
        <Link to="/Harga" className="btn btn-primary">
          More
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/landing.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
