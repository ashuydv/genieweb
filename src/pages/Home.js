import React from "react";
import Slider from "../components/Home/Slider";
import Slider2 from "../components/Home/Slider2";
import Programs from "./Programs";

const Home = () => {

  return (
    <div>
      <div className="hero-top ">
        <div className="hero body-graphics is-small">
          <section className="center section" style={{height: "calc(100vh - 80px)"}}>
            <div className="columns is-centered hero-section">
              <div className="column is-10" style={{marginTop: "0rem !important"}}>
                <div className="center mb-4">
                  <img
                    src="/_nuxt/img/india-emoji.8b21479.png"
                    width="30"
                    alt="India"
                    srcSet=""
                  />
                </div>
                <div className="center has-text-grey-dark is-size-5 blink mb-2">
                  Live Community Members
                </div>
                <div
                  id="counter"
                  className="is-size-5 mb-1 center has-text-weight-bold center"
                >
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    5
                  </div>
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    3
                  </div>
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    4
                  </div>
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    3
                  </div>
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    3
                  </div>
                  <div className="counter-number has-background-success-grey has-text-white is-size-5">
                    5
                  </div>
                </div>
                <br />
                <h1 className="has-text-black is-size-8 is-size-1-mobile hero-title has-text-weight-bold has-text-centered">
                  India’s Largest Tech Learning Community
                </h1>
                <div
                  className="has-text-black has-text-weight-bold has-text-centered mt-5"
                  style={{fontSize : "25px", lineHeight:"28px"}}
                >
                  <span>join</span> 5,34,335+
                  <span> members and upgrade your self</span>
                </div>
                <div className="center mt-6">
                  <a href="#programs">
                    <div className="button is-rounded is-large is-black has-text-weight-medium has-text-centered">
                      Enroll Now for ₹ 0
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="section" style={{marginTop: "0rem !important"}}>
          <div className="container is-centered">
            <div className="columns is-centered is-vcentered py-6 ">
              <div className="column is-6 has-text-centered">
                <div className="title is-size-3-mobile is-2">Why LetsUpgrade?</div>
                <div className="subtitle has-text-centered has-text-grey">
                  LetsUpgrade believes in helping you add value to yourself at
                  the end of each day.
                </div>
              </div>
            </div>
            <section className="hero">
              <div className="hero-body" style={{padding: "0rem 0rem"}}>
                <div className="columns ">
                  <div className="column   ">
                    <div className="card   is-shadowless  has-background-primary-light has-radius-full h-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className=" px-4  center has-background- has-text-centered">
                        <p className=" has-text-weight-semibold   mt-4 is-size-4 is-size-5-tablet is-size-5-mobile has-text-black ">
                          <span>100% Live Learning</span>
                        </p>
                      </div>
                      <div className="  bottom has-background-">
                        <img
                          width="300"
                          src="https://lucdn.letsupgrade.net/business_3d_298_3273e21eb8.webp"
                          alt="profile"
                          srcSet=""
                          className="has-background-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card   is-shadowless  has-background-primary-light has-radius-full h-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className=" px-4  center has-background- has-text-centered">
                        <p className=" has-text-weight-semibold   mt-4 is-size-4 is-size-5-tablet is-size-5-mobile has-text-black ">
                          <span>
                            1:1 Mentoring sessions with Industry Experts
                          </span>
                        </p>
                      </div>
                      <div className="  bottom has-background-">
                        <img
                          width="300"
                          src="https://lucdn.letsupgrade.net/Mentoring_1_e6ba49adb7.webp"
                          alt="profile"
                          srcSet=""
                          className="has-background-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card   is-shadowless  has-background-primary-light has-radius-full h-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className=" px-4  center has-background- has-text-centered">
                        <p className=" has-text-weight-semibold   mt-4 is-size-4 is-size-5-tablet is-size-5-mobile has-text-black ">
                          <span>Popular Programs at fair price</span>
                        </p>
                      </div>
                      <div className="  bottom has-background-">
                        <img
                          width="300"
                          src="https://lucdn.letsupgrade.net/business_3d_354_8a99636ccd.webp"
                          alt="profile"
                          srcSet=""
                          className="has-background-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card   is-shadowless  has-background-primary-light has-radius-full h-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className=" px-4  center has-background- has-text-centered">
                        <p className=" has-text-weight-semibold   mt-4 is-size-4 is-size-5-tablet is-size-5-mobile has-text-black ">
                          <span>100% Placement Support till you get</span>
                        </p>
                      </div>
                      <div className="  bottom has-background-">
                        <img
                          width="300"
                          src="https://lucdn.letsupgrade.net/Placement_Support_38863bb236.webp"
                          alt="profile"
                          srcSet=""
                          className="has-background-"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card   is-shadowless  has-background-primary-light has-radius-full h-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className=" px-4  center has-background- has-text-centered">
                        <p className=" has-text-weight-semibold   mt-4 is-size-4 is-size-5-tablet is-size-5-mobile has-text-black ">
                          <span>Community to guide you throughout </span>
                        </p>
                      </div>
                      <div className="  bottom has-background-">
                        <img
                          width="300"
                          src="https://lucdn.letsupgrade.net/Community_to_get_Un_Stuck_b12bc855ae.webp"
                          alt="profile"
                          srcSet=""
                          className="has-background-"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <Programs />
        {/* <section id="programs" className="section">
          <div className="container is-centered">
            <div className="card body-graphics  py-6  is-shadowless has-background-primary-light has-text-black has-radius-full w-full">
              <div className="columns is-centered is-vcentered pt-3 pl-5">
                <div className="column is-6 has-text-centered">
                  <div className="title is-size-4-mobile is-3">Our Programs</div>
                  <div className="subtitle has-text-centered has-text-grey">
                    Trending Essentials and FullStack Programs
                  </div>
                </div>
              </div>
              <div className="columns is-multiline p-6">
                <div className="column is-3">
                  <a href="/programs/fullstack-web-development-pgp-fs" className="">
                    <div className="card  pb-0 h-full is-shadowless has-text-centered shine has-background-black body-graphics has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-info has-text-white p-1  is-size-7 center has-top-radius-full ">
                        29th Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/full_web_dev_pro_4a9715d649.webp"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-dark has-text-white   shine is-rounded">
                              <span className="">PGP - FS</span>
                            </span>
                            <span className="tag is-info is-rounded">
                              <span className="">Advance</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-semibold  has-text-gradient-golden">
                          
                          FullStack Web Development Program (PGP FS)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-white">
                          Enroll Now
                        </div>
                        <div className="mt-3">
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
                                style={{width:"59.99999999999994%" }}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            300+ Students Enrolled
                          </div>
                        </div>
                        <div className="card mt-4 is-shadowless  has-background-dark  has-text-black has-radius-6">
                          <div className="card-content py-3">
                            <div className="center">
                              <div className="media-left center ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-5 w-5 has-text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-white has-text-weight-light is-size-7">
                                  EMI Starting @ ₹2300/Month
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/fullstack-data-science-pgp-fs" className="">
                    <div className="card  pb-0 h-full is-shadowless has-text-centered shine has-background-black body-graphics has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-info has-text-white p-1  is-size-7 center has-top-radius-full ">
                        29th Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/full_data_science_pro_4f589d8671.webp"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-dark has-text-white   shine is-rounded">
                              <span className="">PGP - FS</span>
                            </span>
                            <span className="tag is-info is-rounded">
                              <span className="">Advance</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-semibold  has-text-gradient-golden">
                          
                          FullStack Data Science Program (PGP FS)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-white">
                          Enroll Now
                        </div>
                        <div className="mt-3">
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
                                style={{width:"20%"}}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            2000+ Students Enrolled
                          </div>
                        </div>
                        <div className="card mt-4 is-shadowless  has-background-dark  has-text-black has-radius-6">
                          <div className="card-content py-3">
                            <div className="center">
                              <div className="media-left center ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-5 w-5 has-text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-white has-text-weight-light is-size-7">
                                  Emi Starting @ ₹ 2300/Month
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/ess-java-programming" className="">
                    <div className="card pb-0 h-full is-shadowless has-text-centered has-background-white has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-primary shine has-text-white p-1  is-size-7 center has-top-radius-full ">
                        29th Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/jhava_bl_f14e8cfa4b.png"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-black has-text-white  shine is-rounded">
                              <span className="">Essential</span>
                            </span>
                            <span className="tag is-primary is-rounded">
                              <span className="">Beginner</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-medium has-text-black">
                          Java Programming Zero to Hero Program
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-primary">
                          Enroll Now
                        </div>
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
                                style={{width:"70%"}}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            30,500+ Students Enrolled
                          </div>
                        </div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-success is-size-7">
                                  Worth ₹4500/-
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/fullstack-python-django-pgp-fs" className="">
                    <div className="card  pb-0 h-full is-shadowless has-text-centered shine has-background-black body-graphics has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-info has-text-white p-1  is-size-7 center has-top-radius-full ">
                        29th Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/paython_dijango_9bb71b0240.webp"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-dark has-text-white   shine is-rounded">
                              <span className="">PGP - FS</span>
                            </span>
                            <span className="tag is-info is-rounded">
                              <span className="">Advance</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-semibold  has-text-gradient-golden">
                          
                          FullStack Python &amp; Django Program (PGP FS)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-white">
                          Enroll Now
                        </div>
                        <div className="mt-3">
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
                                style={{width:"50%"}}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            250+ Students Enrolled
                          </div>
                        </div>
                        <div className="card mt-4 is-shadowless  has-background-dark  has-text-black has-radius-6">
                          <div className="card-content py-3">
                            <div className="center">
                              <div className="media-left center ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-5 w-5 has-text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-white has-text-weight-light is-size-7">
                                  EMI Starting @ ₹2300/Month
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/fullstack-AI-ML-DL-pgp-fs" className="">
                    <div className="card  pb-0 h-full is-shadowless has-text-centered shine has-background-black body-graphics has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-info has-text-white p-1  is-size-7 center has-top-radius-full ">
                        29th Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/ml_E_Zero_to_hero_a285f19ec9.webp"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-dark has-text-white   shine is-rounded">
                              <span className="">PGP - FS</span>
                            </span>
                            <span className="tag is-info is-rounded">
                              <span className="">Advance</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-semibold  has-text-gradient-golden">
                          
                          FullStack AI, ML &amp; DL Program (PGP FS)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-white">
                          Enroll Now
                        </div>
                        <div className="mt-3">
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
                                style={{width:"50%"}}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            270+ Students Enrolled
                          </div>
                        </div>
                        <div className="card mt-4 is-shadowless  has-background-dark  has-text-black has-radius-6">
                          <div className="card-content py-3">
                            <div className="center">
                              <div className="media-left center ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  className="h-5 w-5 has-text-white"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-white has-text-weight-light is-size-7">
                                  EMI Starting @ ₹2300/Month
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/essentials-machine-learning2" className="">
                    <div className="card pb-0 h-full is-shadowless has-text-centered has-background-white has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-primary shine has-text-white p-1  is-size-7 center has-top-radius-full ">
                        31st Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/full_ai_ml_59c5d9ee66.webp"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-black has-text-white  shine is-rounded">
                              <span className="">Essential</span>
                            </span>
                            <span className="tag is-warning is-rounded">
                              <span className="">Intermediate</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-medium has-text-black">
                          Machine Learning Essentials Zero to Hero Program
                          (FREE)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-primary">
                          Enroll Now
                        </div>
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
                            <div className="rate-item">
                              <span className="icon is-small">
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            59600+ Students Enrolled
                          </div>
                        </div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-success is-size-7">
                                  Worth ₹4000/-
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/essentials-python-programming" className="">
                    <div className="card pb-0 h-full is-shadowless has-text-centered has-background-white has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-primary shine has-text-white p-1  is-size-7 center has-top-radius-full ">
                        31st Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/PYTHON_ZERO_TO_HERO_B1_b_38366319f9.png"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-black has-text-white  shine is-rounded">
                              <span className="">Essential</span>
                            </span>
                            <span className="tag is-primary is-rounded">
                              <span className="">Beginner</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-medium has-text-black">
                          Python Essentials Zero to Hero Program (FREE)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-primary">
                          Enroll Now
                        </div>
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
                                style={{width:"70%"}}
                              >
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            107500+ Students Enrolled
                          </div>
                        </div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-success is-size-7">
                                  Worth ₹3500/-
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="column is-3">
                  <a href="/programs/essentials-html-css-programming" className="">
                    <div className="card pb-0 h-full is-shadowless has-text-centered has-background-white has-radius-full is-flex is-justify-content-space-between is-flex-direction-column">
                      <div className="has-background-primary shine has-text-white p-1  is-size-7 center has-top-radius-full ">
                        31st Jan 2022
                      </div>
                      <div className="card-content ">
                        <div className="center">
                          <img
                            src="https://lucdn.letsupgrade.net/HTML_and_CSS_Z_T_H_b_81953ba6ae.png"
                            width="70"
                            alt="profile"
                            srcSet=""
                          />
                        </div>
                        <div className="center mt-3">
                          <div className="tags mt-4 cneter">
                            <span className="tag has-background-black has-text-white  shine is-rounded">
                              <span className="">Essential</span>
                            </span>
                            <span className="tag is-primary is-rounded">
                              <span className="">Beginner</span>
                            </span>
                          </div>
                        </div>
                        <div className="title is-5 mt-5 is-size-6-mobile has-text-weight-medium has-text-black">
                          HTML &amp; CSS Essentials Zero to Hero Program (FREE)
                        </div>
                        <div className="button mt-3 is-rounded  is-fullwidth is-primary">
                          Enroll Now
                        </div>
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
                            <div className="rate-item">
                              <span className="icon is-small">
                                <i className="mdi mdi-star"></i>
                              </span>
                            </div>
                          </div>
                          <div
                            className="is-size-7 has-text-grey"
                            style={{marginTop:"-10px"}}
                          >
                            48900+ Students Enrolled
                          </div>
                        </div>
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                                  ></path>
                                </svg>
                              </div>
                              <div className="media-content ">
                                <p className="has-text-success is-size-7">
                                  Worth ₹3500/-
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="center">
                <a href="/programs" className="button   is-rounded">
                  View More
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section">
          <div className="container is-centered">
            <div className="columns is-centered is-vcentered py-6 px-5">
              <div className="column is-6 has-text-centered">
                <div className="title is-size-3-mobile is-2">
                  LetsUpgrade Community
                </div>
                <div className="subtitle has-text-centered has-text-black">
                  A place to Network, hack your Motivation &amp; make you a part
                  of like minded tech learning groups for constant growth of
                  YOU!
                </div>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-7">
                <div className="card body-graphics is-clipped is-shadowless has-background-primary-light has-text-black has-radius-full h-full is-flex is-flex-direction-column is-justify-content-space-between">
                  <div className="card-content py-6 px-5">
                    <div className="columns is-gapless">
                      <div className="column">
                        <div className="is-size-4 is-size-4-mobile has-text-weight-semibold is-capitalized">
                          Motivate to learn next big SKILL
                        </div>
                        <div className="is-size-6 is-size-6-mobile">
                          Every day some new technology makes headlines, and to
                          constantly motivate you to learn and be the best, we
                          have got your back by simplifying the learning curve
                          all time.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://lucdn.letsupgrade.net/Lets_Upgrade_Community_lest_f8738f4f18.webp"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
              <div className="column auto">
                <div className="card body-graphics is-fullheight is-clipped is-shadowless has-background-primary-light has-text-black has-radius-full h-full is-flex is-flex-direction-column is-justify-content-space-between">
                  <div className="card-content py-6 px-5">
                    <div className="columns is-gapless">
                      <div className="column">
                        <div className="is-size-4 has-text-weight-semibold is-capitalized is-size-4-mobile">
                          Learning &amp; Support
                        </div>
                        <div className="is-size-6 is-size-6-mobile">
                          We enable members to ask questions, post answers,
                          upvote, accept the right solution and help with all
                          the support possible to make sure your learning is
                          top-notch.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://lucdn.letsupgrade.net/Lets_Upgrade_Community_riikmjk_1ff13e7ab9.webp"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-multiline mt-4">
              <div className="column is-4">
                <div className="card body-graphics is-fullheight is-clipped is-shadowless has-background-primary-light has-text-black has-radius-full h-full is-flex is-flex-direction-column is-justify-content-space-between">
                  <div className="card-content pt-6 px-5">
                    <div className="columns is-gapless">
                      <div className="column">
                        <div className="is-size-4 is-size-4-mobile has-text-weight-semibold is-capitalized">
                          Talk to like minded techies to grow more
                        </div>
                        <div className="is-size-6 is-size-6-mobile">
                          When alone, you thrive fast but with tons of confusion
                          and doubts. While working with like-minded people who
                          have the same ambition as you will help you grow far
                          better. So let's grow together!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://lucdn.letsupgrade.net/nded_Techies_To_Grow_More_bf38677d8d_0a6d4e6fc0.webp"
                      className="width-100 bottom"
                    />
                  </div>
                </div>
              </div>
              <div className="column ">
                <div className="card body-graphics is-clipped is-shadowless has-background-primary-light has-text-black has-radius-full h-full is-flex is-flex-direction-column is-justify-content-space-between">
                  <div className="card-content pt-6 px-5">
                    <div className="columns is-gapless">
                      <div className="column">
                        <div className="is-size-4 is-size-4-mobile has-text-weight-semibold is-capitalized">
                          Join LetsUpgrade Tribe of Achiever's
                        </div>
                        <div className="is-size-6 is-size-6-mobile">
                          A tribe of Achievers will help you grow professionally
                          and personally more every day. LU community is all
                          about Learning, building, sharing, and growing
                          together.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://lucdn.letsupgrade.net/Lets_Upgrade_Community_lest_4736e771d3_eaab2172aa.webp"
                      className="width-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section className="">
            <div
              className="container hero-block"
              style={{marginTop: "0rem !important"}}
            >
              <div className="columns is-centered py-6 px-5">
                <div className="column is-6 has-text-centered">
                  <div className="title is-size-3-mobile is-size-3">
                    Where your fellow friend's work ?
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Slider />
          <div className="container">
            <div className="columns is-centered py-6 px-5">
              <div className="column is-6 has-text-centered">
                <div className="subtitle has-text-centered has-text-grey-dark has-text-weight-semibold">
                  Work Hard, Start Learning to get into these companies and
                  secure your DREAM JOB!
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container hero-block" style={{marginTop: "0rem !important"}}>
            <div className="columns is-centered py-6 px-5">
              <div className="column is-6 has-text-centered">
                <div className="title is-size-3-mobile is-2">
                  LetsUpgrade Achievements
                </div>
              </div>
            </div>
          </div>
          <div className="container hero-block" style={{marginTop: "0rem !important"}}>
            <div className="columns is-centered hero-section">
              <div className="column">
                <div className="columns  is-multiline px-5">
                  <div className="column   ">
                    <div className="card h-full is-clipped is-shadowless has-background-warning-light has-text-black has-radius-full ">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          22.8 Million
                          <div className="subtitle is-5 is-size-6-mobile">
                            Min Watched
                          </div>
                        </div>
                      </div>
                      <div className="is-half">
                        <img
                          src="https://lucdn.letsupgrade.net/Million_Min_Watched_7c8d4849d0.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card h-full is-clipped is-shadowless has-background-warning-light has-text-black has-radius-full ">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          518K+
                          <div className="subtitle is-5 is-size-6-mobile">
                            LetsUpgrade Members
                          </div>
                        </div>
                      </div>
                      <div className="is-half">
                        <img
                          src="https://lucdn.letsupgrade.net/New_mwmbers_1dcdc2f13b.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column   ">
                    <div className="card h-full is-clipped is-shadowless has-background-warning-light has-text-black has-radius-full ">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          40K+
                          <div className="subtitle is-5 is-size-6-mobile">
                            Monthly New members
                          </div>
                        </div>
                      </div>
                      <div className="is-half">
                        <img
                          src="https://lucdn.letsupgrade.net/Monthly_New_members_a41015bba5.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-mobile is-multiline px-5">
                  <div className="column is-half-mobile">
                    <div className="card h-full is-clipped is-shadowless has-background-red-light has-text-black has-radius-full is-fullheight">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          300+ Projects
                          <div className="subtitle is-5 is-size-6-mobile">
                            
                            Developed by LetsUpgraders
                          </div>
                        </div>
                      </div>
                      <div className="is-half">
                        <img
                          src="https://lucdn.letsupgrade.net/Projects_Developed_by_Lets_Upgraders_8045f34921.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-half-mobile">
                    <div className="card h-full is-clipped is-shadowless has-background-red-light has-text-black has-radius-full is-fullheight">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          ₹ 2+ Crores
                          <div className="subtitle is-5 is-size-6-mobile">
                            
                            of Placement Delivered
                          </div>
                        </div>
                      </div>
                      <div className="is-half">
                        <img
                          src="https://lucdn.letsupgrade.net/Community_to_get_Un_Stuck_f2ebac8d13.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-half-mobile px-5">
                  <div className="column">
                    <div className="card is-clipped is-shadowless has-background-link-light has-text-black has-radius-full w-full">
                      <div className="card-content py-6 px-5">
                        <div className="title is-3 is-size-4-mobile">
                          ₹ 2.6+ Crores
                          <span className="has-text-weight-normal is-size-6-mobile">
                            
                            in Money Saved for Students
                          </span>
                        </div>
                      </div>
                      <div className="is-half is-hidden-mobile">
                        <img
                          src="https://lucdn.letsupgrade.net/Crores_in_Money_Saved_for_Students_e03a00d236.webp"
                          loading="lazy"
                          width="170"
                          alt="posted in community"
                          className="community-card-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container is-centered">
            <div className="card body-graphics is-relative is-clipped is-shadowless has-background-black has-text-black has-radius-full w-full">
              <div className="card-content pr-5">
                <div className="columns is-vcentered py-6 is-gapless pl-5">
                  <div className="column is-half has-text-centered">
                    <div className="is-size-8 is-size-2-mobile has-text-white has-text-weight-bold">
                      <span>4.6 / 5</span>
                    </div>
                    <div className="center">
                      <a href="https://www.google.com/search?q=letsupgrade+address&amp;rlz=1C5GCEM_enIN925IN925&amp;oq=letsupgrade+address&amp;aqs=chrome..69i57j69i60l2.1902j0j7&amp;sourceid=chrome&amp;ie=UTF-8">
                        <span>
                          <img
                            src="https://lucdn.letsupgrade.net/google_ccc7e02e3e.png"
                            width="30"
                            alt=""
                            className="mr-3 mt-2"
                          />
                        </span>
                      </a>
                      <div className="rate is-disabled is-spaced">
                        <div className="rate-item set-on">
                          <span className="icon is-large">
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                        </div>
                        <div className="rate-item set-on">
                          <span className="icon is-large">
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                        </div>
                        <div className="rate-item set-on">
                          <span className="icon is-large">
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                        </div>
                        <div className="rate-item set-on">
                          <span className="icon is-large">
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                        </div>
                        <div className="rate-item set-half">
                          <span className="icon is-large">
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                          <span
                            className="icon is-half is-large"
                            style={{width:"59.99999999999994%" }}
                          >
                            <i className="fas fa-star fa-2x"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="mt-1 has-text-white">(5025+ Reviews)</span>
                  </div>
                  <div className="column is-half has-text-centered mb-5">
                    <div className="is-size-8 is-size-2-mobile has-text-white has-text-weight-bold">
                      <span>🚀</span>
                    </div>
                    <div className="center">
                      <div className="title is-3 has-text-white">
                        Learn. Build. Share. Grow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="hero">
                <div className="hero-body" style={{padding: "0rem 0rem"}}>
                  <Slider2/>
                </div>
              </section>
            </div>
          </div>
        </section>
        <div data-v-0c94d915=""></div>
      </div>
    </div>
  );
};

export default Home;
