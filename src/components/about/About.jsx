import React from 'react';
import './about.css';
import Award from '../../img/award.png';

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by a
          readable content
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit accusantium error voluptas aliquid neque doloremque at
          et quam blanditiis quo.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h4 className="a-award-title">International Design Award 2021</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitTenetur
              minima quia perspiciatis nam nobis quis incidunt nulla, veritatis
              facere possimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
