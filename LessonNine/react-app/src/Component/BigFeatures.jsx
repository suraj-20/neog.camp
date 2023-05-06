import React from "react";
import "../Style/BigFeatures.css";
import image1 from "../Assets/asset 18.png";
import image2 from "../Assets/asset 21.png";
import image3 from "../Assets/asset 24.png";

function BigFeatures() {
  return (
    <>
      <section className="big-feature-section main-container">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={image1} />
          </div>
          <div className="feature-disc flex">
            <h4>Effortless validatio for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intutive and delightful experiences for your users.
            </p>
          </div>
        </div>
      </section>
      <section className="big-feature-section main-container">
        <div className="container flex big-feature-container">
          <div className="feature-disc flex">
            <h4>Effortless validatio for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intutive and delightful experiences for your users.
            </p>
          </div>
          <div className="feature-img">
            <img src={image2} />
          </div>
        </div>
      </section>
      <section className="big-feature-section main-container">
        <div className="container flex big-feature-container">
          <div className="feature-img">
            <img src={image3} />
          </div>
          <div className="feature-disc flex">
            <h4>Effortless validatio for</h4>
            <h3>Design professionals</h3>
            <p>
              Test interfaces, interaction flows, iconography and more, to help
              you create intutive and delightful experiences for your users.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BigFeatures;
