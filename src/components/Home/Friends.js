import React from 'react'
import Slider from './Slider'

const Friends = () => {
  return (
    <div>
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
          <Slider className="mx-2" />
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
    </div>
  )
}

export default Friends