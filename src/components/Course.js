import React from "react";
import { useParams } from "react-router-dom";
import courseData from "./courseData";

const Course = () => {
  const {id} = useParams()
  const thisProduct = courseData.find(item => item.id === id)

  console.log(thisProduct);

  return (
    <div>
      <section className="section">
        <div className="container is-fluid is-centered">
          <div className="card dark is-relative is-clipped is-shadowless has-background-black has-text-black has-radius-full w-full">
            <div className="card-content">
              <div className="columns py-6 pl-5">
                <div className="column pl-5 py-6">
                  <span value="0" className="pr-2">
                    <div className="tag has-background-dark has-text-white shine has-text-weight-medium is-rounded mb-3 shine">
                      {thisProduct.tag1}
                    </div>
                  </span>
                  <span value="1" className="pr-2">
                    <div className="tag has-background-dark has-text-white shine has-text-weight-medium is-rounded mb-3 shine">
                    {thisProduct.tag2}
                    </div>
                  </span>
                  <span value="2" className="pr-2">
                    <div className="tag has-background-dark has-text-white shine has-text-weight-medium is-rounded mb-3 shine">
                      {thisProduct.tag3}
                    </div>
                  </span>
                  <div className="title is-size-3-mobile is-size-2 has-text-white">
                    {thisProduct.title}
                  </div>
                  <div className="is-size-5 is-size-6-mobile mt-1 mb-6 has-text-white has-text-weight-medium">
                    {thisProduct.description}
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="mb-5">
                        <div className="has-text-white has-text-weight-semibold is-size-6">
                          <div className="center is-pulled-left">
                            <span className="image is-24x24">
                              <img
                                src={thisProduct.img}
                                alt=""
                                srcSet=""
                                loading="lazy"
                              />
                            </span>
                            <span className="has-text-weight-medium pl-2">
                              {thisProduct.date}
                            </span>
                          </div>
                          <br />
                        </div>
                        <div className="content has-font-14px mt-2 has-text-weight-medium has-text-grey">
                          {thisProduct.time}
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="mb-5">
                        <div className="has-text-white has-text-weight-semibold is-size-6">
                          <div className="center is-pulled-left">
                            <span className="image is-24x24">
                              <img
                                src="https://lucdn.letsupgrade.net/fire_3dfa342a67.png"
                                alt=""
                                srcSet=""
                                loading="lazy"
                              />
                            </span>
                            <span className="has-text-weight-medium pl-2">
                              {thisProduct.projects}
                            </span>
                          </div>
                          <br />
                        </div>
                        <div className="content has-font-14px mt-2 has-text-weight-medium has-text-grey">
                          {thisProduct.projectDesc}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column has-text-centered p-0 has-text-left">
                    <div
                      id="heroEnrollBtn"
                      className="button is-medium has-text-weight-semibold is-rounded has-background-primary has-text-white"
                    >
                      Enroll Now
                    </div>
                  </div>
                </div>
                <div className="column pl-0 is-hidden-mobile w-full">
                  <iframe
                    src={thisProduct.video}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="has-radius-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
