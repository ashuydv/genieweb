import React from "react";
import { Link, useParams } from "react-router-dom";
import programData from "../components/programData";

const Programs = () => {
  return (
    <div>
      <section id="programs" className="section">
        <div className="container is-centered">
          <div className="card body-graphics  py-6  is-shadowless has-background-primary-light has-text-black has-radius-full w-full">
            <div className="has-text-centered  mb-0">
              <div className="title is-size-4-mobile is-3">
                Programs Catalog
              </div>{" "}
              <div className="columns is-centered">
                <div className="column is-6">
                  <div className="field is-expanded">
                    <p className="control has-icons-left ">
                      <input
                        icon="magnify"
                        type="search"
                        placeholder="Search Programs"
                        className="input center is-rounded is-medium"
                      />{" "}
                      <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="columns is-multiline p-6">
              {console.log(programData)}
                {programData.map((item) => {
                  return (
                    <div className="column is-3" key={item.id} >
                      <Link
                        to={`/programs/${item.id}`}
                        className=""
                      >
                        <div className="card pb-0 h-full is-shadowless has-text-centered has-background-white has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                          <div className="has-background-primary shine has-text-white p-1  is-size-7 center has-top-radius-full ">
                            {item.date}
                          </div>{" "}
                          <div className="card-content ">
                            <div className="center">
                              <img
                                src={item.img}
                                width="70"
                                alt="profile"
                                srcSet=""
                              />
                            </div>{" "}
                            <div className="center mt-3">
                              <div className="tags mt-4 cneter">
                                <span className="tag has-background-black has-text-white  shine is-rounded">
                                  <span className="">{item.tag1}</span>
                                </span>{" "}
                                <span className="tag is-primary is-rounded">
                                  <span className="">{item.tag2}</span>
                                </span>
                              </div>
                            </div>{" "}
                            <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-medium has-text-black">
                              {item.title}
                            </div>{" "}
                            <div className="button mt-3 is-rounded  is-fullwidth is-primary">
                              Enroll Now
                            </div>{" "}
                            <div className="mt-4">
                              <div className="rate has-text-black  center is-disabled">
                                <div className="rate-item set-on">
                                  <span className="icon is-small">
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                </div>
                                <div className="rate-item set-on">
                                  <span className="icon is-small">
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                </div>
                                <div className="rate-item set-on">
                                  <span className="icon is-small">
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                </div>
                                <div className="rate-item set-on">
                                  <span className="icon is-small">
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                </div>
                                <div className="rate-item set-half">
                                  <span className="icon is-small">
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                  <span
                                    className="icon is-half is-small"
                                    style={{ width: "80%" }}
                                  >
                                    <i className="mdi mdi-star"></i>
                                  </span>
                                </div>
                              </div>{" "}
                              <div
                                className="is-size-7 has-text-grey"
                                style={{ marginTop: "-10px" }}
                              >
                                10500+ Students Enrolled
                              </div>
                            </div>{" "}
                            <div className="card mt-4    is-shadowless has-background-success-light has-text-black has-radius-6">
                              <div className="card-content py-3">
                                <div className="center">
                                  <div className="media-left center ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      className="h-5 w-5 has-text-success"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                      ></path>
                                    </svg>
                                  </div>{" "}
                                  <div className="media-content ">
                                    <p className="has-text-success is-size-7">
                                      {item.price}{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
