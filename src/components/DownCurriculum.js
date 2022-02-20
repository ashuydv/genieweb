import React from "react";

const Curriculum = () => {
  return (
    <div>
      <section className="section" style={{ marginTop: "-50px" }}>
        <div className="container is-fluid is-centered">
          <div className="card dark body-graphics is-relative is-clipped is-shadowless has-background-black has-text-black has-radius-full">
            <div className="card-content">
              <div className="columns is-vcentered py-6 pl-0 pl-5">
                <div className="column is-6">
                  <div className="title has-text-white is-size-3-mobile">
                    Download Curriculum
                  </div>
                  <div className="subtitle has-text-grey-light is-size-6-mobile">
                    Best-in-class engaging live classes by Industry-leading
                    developers as faculty, case studies, assignments, and
                    projects
                  </div>
                </div>
                <div className="column has-text-centered has-text-left-mobile pl-2 pr-1">
                  <div
                    id="DownloadSYL"
                    className="button is-primary is-outlined is-rounded is-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                    <span>&nbsp; Download Curriculum</span>
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

export default Curriculum;
