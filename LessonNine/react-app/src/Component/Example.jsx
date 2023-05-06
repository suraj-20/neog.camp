import React from "react";
import "../Style/Example.css";
import image1 from '../Assets/asset 37.jpeg';
import image2 from '../Assets/asset 38.jpeg';
import image3 from '../Assets/asset 39.jpeg';

function Example() {
  return (
    <section className="example-section">
      <div className="container">
        <div className="example-header flex">
          <h2 className="example-heading">
            One plateform, endless possibilities
          </h2>
          <a href="#" className="secondary-btn">
            See more examples <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div class="examples-area flex">
          <a href="#" class="examples-card">
            <h3 class="card-text">
              Can users complete a task in my software interface?
            </h3>
          </a>
          <a
            href="#"
            class="examples-card"
            style={{
                background: "linear-gradient(rgb(0,0,0,0.1), rgb(0,0,0,0.8))",
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
            }}
          >
            <h3 class="card-text">
              Can users find important pages on my website?
            </h3>
          </a>
          <a
            href="#"
            class="examples-card"
            style={{
                background: "linear-gradient(rgb(0,0,0,0.1), rgb(0,0,0,0.8))",
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
            }}
          >
            <h3 class="card-text">Is my website's intended audience clear?</h3>
          </a>
          <a
            href="#"
            class="examples-card"
            style={{
              background: "linear-gradient(rgb(0,0,0,0.1), rgb(0,0,0,0.8))",
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
            }}
          >
            <h3 class="card-text">
              Do visitors understand what a page is about?
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Example;
