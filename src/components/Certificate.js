import React from 'react';

const Certificate = () => {
  return (
  <div>
      <section className="section" style={{marginTop: "-50px"}}>
            <div className="container is-centered">
              <div className="card dark is-relative is-clipped is-shadowless has-background-black body-graphics has-text-black has-radius-full w-full">
                <div className="card-content">
                  <div className="columns is-vcentered py-6 is-gapless pl-5">
                    <div className="column is-half py-6 pl-5">
                      <div className="title is-1 has-text-white is-size-3-mobile">
                        JavaScript Essentials Zero to Hero Program
                      </div>
                      <div className="is-size-5 mt-1 mb-6 has-text-white has-text-weight-medium is-size-6-mobile">
                        Complete the program successfully to obtain certificate
                        for essentials program from ITM Group of Institutions,
                        National Skill Development Corporation, and LetsUpgrade
                      </div>
                      <div
                        id="certificateEnrollBtn"
                        className="button is-white has-text-weight-bold is-rounded is-medium has-background-primary has-text-white"
                      >
                        Enroll Now
                      </div>
                    </div>
                    <div className="column is-half has-text-centered">
                      <div className="is-clickable">
                        <img
                          src="https://lucdn.letsupgrade.net/small_Sample_Certificate_c9664c59d5_72e6f5de6d_809e8ec3b3_63194a1e09.webp"
                          loading="lazy"
                          width="80%"
                          alt="posted in community"
                          className="certificate-shadow"
                          style={{borderRadius: "10px !important"}}
                        />
                      </div>
                      <div className="is-clickable center mt-2 is-size-6 has-text-grey-light has-text-weight-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          ></path>
                        </svg>
                        <span>&nbsp; Click to zoom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  </div>);
};

export default Certificate;
