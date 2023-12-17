import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/index.json';

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Service</p>
        <h2 className="skills--section--heading">Our Service</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <Link to="/FormReservasi">
                <button className="skills--section--button">Pesan</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
