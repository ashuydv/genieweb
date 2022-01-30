import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="section" style={{ marginTop: "-50px" }}>
        <div className="container is-centered">
          <div className="card is-relative is-clipped is-shadowless has-background-primary-light has-text-black has-radius-full">
            <div className="card-content">
              <div className="columns is-multiline is-left pt-6 pb-4 pl-4">
                <div className="column  ">
                  <div className="title is-4 is-size-6-mobile">100% LIVE</div>
                  <div className="subtitle">Instructor Led Learning</div>
                </div>
                <div className="column  ">
                  <div className="title is-4 is-size-6-mobile">8-10 Hours</div>
                  <div className="subtitle">of Learning</div>
                </div>
                <div className="column  ">
                  <div className="title is-4 is-size-6-mobile">
                    Free Program
                  </div>
                  <div className="subtitle">to try new skill</div>
                </div>
                <div className="column  ">
                  <div className="title is-4 is-size-6-mobile">
                    Doubts Solving
                  </div>
                  <div className="subtitle">by Industry Experts</div>
                </div>
                <div className="column  ">
                  <div className="title is-4 is-size-6-mobile">
                    Completion Certificate
                  </div>
                  <div className="subtitle">delivered to you</div>
                </div>
              </div>
              <div className="card is-relative is-clipped is-shadowless has-background-white has-text-black has-radius-full ml-4">
                <div className="card-content py-3">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-32x32">
                        <img
                          src="https://lucdn.letsupgrade.net/icons8_heart_96_e761f50f1e.png"
                          alt="Program Overview"
                          loading="lazy"
                          className="is-rounded"
                        />
                      </figure>
                    </div>
                    <div className="media-content mt-1">
                      <p className="subtitle is-6">
                        "JavaScript is the most popular technology at this point
                        in the world" - Source StackOverFlow.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
