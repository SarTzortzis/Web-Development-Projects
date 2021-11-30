import React from "react";
import "./circuits.css";
import MonteCarloImg from "../../../assets/images/monaco.png";
import Canada from "../../../assets/images/canada.png";
import America from "../../../assets/images/america.png";

function circuits() {
  return (
    <main className="circuits-Container">
      <h1 className="circuits-h1">
        <i>
          F<span>1</span>
        </i>{" "}
        Circuits
      </h1>
      <div className="circuits-row">
        <img
          src={MonteCarloImg}
          className="circuits-img"
          alt="monteCarloCircuit"
        ></img>
        <div className="circuits-desc">
          <p className="circuit-name">Circuit de Monaco</p>
          <p className="circuits-location">
            <i className="fas fa-map-pin"></i>La Condamine and Monte Carlo,
            Monaco
          </p>
          <p className="circuits-length">
            <i className="fas fa-road"></i>3.337 km (2.074 mi)
          </p>
        </div>
        <div>
          <iframe
            className="circuits-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11531.346246346715!2d7.420556!3d43.734722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4181ec138f22216e!2zNDPCsDQ0JzA1LjAiTiA3wrAyNScxNC4wIkU!5e0!3m2!1sen!2sgr!4v1638118481984!5m2!1sen!2sgr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="circuits-row">
        <img src={Canada} className="circuits-img" alt="canadaCircuit"></img>
        <div className="circuits-desc">
          <p className="circuit-name">Circuit Gilles Villeneuve</p>
          <p className="circuits-location">
            <i className="fas fa-map-pin"></i> Parc Jean-Drapeau Montreal,
            Canada
          </p>
          <p className="circuits-length">
            <i className="fas fa-road"></i> 4.361 km (2.71 mi)
          </p>
        </div>
        <div>
          <iframe
            className="circuits-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11185.887662514191!2d-73.522461!3d45.500578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x835fee297ea2ed34!2zNDXCsDMwJzAyLjEiTiA3M8KwMzEnMjAuOSJX!5e0!3m2!1sen!2sgr!4v1638119336159!5m2!1sen!2sgr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="circuits-row">
        <img
          src={America}
          className="circuits-img"
          alt="unitedStatesCarloCircuit"
        ></img>
        <div className="circuits-desc">
          <p className="circuit-name">Circuit of the Americas</p>
          <p className="circuits-location">
            <i className="fas fa-map-pin"></i>Austin, Texas
          </p>
          <p className="circuits-length">
            <i className="fas fa-road"></i> 5.513 km (3.426 mi)
          </p>
        </div>
        <div>
          <iframe
            className="circuits-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13802.606875756454!2d-97.641111!3d30.132778000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x82667ebf1ee004cd!2zMzDCsDA3JzU4LjAiTiA5N8KwMzgnMjguMCJX!5e0!3m2!1sen!2sgr!4v1638122099984!5m2!1sen!2sgr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}

export default circuits;
