import React from 'react';
import Navbar from '../Navbar';
import AboutSty from './About.module.css'; 
import First from "./../images/image 111 (1).png"
import sec from "./../images/BG.png"
import thir from "./../images/gas-stove-svgrepo-com.svg"
import Footerrr from '../Footerrr';
 
const About = () => {
  return (
    <div>
      <Navbar />
      <div className={AboutSty.aboutab}> 
        <div className={AboutSty.content}>
          <div className={AboutSty.imgandcard}>
            <img src={First} alt="" />
          </div>

          <div className={AboutSty.tex}>
            <h3>We provide healthy food for your family.</h3>
            <p style={{ fontWeight: 550 }}>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p style={{ fontWeight: 500, color: '#414536', lineHeight: 1.5 }}>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable event.
            </p>
          </div>
        </div>
      </div>

      <div className={AboutSty.contentab}> 
        <div className={AboutSty.imgg}>
          <img src={sec} alt="" />
          <div className={AboutSty.overlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"
              />
            </svg>
            <p>Feel the authentic & original taste from us</p>
          </div>
        </div>
        <div className={AboutSty.menuab}> 
          <div className={AboutSty.card}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-alarm"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z"
              />
              <path
                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1"
              />
            </svg>
            <div className={AboutSty.item}>
              <h4 style={{ color: '#FF6F61' }}>Multi Cuisine</h4>
              <p>
                In the new era of technology we look in the future with certainty
                life.
              </p>
            </div>
            <img
              style={{ width: '50px', height: '25px', fill: '#FF6F61', color: '#FF6F61' }}
              src={thir}
              alt=""
            />
            <div className={AboutSty.item}>
              <h4 style={{ color: '#FF6F61' }}>Easy To Order</h4>
              <p>
                In the new era of technology we look in the future with certainty
                life.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cup-straw"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82q0 .069-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87s-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A1 1 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278M9.768 4.607A14 14 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.3 3.3 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a6 6 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69s2.081-.441 2.438-.69c.042-.029.09-.094.102-.215l.852-8.03a6 6 0 0 1-.435.127 9 9 0 0 1-.89.17zM4.467 4.884s.003.002.005.006zm7.066 0-.005.006zM11.354 5a3 3 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222"
              />
            </svg>
            <div className={AboutSty.item}>
              <h4 style={{ color: '#FF6F61' }}>Fast Delivery</h4>
              <p>
                In the new era of technology we look in the future with certainty
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footerrr/>
    </div>
  );
};

export default About;
