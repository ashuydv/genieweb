import React from 'react'
import Slider2 from './Slider2'

const Reviews = () => {
  return (
    <div>
        <section className="section">
          <div className="container is-fluid is-centered">
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
    </div>
  )
}

export default Reviews