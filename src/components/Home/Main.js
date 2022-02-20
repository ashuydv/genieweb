import React from "react";

const Main = () => {
  return (
    <div className="container is-fluid" >
      <section
        className="center section"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="columns is-centered hero-section">
          <div
            className="column is-10"
            style={{ marginTop: "0rem !important" }}
          >
            <h3 className="textBlue is-size-2 is-size-1-mobile has-text-weight-bold has-text-centered">
              India's 1<sup>st</sup>
            </h3>
            <h1 className="textBlue is-size-8 is-size-1-mobile hero-title has-text-weight-bold has-text-centered is-12">
              Gamified Learning Platform
            </h1>
            <div className="center mt-6">
              <a href="#programs">
                <div className="button is-rounded is-large is-black has-text-weight-medium has-text-centered">
                  Enroll Now for ₹ 249
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
