import React from "react";
import './github.css'
import './github1.css'
import './github2.css'
import './github3.css'

const Github = () => {
  return (
    <div>
      
      <div className="position-relative js-header-wrapper ">
        <a
          href="#start-of-content"
          className="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content"
        >
          Skip to content
        </a>
        <span
          data-view-component="true"
          className="progress-pjax-loader js-pjax-loader-bar Progress position-fixed width-full"
        >
          <span
            style={{width: "0%"}}
            data-view-component="true"
            className="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"
          ></span>
        </span>

        <div id="unsupported-browser" className="unsupported-browser" hidden="">
          <div className="container-lg p-responsive clearfix d-flex flex-items-center py-2">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-alert mr-2 hide-sm color-fg-subtle"
            >
              <path
                fillRule="evenodd"
                d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
              ></path>
            </svg>
            <div className="d-flex flex-auto flex-column flex-md-row">
              <div className="flex-auto min-width-0 mr-2" style={{paddingTop: "1px"}}>
                <span>GitHub no longer supports this web browser.</span>
                <a href="https://docs.github.com/articles/supported-browsers">
                  Learn more about the browsers we support.
                </a>
              </div>
            </div>
          </div>
        </div>

        <header
          className="Header-old header-logged-out js-details-container Details position-relative f4 py-2"
          role="banner"
        >
          <div className="container-xl d-lg-flex flex-items-center p-responsive">
            <div className="d-flex flex-justify-between flex-items-center">
              <a
                className="mr-4 color-fg-inherit"
                href="https://github.com/"
                aria-label="Homepage"
                data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark"
              >
                <svg
                  height="32"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="32"
                  data-view-component="true"
                  className="octicon octicon-mark-github"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>

              <div className="d-lg-none css-truncate css-truncate-target width-fit p-2"></div>

              <div className="d-flex flex-items-center">
                <a
                  href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F&amp;source=header-home"
                  className="d-inline-block d-lg-none f5 no-underline border color-border-default rounded-2 px-2 py-1 mr-3 mr-sm-5 color-fg-inherit"
                  data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="520d87e8f83281e6946b192f0f840552721c7fcba9b9c36d802e898a816314e2"
                >
                  Sign&nbsp;up
                </a>

                <button
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  type="button"
                  data-view-component="true"
                  className="js-details-target btn-link d-lg-none mt-1 color-fg-inherit"
                >
                  {" "}
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    className="octicon octicon-three-bars"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
              <div className="d-flex d-lg-none flex-justify-end border-bottom color-bg-subtle p-3">
                <button
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  type="button"
                  data-view-component="true"
                  className="js-details-target btn-link"
                >
                  {" "}
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    width="24"
                    data-view-component="true"
                    className="octicon octicon-x color-fg-muted"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                </button>
              </div>

              <nav className="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
                <ul className="d-lg-flex list-style-none">
                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <details className="HeaderMenu-details details-overlay details-reset width-full">
                      <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                        Why GitHub?
                        <svg
                          x="0"
                          y="0"
                          viewBox="0 0 14 8"
                          xmlSpace="preserve"
                          fill="none"
                          className="icon-chevon-down-mktg position-absolute position-lg-relative"
                        >
                          <path d="M1,1l6.2,6L13,1"></path>
                        </svg>
                      </summary>
                      <div className="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                        <ul className="list-style-none f5 pb-1">
                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Features","label":"ref_page:/;ref_cta:Features;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="7969a5372033676476b8c49dbe3dd28b77562098138c53fa4115c49f8d9cde48"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Features","label":"ref_page:/;ref_cta:Features;"}'
                              href="/features"
                            >
                              Features
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Mobile","label":"ref_page:/;ref_cta:Mobile;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="617ab579a6d1534ef924749e484b068cf70be88381d8e6999ae040b2f16dbb26"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Mobile","label":"ref_page:/;ref_cta:Mobile;"}'
                              href="/mobile"
                            >
                              Mobile
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Actions","label":"ref_page:/;ref_cta:Actions;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="a8e42279edde1dc88f5716e161f431d8c66fa5ccfd9ad65f993f9d45daee9820"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Actions","label":"ref_page:/;ref_cta:Actions;"}'
                              href="/features/actions"
                            >
                              Actions
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Codespaces","label":"ref_page:/;ref_cta:Codespaces;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="0eb921d14ada22704e31ea70d4cec10f70da89bf0dc434cf9c1941514311d986"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Codespaces","label":"ref_page:/;ref_cta:Codespaces;"}'
                              href="/features/codespaces"
                            >
                              Codespaces
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Packages","label":"ref_page:/;ref_cta:Packages;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="cc6eefdd06449fbc6ba4c06bde0661b06ed401a6338fadcff3d5de252e4414c7"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Packages","label":"ref_page:/;ref_cta:Packages;"}'
                              href="/features/packages"
                            >
                              Packages
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Security","label":"ref_page:/;ref_cta:Security;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="201bcb1cc97ab711f97280d632bfc3503cf182a6dd1351706b190a97826acbe2"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Security","label":"ref_page:/;ref_cta:Security;"}'
                              href="/features/security"
                            >
                              Security
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Code review","label":"ref_page:/;ref_cta:Code review;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="9b6d8bebf7b997bf7dae8cc4ab80a8fa834550efa4d7992faf03cf7e5f793d20"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Code review","label":"ref_page:/;ref_cta:Code review;"}'
                              href="/features/code-review"
                            >
                              Code review
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Issues","label":"ref_page:/;ref_cta:Issues;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="fe354bee4dc4182a043580cf9165cb0bcea836b9f25739ce5e9b75ae2e975f09"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Issues","label":"ref_page:/;ref_cta:Issues;"}'
                              href="/features/issues"
                            >
                              Issues
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Integrations","label":"ref_page:/;ref_cta:Integrations;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="99eb5059948c3f1826180e50d09825b3782c835d4a628ebb0d093394674bb4e0"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Integrations","label":"ref_page:/;ref_cta:Integrations;"}'
                              href="/features/integrations"
                            >
                              Integrations
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold border-top pt-4 pb-2 mt-3"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to GitHub Sponsors","label":"ref_page:/;ref_cta:GitHub Sponsors;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="88e87ea49982aedef0e86a95be30c8c1f3010865e59312719eb1eb3630d10b27"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to GitHub Sponsors","label":"ref_page:/;ref_cta:GitHub Sponsors;"}'
                              href="/sponsors"
                            >
                              GitHub Sponsors
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Customer stories","label":"ref_page:/;ref_cta:Customer stories;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="1d8024f6b6b006d21ae41dcda6376f5a2c2718096e1bf369b73b8e4a93caf511"
                              data-analytics-event='{"category":"Header dropdown (logged out), Why GitHub?","action":"click to go to Customer stories","label":"ref_page:/;ref_cta:Customer stories;"}'
                              href="/customer-stories"
                            >
                              Customer stories
                            </a>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </li>

                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <a
                      className="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"
                      data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header menu top item (logged out)","action":"click to go to Team","label":"ref_page:/;ref_cta:Team;","originating_url":"https://github.com/","user_id":null}}'
                      data-hydro-click-hmac="cc4068dda3c4e8431b45bf8f121d71609680ded1e823f5afb9af23a7ba2a9b5d"
                      data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Team","label":"ref_page:/;ref_cta:Team;"}'
                      href="/team"
                    >
                      Team
                    </a>
                  </li>

                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <a
                      className="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"
                      data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header menu top item (logged out)","action":"click to go to Enterprise","label":"ref_page:/;ref_cta:Enterprise;","originating_url":"https://github.com/","user_id":null}}'
                      data-hydro-click-hmac="e3ab8f6c150e3d86cee7f0d7caac04134a2a0c3d0ba68e23ca9e58a4963b6a8a"
                      data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Enterprise","label":"ref_page:/;ref_cta:Enterprise;"}'
                      href="/enterprise"
                    >
                      Enterprise
                    </a>
                  </li>

                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <details className="HeaderMenu-details details-overlay details-reset width-full">
                      <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                        Explore
                        <svg
                          x="0"
                          y="0"
                          viewBox="0 0 14 8"
                          xmlSpace="preserve"
                          fill="none"
                          className="icon-chevon-down-mktg position-absolute position-lg-relative"
                        >
                          <path d="M1,1l6.2,6L13,1"></path>
                        </svg>
                      </summary>
                      <div className="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                        <ul className="list-style-none f5 pb-1">
                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Explore GitHub","label":"ref_page:/;ref_cta:Explore GitHub;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="ed59ff14473d9dd5771832dc67884b1d1908eabb0df09ca07c03affb0492cec4"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Explore GitHub","label":"ref_page:/;ref_cta:Explore GitHub;"}'
                              href="/explore"
                            >
                              Explore GitHub
                            </a>
                          </li>

                          <li className="color-fg-muted text-normal f6 text-mono mb-1 border-top pt-3 mt-3 mb-1">
                            Learn and contribute
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Topics","label":"ref_page:/;ref_cta:Topics;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="e1f27c7cb6c520706f71209a3c83418c10ceb2248878062973098c2be4a9eef7"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Topics","label":"ref_page:/;ref_cta:Topics;"}'
                              href="/topics"
                            >
                              Topics
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Collections","label":"ref_page:/;ref_cta:Collections;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="3f66c44b93c10d7f0b41f3db25d7706330448506c900f9e896af851a8b2f25c5"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Collections","label":"ref_page:/;ref_cta:Collections;"}'
                              href="/collections"
                            >
                              Collections
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Trending","label":"ref_page:/;ref_cta:Trending;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="1fb8d24b3f56e88b54b3960d9b891606390c2cdd7c63eda8e31c1741c1b0c931"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Trending","label":"ref_page:/;ref_cta:Trending;"}'
                              href="/trending"
                            >
                              Trending
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Learning Lab","label":"ref_page:/;ref_cta:Learning Lab;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="9d9f042e23fb3e831c67dda8dc1d0c4aad4ba628176442a10d17517d910c3f0d"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Learning Lab","label":"ref_page:/;ref_cta:Learning Lab;"}'
                              href="https://lab.github.com/"
                            >
                              Learning Lab
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Open source guides","label":"ref_page:/;ref_cta:Open source guides;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="63a60c2891e7ded2df381a7bdafe20b7e789ee890f0598f73c1e7ae9b4a5387f"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Open source guides","label":"ref_page:/;ref_cta:Open source guides;"}'
                              href="https://opensource.guide"
                            >
                              Open source guides
                            </a>
                          </li>

                          <li className="color-fg-muted text-normal f6 text-mono mb-1 border-top pt-3 mt-3 mb-1">
                            Connect with others
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to The ReadME Project","label":"ref_page:/;ref_cta:The ReadME Project;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="0dbadc0878f0051251fa5b1d0b941b04a1c547682c0f76fcd3d62bf449d2a175"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to The ReadME Project","label":"ref_page:/;ref_cta:The ReadME Project;"}'
                              href="/readme"
                            >
                              The ReadME Project
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Events","label":"ref_page:/;ref_cta:Events;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="b69257fa8bb1c063a52b9a725b4213f742a450482ab5047c49377ee5fa7d5585"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Events","label":"ref_page:/;ref_cta:Events;"}'
                              href="/events"
                            >
                              Events
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to Community forum","label":"ref_page:/;ref_cta:Community forum;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="0655882eb3c6224bbd9edfdcc29857f2230bccd5a85d33660b8e03a58de8542f"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to Community forum","label":"ref_page:/;ref_cta:Community forum;"}'
                              href="https://github.community"
                            >
                              Community forum
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to GitHub Education","label":"ref_page:/;ref_cta:GitHub Education;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="1d91d024a0c0cb84a20641642a3c2f2b07b7dca71b48591107ef5c87c1ca91b1"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to GitHub Education","label":"ref_page:/;ref_cta:GitHub Education;"}'
                              href="https://education.github.com"
                            >
                              GitHub Education
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Explore","action":"click to go to GitHub Stars program","label":"ref_page:/;ref_cta:GitHub Stars program;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="d639b27e2ff669499358914f79afd5e3489fb00632376c1f7f223747e1cb726c"
                              data-analytics-event='{"category":"Header dropdown (logged out), Explore","action":"click to go to GitHub Stars program","label":"ref_page:/;ref_cta:GitHub Stars program;"}'
                              href="https://stars.github.com"
                            >
                              GitHub Stars program
                            </a>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </li>

                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <a
                      className="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block"
                      data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header menu top item (logged out)","action":"click to go to Marketplace","label":"ref_page:/;ref_cta:Marketplace;","originating_url":"https://github.com/","user_id":null}}'
                      data-hydro-click-hmac="1e7770bb39f3991b2cd42ecae6d0d235ad442b8aef2020b154fc2dea2c1e6de1"
                      data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Marketplace","label":"ref_page:/;ref_cta:Marketplace;"}'
                      href="/marketplace"
                    >
                      Marketplace
                    </a>
                  </li>

                  <li className="mr-0 mr-lg-3 position-relative flex-wrap flex-justify-between flex-items-center border-bottom border-lg-bottom-0 d-block d-lg-flex flex-lg-nowrap flex-lg-items-center">
                    <details className="HeaderMenu-details details-overlay details-reset width-full">
                      <summary className="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                        Pricing
                        <svg
                          x="0"
                          y="0"
                          viewBox="0 0 14 8"
                          xmlSpace="preserve"
                          fill="none"
                          className="icon-chevon-down-mktg position-absolute position-lg-relative"
                        >
                          <path d="M1,1l6.2,6L13,1"></path>
                        </svg>
                      </summary>
                      <div className="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                        <ul className="list-style-none f5 pb-1">
                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Pricing","action":"click to go to Plans","label":"ref_page:/;ref_cta:Plans;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="7fb29addb82634e66076b39eb05af10c85777a4c2b054c91bf557830bb34cf3f"
                              data-analytics-event='{"category":"Header dropdown (logged out), Pricing","action":"click to go to Plans","label":"ref_page:/;ref_cta:Plans;"}'
                              href="/pricing"
                            >
                              Plans
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Pricing","action":"click to go to Compare plans","label":"ref_page:/;ref_cta:Compare plans;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="8029ec71f59cb8f037313be4f74230fbc6285977f5a640a0912fcaa55cd76cfa"
                              data-analytics-event='{"category":"Header dropdown (logged out), Pricing","action":"click to go to Compare plans","label":"ref_page:/;ref_cta:Compare plans;"}'
                              href="/pricing#compare-features"
                            >
                              Compare plans
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--secondary py-2"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Pricing","action":"click to go to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="59254250e20d071ed8d6e2cf8814972d9547a51bcb6afff5dbe4697d4bc4c2e3"
                              data-analytics-event='{"category":"Header dropdown (logged out), Pricing","action":"click to go to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;"}'
                              href="https://github.com/enterprise/contact"
                            >
                              Contact Sales
                            </a>
                          </li>

                          <li>
                            <a
                              className="lh-condensed-ultra d-block no-underline position-relative Link--primary text-bold border-top pt-4 pb-2 mt-3"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header dropdown (logged out), Pricing","action":"click to go to Education","label":"ref_page:/;ref_cta:Education;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="23ee5b3a3f9a290da6de8f0509a8a17a5b32f9e365784c0a1f2918cb67899b85"
                              data-analytics-event='{"category":"Header dropdown (logged out), Pricing","action":"click to go to Education","label":"ref_page:/;ref_cta:Education;"}'
                              href="https://education.github.com"
                            >
                              Education
                            </a>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </li>
                </ul>
              </nav>

              <div className="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
                <div className="d-lg-flex min-width-0 mb-3 mb-lg-0">
                  <div className="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 js-jump-to">
                    <div className="position-relative">
                      <form
                        className="js-site-search-form"
                        role="search"
                        aria-label="Site"
                        data-unscoped-search-url="/search"
                        action="/search"
                        acceptCharset="UTF-8"
                        method="get"
                      >
                        <label className="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center">
                          <input
                            type="text"
                            className="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus"
                            data-hotkey="s,/"
                            name="q"
                            data-test-selector="nav-search-input"
                            placeholder="Search GitHub"
                            data-unscoped-placeholder="Search GitHub"
                            data-scoped-placeholder="Search"
                            autoCapitalize="off"
                            role="combobox"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            aria-autocomplete="list"
                            aria-controls="jump-to-results"
                            aria-label="Search GitHub"
                            data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
                            spellCheck="false"
                            autoComplete="off"
                          />

                          <input
                            type="hidden"
                            data-csrf="true"
                            className="js-data-jump-to-suggestions-path-csrf"
                            value="52xqQ9s5DpcSUYfCe6MrPQOJ3OIDKLAtXeB1jNT64FOsMODcHuWDjPgB5LOzcZrS4B9dcoHVWxk72UZ1Q6VesQ=="
                          />
                          <input
                            type="hidden"
                            className="js-site-search-type-field"
                            name="type"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="20"
                            aria-hidden="true"
                            className="mr-1 header-search-key-slash"
                          >
                            <path
                              fill="none"
                              stroke="#979A9C"
                              opacity=".4"
                              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                            ></path>
                            <path
                              fill="#979A9C"
                              d="M11.8 6L8 15.1h-.9L10.8 6h1z"
                            ></path>
                          </svg>

                          <div className="Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none">
                            <ul className="d-none js-jump-to-suggestions-template-container">
                              <li
                                className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion"
                                role="option"
                              >
                                <a
                                  tabIndex="-1"
                                  className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2"
                                  href=""
                                  data-item-type="suggestion"
                                >
                                  <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                    <svg
                                      title="Repository"
                                      aria-label="Repository"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Project"
                                      aria-label="Project"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Search"
                                      aria-label="Search"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                                      ></path>
                                    </svg>
                                  </div>

                                  <img
                                    className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none"
                                    alt=""
                                    aria-label="Team"
                                    src=""
                                    width="28"
                                    height="28"
                                  />

                                  <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target"></div>

                                  <div className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                    <span
                                      className="js-jump-to-badge-search-text-default d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      Search
                                    </span>
                                    <span
                                      className="js-jump-to-badge-search-text-global d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      All GitHub
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="d-inline-block ml-1 v-align-middle"
                                    >
                                      ↵
                                    </span>
                                  </div>

                                  <div
                                    aria-hidden="true"
                                    className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump"
                                  >
                                    Jump to
                                    <span className="d-inline-block ml-1 v-align-middle">
                                      ↵
                                    </span>
                                  </div>
                                </a>
                              </li>
                            </ul>

                            <ul className="d-none js-jump-to-no-results-template-container">
                              <li className="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
                                <span className="color-fg-muted">
                                  No suggested jump to results
                                </span>
                              </li>
                            </ul>

                            <ul
                              id="jump-to-results"
                              role="listbox"
                              className="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container js-active-navigation-container"
                            >
                              <li
                                className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none"
                                role="option"
                              >
                                <a
                                  tabIndex="-1"
                                  className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2"
                                  href=""
                                  data-item-type="scoped_search"
                                >
                                  <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                    <svg
                                      title="Repository"
                                      aria-label="Repository"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Project"
                                      aria-label="Project"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Search"
                                      aria-label="Search"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                                      ></path>
                                    </svg>
                                  </div>

                                  <img
                                    className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none"
                                    alt=""
                                    aria-label="Team"
                                    src=""
                                    width="28"
                                    height="28"
                                  />

                                  <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target"></div>

                                  <div className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                    <span
                                      className="js-jump-to-badge-search-text-default d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      Search
                                    </span>
                                    <span
                                      className="js-jump-to-badge-search-text-global d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      All GitHub
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="d-inline-block ml-1 v-align-middle"
                                    >
                                      ↵
                                    </span>
                                  </div>

                                  <div
                                    aria-hidden="true"
                                    className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump"
                                  >
                                    Jump to
                                    <span className="d-inline-block ml-1 v-align-middle">
                                      ↵
                                    </span>
                                  </div>
                                </a>
                              </li>

                              <li
                                className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-owner-scoped-search d-none"
                                role="option"
                              >
                                <a
                                  tabIndex="-1"
                                  className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2"
                                  href=""
                                  data-item-type="owner_scoped_search"
                                >
                                  <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                    <svg
                                      title="Repository"
                                      aria-label="Repository"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Project"
                                      aria-label="Project"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Search"
                                      aria-label="Search"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                                      ></path>
                                    </svg>
                                  </div>

                                  <img
                                    className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none"
                                    alt=""
                                    aria-label="Team"
                                    src=""
                                    width="28"
                                    height="28"
                                  />

                                  <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target"></div>

                                  <div className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                    <span
                                      className="js-jump-to-badge-search-text-default d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      Search
                                    </span>
                                    <span
                                      className="js-jump-to-badge-search-text-global d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      All GitHub
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="d-inline-block ml-1 v-align-middle"
                                    >
                                      ↵
                                    </span>
                                  </div>

                                  <div
                                    aria-hidden="true"
                                    className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump"
                                  >
                                    Jump to
                                    <span className="d-inline-block ml-1 v-align-middle">
                                      ↵
                                    </span>
                                  </div>
                                </a>
                              </li>

                              <li
                                className="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none"
                                role="option"
                              >
                                <a
                                  tabIndex="-1"
                                  className="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2"
                                  href=""
                                  data-item-type="global_search"
                                >
                                  <div className="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                                    <svg
                                      title="Repository"
                                      aria-label="Repository"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-repo js-jump-to-octicon-repo d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Project"
                                      aria-label="Project"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-project js-jump-to-octicon-project d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                                      ></path>
                                    </svg>
                                    <svg
                                      title="Search"
                                      aria-label="Search"
                                      role="img"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      version="1.1"
                                      width="16"
                                      data-view-component="true"
                                      className="octicon octicon-search js-jump-to-octicon-search d-none flex-shrink-0"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                                      ></path>
                                    </svg>
                                  </div>

                                  <img
                                    className="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none"
                                    alt=""
                                    aria-label="Team"
                                    src=""
                                    width="28"
                                    height="28"
                                  />

                                  <div className="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target"></div>

                                  <div className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none js-jump-to-badge-search">
                                    <span
                                      className="js-jump-to-badge-search-text-default d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      Search
                                    </span>
                                    <span
                                      className="js-jump-to-badge-search-text-global d-none"
                                      aria-label="in all of GitHub"
                                    >
                                      All GitHub
                                    </span>
                                    <span
                                      aria-hidden="true"
                                      className="d-inline-block ml-1 v-align-middle"
                                    >
                                      ↵
                                    </span>
                                  </div>

                                  <div
                                    aria-hidden="true"
                                    className="border rounded-1 flex-shrink-0 color-bg-subtle px-1 color-fg-muted ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump"
                                  >
                                    Jump to
                                    <span className="d-inline-block ml-1 v-align-middle">
                                      ↵
                                    </span>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </label>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="position-relative mr-3 mb-4 mb-lg-0 d-inline-block">
                  <a
                    href="/login"
                    className="HeaderMenu-link flex-shrink-0 no-underline"
                    data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="cd4f672ed9a2fa51ea92c28de162e81edb2d11a2aad6884ec89a6d60b21b1cfb"
                    data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in"
                  >
                    Sign in
                  </a>
                </div>

                <a
                  href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F&amp;source=header-home"
                  className="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-default rounded px-2 py-1"
                  data-hydro-click='{"event_type":"authentication.click","payload":{"location_in_page":"site header menu","repository_id":null,"auth_type":"SIGN_UP","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="cd4f672ed9a2fa51ea92c28de162e81edb2d11a2aad6884ec89a6d60b21b1cfb"
                  data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up;ref_loc:header logged out"}'
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div id="start-of-content" className="show-on-focus"></div>

      <div data-pjax-replace="" id="js-flash-container">
        <template className="js-flash-template">
          <div className="flash flash-full  {{ className }}">
            <div className=" px-2">
              <button
                className="flash-close js-flash-close"
                type="button"
                aria-label="Dismiss this message"
              >
                <svg
                  aria-hidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="octicon octicon-x"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </template>
      </div>

      <include-fragment
        className="js-notification-shelf-include-fragment"
        data-base-src="https://github.com/notifications/beta/shelf"
      ></include-fragment>

      <div
        className="application-main "
        data-commit-hovercards-enabled=""
        data-discussion-hovercards-enabled=""
        data-issue-and-pr-hovercards-enabled=""
      >
        <main className="font-mktg">
          <div className="overflow-hidden">
            <div className="home-hero-container position-relative js-webgl-globe-data">
              <div className="home-hero position-absolute z-1 top-0 right-0 bottom-0 left-0 overflow-hidden">
                <div className="d-flex flex-column flex-justify-between mx-auto container-xl p-responsive height-full pb-md-9">
                  <div className="d-flex gutter gutter-spacious flex-column flex-lg-row flex-items-center height-full px-0 px-lg-3">
                    <div className="ml-md-n3 mr-md-3 col-12 col-lg-6 text-center text-md-left">
                      <h1 className="h1-mktg color-text-white mb-3 position-relative z-2">
                        {" "}
                        Where the world builds software{" "}
                      </h1>
                      <p className="f2-mktg text-normal text-gray-light-mktg mr-lg-n4 mb-4 position-relative z-2">
                        Millions of developers and companies build, ship, and
                        maintain their software on GitHub—the largest and most
                        advanced development platform in the world.
                      </p>
                      <form
                        className="mx-auto mx-md-0 col-5-max js-signup-form position-relative z-2"
                        autoComplete="off"
                        action="/signup"
                        acceptCharset="UTF-8"
                        method="get"
                      >
                        <div className="d-flex flex-column flex-sm-row flex-items-center">
                          <dl className="col-12 my-0 pb-2 pb-sm-0 pr-0 pr-sm-2 flex-auto">
                            <dt>
                              <label htmlFor="user_email" className="sr-only">
                                Email address
                              </label>
                            </dt>
                            <dd>
                              <input
                                className="form-control border-0 f4-mktg py-3 px-4 width-full"
                                style={{height: "3rem"}}
                                placeholder="Email address"
                                type="email"
                                name="user_email"
                                id="user_email"
                                autoComplete="off"
                                spellCheck="false"
                              />
                            </dd>
                          </dl>
                          <input
                            type="hidden"
                            name="source"
                            className="js-signup-source"
                            value="form-home-signup"
                            data-ga-label=";ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero launchpad;"
                          />
                          <button
                            className="btn-mktg width-full width-sm-auto btn-signup-mktg"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero launchpad","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="5c0466c1d3ebe3158e33f4ab81d8b38b623ce7c6c539c7afb64f77ce1c86d220"
                            data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:hero launchpad"}'
                            type="submit"
                          >
                            Sign up for GitHub
                          </button>
                        </div>
                      </form>
                      <div className="position-lg-absolute bottom-lg-8 left-lg-0 right-lg-0 mt-4 z-1 position-relative">
                        <div className="container-xl mx-auto px-lg-3">
                          <div
                            className="py-4"
                            style={{borderTop: "1px solid rgba(255,255,255,0.1)"}}
                          >
                            <div className="d-flex gutter-condensed gutter-md-spacious col-12 col-lg-8 flex-justify-between text-md-left">
                              <div className="col-6 col-sm-4 col-md-3">
                                <h2 className="f3-mktg text-mono color-text-white text-normal no-wrap">
                                  73<span className="text-white-fade">+</span>{" "}
                                  million
                                </h2>
                                <p className="m-0 text-mono text-white-fade f6-mktg">
                                  Developers
                                </p>
                              </div>
                              <div className="col-6 col-sm-4 col-md-3">
                                <h2 className="f3-mktg text-mono color-text-white text-normal no-wrap">
                                  4<span className="text-white-fade">+</span>{" "}
                                  million
                                </h2>
                                <p className="m-0 text-mono text-white-fade f6-mktg">
                                  Organizations
                                </p>
                              </div>
                              <div className="col-sm-4 col-md-3 d-none d-md-block">
                                <h2 className="f3-mktg text-mono color-text-white text-normal no-wrap">
                                  200<span className="text-white-fade">+</span>{" "}
                                  million
                                </h2>
                                <p className="m-0 text-mono text-white-fade f6-mktg">
                                  Repositories
                                </p>
                              </div>
                              <div className="col-3 d-none d-sm-block">
                                <h3 className="f3-mktg text-mono color-text-white text-normal no-wrap">
                                  84%
                                </h3>
                                <p className="m-0 text-mono text-white-fade f6-mktg">
                                  Fortune 100
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6 text-center text-md-left position-relative">
                      <div
                        className="home-globe-container home-globe-container-webgl"
                        data-feature="home_page_globe"
                        data-show-when-feature-enabled="true"
                        data-feature-hydro='{"event_type":"feature_flag_decision","payload":{"feature":"home_page_globe","originating_url":"https://github.com/","user_id":null}}'
                        data-feature-hydro-hmac="be0cbc7da2f32edf891ea5670441a984e859ce28aaba3fb91263d03f7c5a368d"
                      >
                        <div className="mx-auto width-full mt-n9 mt-lg-2 home-globe position-relative height-full js-webgl-globe">
                          <video
                            width="916"
                            height="918"
                            loop=""
                            muted=""
                            playsInline=""
                            preload="none"
                            className="home-globe-container-video js-globe-fallback-video "
                            hidden=""
                          >
                            <source
                              type="video/mp4; codecs=hevc,mp4a.40.2"
                              src="https://github.githubassets.com/images/modules/site/home/globe-900.hevc.mp4"
                            />
                            <source
                              type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                              src="https://github.githubassets.com/images/modules/site/home/globe-900.h264.mp4"
                            />
                          </video>
                          <video
                            loop=""
                            muted=""
                            playsInline=""
                            preload="none"
                            className="home-globe-container-video js-globe-fallback-video-small"
                            hidden=""
                          >
                            <source
                              type="video/mp4; codecs=hevc,mp4a.40.2"
                              src="https://github.githubassets.com/images/modules/site/home/globe-500.hevc.mp4"
                            />
                            <source
                              type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                              src="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4"
                            />
                          </video>
                          <img
                            srcSet="https://github.githubassets.com/images/modules/site/home/globe-700.jpg 700w,
                        https://github.githubassets.com/images/modules/site/home/globe.jpg 1400w"
                            sizes="(max-width: 700px) 70vw, 700px"
                            src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
                            alt="Planet earth with visualization of GitHub activity crossing the globe"
                            className="width-full height-auto js-globe-fallback-image"
                            loading="lazy"
                            decoding="async"
                            width="1238"
                            height="1404"
                            hidden=""
                          />
                          <canvas
                            width="1050"
                            height="525"
                            className="webgl-canvas js-globe-canvas cursor-pointer"
                            style={{display: "block", width: "840px", height: "420px"}}
                          ></canvas>
                        </div>
                      </div>

                      <div
                        className="home-globe-container"
                        data-feature="home_page_globe"
                        data-show-when-feature-enabled="false"
                        hidden=""
                      >
                        <div className="mx-auto width-full mt-n9 mt-lg-2 home-globe position-relative height-full">
                          <img
                            srcSet="https://github.githubassets.com/images/modules/site/home/globe-700.jpg 700w,
                        https://github.githubassets.com/images/modules/site/home/globe.jpg 1400w"
                            sizes="(max-width: 700px) 70vw, 700px"
                            src="https://github.githubassets.com/images/modules/site/home/globe.jpg"
                            alt="Planet earth with visualization of GitHub activity crossing the globe"
                            className="width-full height-auto js-globe-fallback-image"
                            loading="lazy"
                            decoding="async"
                            width="1238"
                            height="1404"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg"
                  alt="Glowing universe"
                  className="position-absolute home-hero-glow events-none z-1"
                />
                <video
                  loop=""
                  muted=""
                  playsInline=""
                  preload="none"
                  className="js-globe-aurora position-absolute top-0 left-0 right-0 bottom-0"
                  style={{margin: "auto", zIndex: "-1", minWidth: "100%", minHeight: "100%"}}
                  hidden=""
                >
                  <source
                    type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                    src="https://github.githubassets.com/images/modules/site/home/aurora.h264.mp4"
                  />
                </video>
              </div>

              <div
                className="position-absolute width-full color-bg-default"
                style={{bottom: "-4rem"}}
              >
                <div className="container-xl p-responsive">
                  <div className="d-flex flex-justify-center flex-lg-justify-end color-bg-default">
                    <div className="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none">
                      <picture>
                        <source
                          srcSet="https://github.githubassets.com/images/modules/site/home/astro-mona.webp"
                          type="image/webp"
                        />
                        <img
                          src="https://github.githubassets.com/images/modules/site/home/astro-mona.svg"
                          width="960"
                          height="967"
                          className="home-astro-mona width-full position-absolute bottom-0 height-auto"
                          alt="Mona looking at GitHub activity across the globe"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1680 40"
                className="position-absolute width-full z-1"
                style={{bottom: "-1px"}}
              >
                <path
                  d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
                  fill="#fff"
                ></path>
              </svg>

              <div
                className="data-info position-absolute top-0 left-0 rounded text-mono f6 py-3 pl-2 pr-5 z-3 js-globe-popup text-white d-block"
                style={{maxWidth: "450px", backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(10px)", transform: "translate(-62px, 1239px)"}}
              >
                <a
                  className="js-globe-popover-card no-underline d-flex flex-row flex-items-start"
                  href="https://github.com/Jibber-Inc/jibber-backend/pull/368"
                >
                  <div className="pr-2 pt-1 pl-2">
                    <img
                      src="https://github.githubassets.com/images/modules/site/home/globe/pull-request-icon.svg"
                      aria-hidden="true"
                      className="js-globe-popup-icon-pr"
                      loading="lazy"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/site/home/globe/north-star.svg"
                      aria-hidden="true"
                      className="js-globe-popup-icon-acv mt-n1 d-none"
                      width="24"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <div className="f4 color-text-white js-globe-popover-header">
                      #368 Jibber-Inc/jibber-backend
                    </div>
                    <div style={{color: "#959da5"}} className="js-globe-popover-body">
                      JavaScript
                      <span style={{color: "rgb(241, 224, 90)"}}> • </span>Opened
                      in Misiones, merged{" "}
                      <time-ago
                        datetime="2022-01-28T21:46:46.000Z"
                        title="Jan 29, 2022, 3:16 AM GMT+5:30"
                      >
                        9 hours ago
                      </time-ago>{" "}
                      in Seattle
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              className="mx-auto container-xl p-responsive py-8 py-md-9 overflow-hidden d-flex gutter gutter-spacious js-build-in-trigger"
              data-build-margin-bottom="20"
            >
              <div className="js-build-in-item build-in-scale-fade color-bg-default col-10-max mx-auto">
                <div className="d-flex position-relative rounded-2 box-shadow-card-border-mktg overflow-hidden">
                  <div className="col-5-max mx-auto mx-md-0">
                    <div
                      className="col-12 col-md-9 px-4 pl-md-7 pt-4 py-md-6 mb-md-0 position-relative z-1 text-center text-md-left"
                      style={{marginBottom: "25%", boxShadow: "0 0 50px 30px #fff"}}
                    >
                      <h2
                        className="h5-mktg mb-1 mx-auto mx-md-0"
                        style={{maxWidth: "310px"}}
                      >
                        <span className="text-gray-mktg">
                          Build like the best with GitHub Enterprise
                        </span>
                      </h2>
                      <p
                        className="f5-mktg text-gray-mktg mx-auto mx-md-0"
                        style={{maxWidth: "380px"}}
                      >
                        Take collaboration to the next level with security and
                        administrative features built for teams.
                      </p>
                      <div className="d-flex flex-column flex-sm-row flex-items-center flex-justify-center flex-md-justify-start">
                        <a
                          className="btn-mktg mb-3 mb-sm-0 mr-sm-2 btn-muted-mktg"
                          data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Start Enterprise Cloud trial","action":"click to set up Enterprise Cloud trial","label":"ref_page:/;ref_cta:Start a free trial;ref_loc:billboard launchpad","originating_url":"https://github.com/","user_id":null}}'
                          data-hydro-click-hmac="5ef5127918c32993a8a2cf3d45a949003797220e30cc85f34d5ab6c23003cf82"
                          data-analytics-event='{"category":"Start Enterprise Cloud trial","action":"click to set up Enterprise Cloud trial","label":"ref_page:/;ref_cta:Start a free trial;ref_loc:billboard launchpad"}'
                          href="/organizations/enterprise_plan?ref_cta=Start%2520a%2520free%2520trial&amp;ref_loc=billboard&amp;ref_page=%2F"
                          data-test-selector="start-trial-button"
                        >
                          Start a free trial
                        </a>
                        <a
                          className="btn-mktg btn-subtle-mktg"
                          data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Contact Sales","action":"click to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;ref_loc:billboard launchpad;","originating_url":"https://github.com/","user_id":null}}'
                          data-hydro-click-hmac="8ed5616995021cec9a2de9fe5a8a53c5c079da72a95acfce3976f1171ebcb478"
                          data-analytics-event='{"category":"Contact Sales","action":"click to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;ref_loc:billboard launchpad;"}'
                          href="https://github.com/enterprise/contact?ref_page=/&amp;ref_cta=Contact%20Sales&amp;ref_loc=billboard%20launchpad"
                        >
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-8 position-absolute text-right position-relative height-full right-0">
                    <picture>
                      <source
                        srcSet="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.webp"
                        type="image/webp"
                      />
                      <img
                        className="width-full height-auto position-absolute right-0 bottom-0"
                        width="1376"
                        height="436"
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                        alt=""
                        src="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="position-relative pt-5 mt-5">
            <div
              className="position-absolute left-0 width-full height-full js-build-in-trigger"
              data-build-non-decorative="true"
              data-build-margin-bottom="100"
              data-build-threshold="0"
              style={{top: '-2rem'}}
            >
              <div className="mb-4 top-0 home-nav-outer js-build-in-item width-full z-3">
                <div className="home-nav width-full js-toggler-container">
                  <div
                    className="home-nav-bg position-fixed top-0 left-0 width-full height-full z-n1 color-bg-emphasis js-toggler-target-off"
                    style={{opacity: "0.8"}}
                  ></div>
                  <div className="px-md-4 py-2 color-bg-default">
                    <div className="home-nav-container mx-auto col-10-max d-flex flex-justify-between">
                      <button
                        type="button"
                        className="home-nav-trigger text-left js-toggler-target d-inline-block d-md-none py-2 px-3"
                        aria-label="Toggle page navigation"
                      >
                        <svg
                          className="octicon octicon-three-bars color-fg-default replaced color-fg-default"
                          viewBox="0 0 16 16"
                          height="24"
                        >
                          <path
                            clipRule="evenodd"
                            d="m1 2.75c0-.19891.07902-.38968.21967-.53033s.33142-.21967.53033-.21967h12.5c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21967-.5303.21967h-12.5c-.19891 0-.38968-.07902-.53033-.21967s-.21967-.33142-.21967-.53033zm0 5c0-.19891.07902-.38968.21967-.53033s.33142-.21967.53033-.21967h12.5c.1989 0 .3897.07902.5303.21967.1407.14065.2197.33142.2197.53033s-.079.38968-.2197.53033c-.1406.14065-.3314.21967-.5303.21967h-12.5c-.19891 0-.38968-.07902-.53033-.21967s-.21967-.33142-.21967-.53033zm.75 4.25c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303s.07902.3897.21967.5303c.14065.1407.33142.2197.53033.2197h12.5c.1989 0 .3897-.079.5303-.2197.1407-.1406.2197-.3314.2197-.5303s-.079-.3897-.2197-.5303c-.1406-.1407-.3314-.2197-.5303-.2197z"
                            fillRule="evenodd"
                          ></path>
                        </svg>

                        <svg
                          className="octicon octicon-x color-fg-default"
                          height="24"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <path
                            clipRule="evenodd"
                            d="m6.21967 6.21967c.29289-.29289.76777-.29289 1.06066 0l4.71967 4.71963 4.7197-4.71963c.2929-.29289.7677-.29289 1.0606 0s.2929.76777 0 1.06066l-4.7196 4.71967 4.7196 4.7197c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-4.7197-4.7196-4.71967 4.7196c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7677 0-1.0606l4.71963-4.7197-4.71963-4.71967c-.29289-.29289-.29289-.76777 0-1.06066z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      <div className="home-nav-links-container d-flex flex-auto flex-md-items-center">
                        <nav
                          className="home-nav-links col-12 col-md-9 d-flex flex-auto flex-nowrap flex-justify-start flex-md-justify-between"
                          aria-label="GitHub homepage page navigation"
                        >
                          <a
                            href="#home-code"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor selected"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Code;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="2b6e1e1b19f3e2349a4f0363061130fede1240474bec9d9e450f57df99eca40a"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Code;ref_loc:navigation launchpad;"}'
                          >
                            Code
                          </a>

                          <a
                            href="#home-collaborate"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Collaborate;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="c0e6db6018b266dcdea80c10a3a242083e512c5a2309fe8f4b858594ad86d3be"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Collaborate;ref_loc:navigation launchpad;"}'
                          >
                            Collaborate
                          </a>

                          <a
                            href="#home-develop"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Develop;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="275e1b45cf172dcc8b9651f2bbf60bbf9e4a4fc23132e9d73b5192c7eac70b8d"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Develop;ref_loc:navigation launchpad;"}'
                          >
                            Develop
                          </a>

                          <a
                            href="#home-automate"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Automate;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="6b5e9bda9b5726ea408fc8bc5350a3c829e962fcafa227a5f133a9d802bbecba"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Automate;ref_loc:navigation launchpad;"}'
                          >
                            Automate
                          </a>

                          <a
                            href="#home-secure"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Secure;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="fb26876a95b2c0a5cae686a61b29706363e6288b4865b174098da828e33944ed"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Secure;ref_loc:navigation launchpad;"}'
                          >
                            Secure
                          </a>

                          <a
                            href="#home-community"
                            className="home-nav-item js-toggler-target-off text-mono f4-mktg color-fg-muted no-underline js-scrollnav-item js-smoothscroll-anchor"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to scroll to content","label":"ref_cta:Community;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="407c4764529c6a2f7c07e738ef0e81e6deccd053fceba9471b66f2138e91da88"
                            data-analytics-event='{"category":"Home","action":"click to scroll to content","label":"ref_cta:Community;ref_loc:navigation launchpad;"}'
                          >
                            Community
                          </a>
                        </nav>

                        <div className="home-nav-hidden rounded-2 text-right flex-shrink-0">
                          <a
                            className="btn-mktg px-3 px-lg-4 width-full width-md-auto btn-block btn-small-mktg btn-signup-mktg"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:navigation launchpad;","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="90b2ba434d0dfabc383eca6745e42250f0e764b171ea50be0297364c50f07e5c"
                            data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:navigation launchpad;"}'
                            href="/signup?ref_cta=Sign+up&amp;ref_loc=navigation+launchpad&amp;ref_page=%2F"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <meta
                property="page-title"
                content="GitHub: Where the world builds software"
              />
              <meta
                property="page-description"
                content="GitHub is where over 73 million developers shape the future of software, together. Contribute to the open source community, manage your Git repositories, review code like a pro, track bugs and features, power your CI/CD and DevOps workflows, and secure code before you commit it."
              />

              <div
                className="position-relative z-2 mx-auto box-shadow-default-mktg wide-block js-section"
                id="home-code"
                data-color-mode="dark"
                data-light-theme="light"
                data-dark-theme="dark"
              >
                <div className="container-xl p-responsive">
                  <div className="d-flex flex-column gutter gutter-spacious">
                    <div className="col-12 col-sm-10 offset-sm-1">
                      <div className="col-6-max">
                        <h2 className="h2-mktg color-fg-default mb-6 mb-md-8 text-gradient-mint-blue-dark">
                          Give your code a home in the cloud
                        </h2>
                      </div>
                    </div>

                    <div className="col-11 col-sm-10 offset-1">
                      <ul className="home-git-log-dark d-flex gutter gutter-spacious flex-column list-style-none pb-5">
                        <li className="col-12 col-md-9 col-lg-6 mt-n3 pb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="28"
                            viewBox="0 0 28 20"
                            width="28"
                            aria-hidden="true"
                            className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                          >
                            <circle
                              cx="14"
                              cy="10"
                              fill="#fff"
                              r="5"
                              stroke="#d0d6df"
                              strokeWidth="2"
                            ></circle>
                          </svg>

                          <h3 className="f2-mktg text-gray-light-mktg text-semibold mb-3">
                            Record or rewind any change to your code to keep you
                            and your team in sync.{" "}
                            <span className="color-fg-default">
                              Host it all for free with unlimited public and
                              private repositories.
                            </span>
                          </h3>
                          <a
                            className="link-mktg text-semibold color-fg-default py-1 f4-mktg link-emphasis-mktg"
                            href="/signup"
                            data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:code launchpad","originating_url":"https://github.com/","user_id":null}}'
                            data-hydro-click-hmac="27e89dfe3a82ce0ed8c8a0e59e285b098a21d46dcff1b7175af9056efd5e82e8"
                            data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:code launchpad"}'
                          >
                            Sign up for GitHub{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="octicon arrow-symbol-mktg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                fill="currentColor"
                                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                              ></path>
                              <path
                                className="octicon-chevrow-stem"
                                stroke="currentColor"
                                d="M1.75 8H11"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </a>
                        </li>

                        <li
                          className="col-12 d-flex flex-items-center position-relative f5-mktg text-gray-light-mktg py-2 unselectable"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 28 32"
                            aria-hidden="true"
                            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                            height="32"
                            width="28"
                          >
                            <g fill="#fff">
                              <path d="m17.8 24.4h-11c-.6 0-1.1-.5-1.1-1.1v-1.3c0-.8.6-1.4 1.4-1.4h7.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7.3c-.5 0-.9.1-1.4.3v-12.3c0-.6.5-1.1 1.1-1.1h13.6v6.9c0 .5.4.9.9.9s.9-.4.9-.9v-7.8c0-.5-.4-.9-.9-.9h-14.4c-1.6 0-2.9 1.3-2.9 2.9v16.5c0 1.6 1.3 2.9 2.9 2.9h11c.5 0 .9-.4.9-.9s-.5-.9-.9-.9z"></path>
                              <path d="m25.4 19.2-3.5-3.8c-.3-.4-.9-.4-1.3 0l-3.5 3.8c-.2.2-.2.4-.2.6s.1.4.3.6.4.3.6.2c.2 0 .4-.1.6-.3l2-2.1v9c0 .5.4.9.9.9s.9-.4.9-.9v-9l2 2.1c.2.2.4.3.6.3s.5-.1.6-.2c.2-.2.3-.4.3-.6-.1-.3-.2-.5-.3-.6z"></path>
                            </g>
                          </svg>

                          <span className="text-truncate">
                            <strong className="text-bold color-fg-default">
                              jasonetco
                            </strong>{" "}
                            added some commits 8 minutes ago
                          </span>
                        </li>

                        <li
                          className="col-12 d-flex flex-items-center position-relative f6-mktg text-mono text-gray-light-mktg py-2 unselectable"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="22"
                            width="28"
                            aria-hidden="true"
                            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                          >
                            <path
                              d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                              fill="#465061"
                            ></path>
                            <circle
                              cx="14"
                              cy="11"
                              fill="#041027"
                              r="5"
                              stroke="#465061"
                              strokeWidth="2"
                            ></circle>
                          </svg>

                          <img
                            src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                            className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                            alt="@jasonetco"
                            decoding="async"
                          />
                          <span className="opacity-4 text-truncate">
                            Updated README.md
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-12 position-relative">
                      <div className="home-repo-comp position-relative py-3">
                        <div className="position-relative z-2 js-build-in build-in-scale-fade js-build-in-trigger js-type-in-trigger">
                          <div
                            className="home-repo-comp-browser rounded-2 box-shadow-default-mktg position-absolute z-1 top-0 left-0 right-0 box-shadow-active-border-light-mktg js-build-in-item"
                            style={{fontSize: "0"}}
                          >
                            <picture>
                              <source
                                srcSet="https://github.githubassets.com/images/modules/site/home/repo-browser.webp"
                                type="image/webp"
                              />
                              <img
                                src="https://github.githubassets.com/images/modules/site/home/repo-browser.png"
                                className="width-full height-auto"
                                width="2496"
                                height="1480"
                                alt="The resulting GitHub repository page from pushing"
                                decoding="async"
                              />
                            </picture>
                          </div>

                          <div className="home-repo-editor rounded-2 position-relative mr-n1 ml-n1 mr-md-0 ml-md-0 overflow-hidden js-build-in-item">
                            <div className="d-flex position-absolute top-0 right-0 bottom-0 left-0 home-repo-editor-ui js-build-in-item">
                              <div className="col-3 d-none d-lg-block">
                                <div className="d-flex home-repo-editor-filetree height-full flex-column py-2">
                                  <div className="d-flex py-1 px-3">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/folder.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>octocat-classifier</div>
                                  </div>

                                  <div className="d-flex py-1 px-4">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/folder.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>assets</div>
                                  </div>

                                  <div className="opacity-4 d-flex py-1 px-4">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/folder.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>tests</div>
                                  </div>

                                  <div className="d-flex py-1 px-3">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>LICENSE</div>
                                  </div>

                                  <div className="d-flex py-1 px-3">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>README.md</div>
                                  </div>

                                  <div className="d-flex py-1 px-3">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>index.js</div>
                                  </div>

                                  <div className="d-flex py-1 px-3">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>package.json</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-9 position-relative">
                                <div className="d-flex home-repo-editor-tabs">
                                  <div className="home-repo-editor-tab--active color-text-white d-flex flex-items-center">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>README.md</div>
                                  </div>

                                  <div className="d-lg-none home-repo-editor-tab opacity-4 d-flex flex-items-center">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>app.js</div>
                                  </div>

                                  <div className="d-lg-none home-repo-editor-tab opacity-4 d-flex flex-items-center">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/file.svg"
                                      alt="File icon"
                                      className="mr-1"
                                      loading="lazy"
                                      decoding="async"
                                      width="16"
                                      height="16"
                                    />
                                    <div>index.html</div>
                                  </div>
                                </div>
                                <div className="home-repo-editor-file">
                                  <div className="d-flex opacity-4">
                                    <pre className="opacity-4 text-right color-text-white home-pre pre-line p-3">
                                      {" "}
                                      1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
                                      18 19 20 21 22 23 24 25 26 27 28 29 30
                                    </pre>
                                    <div className="flex-1">
                                      <pre className="pre-line color-text-white home-pre px-2 py-3">
                                        {" "}
                                        <span className="code-green">
                                          # Octocat Classifier :octopus: :cat:
                                          :mag:
                                        </span>
                                        <span className="code-pink">
                                          ![](https://img.shields.io/badge/build-passing-brightgreen)
                                          ![](https://img.shields.io/badge/coverage-90%25-green)
                                          ![](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)
                                        </span>
                                        As the name suggests, Octocat Classifier
                                        is used to determine whether a given
                                        image contains an Octocat. It is trained
                                        with images from the{" "}
                                        <span className="code-pink">
                                          [Octodex](1)
                                        </span>
                                        , images shared with{" "}
                                        <span className="code-pink">
                                          [#MyOctocat on Twitter](2)
                                        </span>
                                        , and{" "}
                                        <span className="code-pink">
                                          [photographs of laptops with :octocat:
                                          stickers on them]()
                                        </span>
                                        .
                                        <span className="code-green">
                                          ## Installation
                                        </span>
                                        ``` git clone
                                        https://github.com/jasonetco/octocat-classifier
                                        ```
                                      </pre>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="home-repo-editor-terminal p-3 position-absolute right-0 bottom-0 left-0"
                                  style={{borderBottomRightRadius: "0.375rem"}}
                                >
                                  <svg
                                    height="16"
                                    className="octicon octicon-x text-gray-light-mktg position-absolute right-3 top-3"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                                    ></path>
                                  </svg>
                                  <div
                                    className="terminal-mktg text-mono bg-gray-800-mktg home-pre rounded-2 js-type-in-item"
                                    data-color-mode="dark"
                                    data-light-theme="light"
                                    data-dark-theme="dark"
                                  >
                                    <div className="p-4" data-type-delay="800">
                                      <div className="">
                                        <strong className="code-pink">→</strong>
                                        <strong className="color-fg-success">
                                          ~/octocat-classifier
                                        </strong>

                                        <span
                                          className="js-type-letters"
                                          style={{visibility: "hidden"}}
                                        >
                                          $ gh repo create octocat-classifier
                                        </span>
                                      </div>

                                      <div
                                        className="js-type-row"
                                        style={{visibility: "hidden"}}
                                      >
                                        <span>
                                          <em>✓</em> Created repository
                                          jasonetco/octocat-classifier on GitHub
                                        </span>
                                      </div>

                                      <div
                                        className="js-type-row"
                                        style={{visibility: "hidden"}}
                                      >
                                        <span>
                                          <em>✓</em> Added remote{" "}
                                          <a href="https://github.com/jasonetco/octocat-classifier.git">
                                            https://github.com/jasonetco/octocat-classifier.git
                                          </a>
                                        </span>
                                      </div>

                                      <div
                                        className="js-type-row"
                                        style={{visibility: "hidden"}}
                                      >
                                        <span>&nbsp;</span>
                                      </div>

                                      <div
                                        className="js-type-row"
                                        style={{visibility: "hidden"}}
                                      >
                                        <strong className="code-pink">→</strong>
                                        <strong className="color-fg-success">
                                          ~/octocat-classifier
                                        </strong>

                                        <span
                                          className="js-type-letters animation-is-typing"
                                          style={{visibility: "hidden"}}
                                        >
                                          $ git push origin main
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            src="https://github.githubassets.com/images/modules/site/home/repo-editor-glow.svg"
                            className="position-absolute z-n1 js-build-in-item build-in-scale-fade"
                            style={{width: "117.31%", margin: "0 -8.65%", top: "50%", transform: "translateY(-50%)"}}
                            alt="Light glowing behind the editor"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-11 col-sm-10 offset-1">
                      <ul className="home-git-log-dark d-flex gutter gutter-spacious flex-column list-style-none pt-5 pb-8 pb-md-9">
                        <li
                          className="col-12 d-flex flex-items-center position-relative f6-mktg text-mono text-gray-light-mktg py-2 unselectable"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="22"
                            width="28"
                            aria-hidden="true"
                            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                          >
                            <path
                              d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                              fill="#465061"
                            ></path>
                            <circle
                              cx="14"
                              cy="11"
                              fill="#041027"
                              r="5"
                              stroke="#465061"
                              strokeWidth="2"
                            ></circle>
                          </svg>

                          <img
                            src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                            className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                            alt="@jasonetco"
                            loading="lazy"
                          />
                          <span className="opacity-4 text-truncate">
                            Support Octocats shared on Twitter
                          </span>
                        </li>

                        <li
                          className="col-12 d-flex flex-items-center position-relative f6-mktg text-mono text-gray-light-mktg py-2 unselectable"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="22"
                            width="28"
                            aria-hidden="true"
                            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                          >
                            <path
                              d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                              fill="#465061"
                            ></path>
                            <circle
                              cx="14"
                              cy="11"
                              fill="#041027"
                              r="5"
                              stroke="#465061"
                              strokeWidth="2"
                            ></circle>
                          </svg>

                          <img
                            src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                            className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                            alt="@jasonetco"
                            loading="lazy"
                          />
                          <span className="opacity-4 text-truncate">
                            Created index.js
                          </span>
                        </li>

                        <li className="col-12 col-md-9 col-lg-12">
                          <div className="d-flex flex-column flex-lg-row flex-lg-row-reverse flex-items-center gutter gutter-spacious my-4">
                            <div className="col-12 col-lg-6 py-5 js-build-in build-in-slideX-left">
                              <h2 className="h3-mktg color-fg-default mb-3 text-gradient-mint-blue-dark">
                                {" "}
                                Build on what's been built{" "}
                              </h2>
                              <h3 className="f2-mktg text-gray-light-mktg lh-condensed text-semibold mb-3">
                                <span className="color-fg-default">
                                  Write less code thanks to the world's largest
                                  software package registry.
                                </span>
                                Find the best community-approved projects to
                                accelerate your work, then share it with the
                                world with{" "}
                                <a
                                  className="text-gray-light-mktg text-underline"
                                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"npm","action":"click to npm site","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad","originating_url":"https://github.com/","user_id":null}}'
                                  data-hydro-click-hmac="d56ccf5f0c4910ab6469772418924e387ac32d33bd372f8db0ce6d4403872c2f"
                                  data-analytics-event='{"category":"npm","action":"click to npm site","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad"}'
                                  href="https://www.npmjs.com"
                                >
                                  npm
                                </a>{" "}
                                and GitHub Packages.
                              </h3>
                            </div>

                            <div className="col-12 col-lg-6" aria-hidden="true">
                              <div className="position-relative">
                                <div
                                  className="terminal-mktg text-mono package-registry bg-gray-800-mktg home-pre rounded-2 js-type-in"
                                  data-color-mode="dark"
                                  data-light-theme="light"
                                  data-dark-theme="dark"
                                >
                                  <div className="p-4">
                                    <div className="">
                                      <strong className="code-pink">→</strong>
                                      <strong className="color-fg-success">
                                        ~/octocat-classifier
                                      </strong>

                                      <span
                                        className="js-type-letters animation-is-typing"
                                        style={{visibility: "hidden"}}
                                      >
                                        $ npm install eslint
                                      </span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>+ eslint@7.8.1</span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>
                                        &nbsp;&nbsp;added 109 packages from 64
                                        contributors and audited 109 packages in
                                        3.491s
                                      </span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>&nbsp;</span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>
                                        9 packages are looking for funding
                                      </span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>
                                        &nbsp;&nbsp;run `npm fund` for details
                                      </span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>&nbsp;</span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <span>found 0 vulnerabilities</span>
                                    </div>

                                    <div
                                      className="js-type-row"
                                      style={{visibility: "hidden"}}
                                    >
                                      <strong className="code-pink">→</strong>
                                      <strong className="color-fg-success">
                                        ~/octocat-classifier
                                      </strong>

                                      <span
                                        className="js-type-letters"
                                        style={{visibility: "hidden"}}
                                      >
                                        ${" "}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <img
                                  src="https://github.githubassets.com/images/modules/site/home/repo-terminal-glow.svg"
                                  className="position-absolute z-n1"
                                  style={{width: "150%", margin: "0 -25%", top: "50%", transform: "translateY(-50%)"}}
                                  alt="Light glowing behind the editor"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>
                        </li>

                        <li
                          className="col-12 d-flex flex-items-center position-relative f6-mktg text-mono text-gray-light-mktg py-2 unselectable"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="22"
                            width="28"
                            aria-hidden="true"
                            className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                          >
                            <path
                              d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                              fill="#465061"
                            ></path>
                            <circle
                              cx="14"
                              cy="11"
                              fill="#041027"
                              r="5"
                              stroke="#465061"
                              strokeWidth="2"
                            ></circle>
                          </svg>

                          <img
                            src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                            className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                            alt="@jasonetco"
                            loading="lazy"
                          />
                          <span className="opacity-4 text-truncate">
                            Added package for javascript linting
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden width-full position-relative z-1">
                <div className="container-xl p-responsive mx-auto">
                  <div className="d-flex flex-column gutter gutter-spacious position-relative">
                    <div className="home-git-log-light col-12 offset-md-1 pt-5 pt-md-6">
                      <div
                        className="d-flex flex-column gutter gutter-spacious js-section"
                        id="home-collaborate"
                      >
                        <div className="home-branch-container position-relative f6-mktg text-mono text-gray-light-mktg z-1">
                          <div
                            className="d-flex flex-items-center py-1 home-git-log-terminal unselectable"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              height="26"
                              width="28"
                              className="flex-shrink-0 mr-3"
                            >
                              <path d="m0 0h28v26h-28z" fill="#fff"></path>
                              <g fill="#8392ad">
                                <path d="m11.25 13a.75.75 0 0 1 -.22.53l-2.75 2.75a.75.75 0 0 1 -1.06-1.06l2.22-2.22-2.22-2.22a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></path>
                                <path
                                  clipRule="evenodd"
                                  d="m2 5.75c0-.966.784-1.75 1.75-1.75h20.5c.966 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1 -1.75 1.75h-20.5a1.75 1.75 0 0 1 -1.75-1.75zm1.75-.25a.25.25 0 0 0 -.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-14.5a.25.25 0 0 0 -.25-.25z"
                                  fillRule="evenodd"
                                ></path>
                              </g>
                            </svg>
                            git checkout -b origin add-status-screens
                          </div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 110 142"
                            className="d-none d-md-block position-relative home-branch offset-n1"
                          >
                            <path
                              d="m1-8c0 75 108 75 108 150"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </svg>
                        </div>

                        <div className="home-git-log-light col-10 offset-1 pb-5 pb-md-6 pt-6 pt-md-0">
                          <div className="col-6-max">
                            <div className="mb-5 mb-md-6 mt-n3">
                              <div
                                className="d-flex flex-items-center position-relative z-1 unselectable"
                                aria-hidden="true"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="20"
                                  viewBox="0 0 28 20"
                                  width="28"
                                  className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                                >
                                  <circle
                                    cx="14"
                                    cy="10"
                                    fill="#fff"
                                    r="5"
                                    stroke="#d0d6df"
                                    strokeWidth="2"
                                  ></circle>
                                </svg>

                                <div className="d-inline-block border py-1 px-2 text-mono rounded-pill f6-mktg text-gray-mktg">
                                  <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    className="octicon octicon-git-branch mr-1"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
                                    ></path>
                                  </svg>
                                  origin/add-status-screens
                                </div>
                              </div>
                            </div>

                            <div
                              className="mb-3 d-flex flex-items-center"
                              aria-hidden="true"
                            >
                              <div className="mr-3">
                                <img
                                  className="float-left circle border unselectable"
                                  width="32"
                                  height="32"
                                  alt="@nplasterer"
                                  src="https://avatars.githubusercontent.com/nplasterer?s=64&amp;v=4"
                                  loading="lazy"
                                />
                                <img
                                  className="float-left circle ml-n3 border unselectable"
                                  width="32"
                                  height="32"
                                  alt="@ampinsk"
                                  src="https://avatars.githubusercontent.com/ampinsk?s=64&amp;v=4"
                                  loading="lazy"
                                />
                                <img
                                  className="float-left circle ml-n3 border unselectable"
                                  width="32"
                                  height="32"
                                  alt="@joshaber"
                                  src="https://avatars.githubusercontent.com/joshaber?s=64&amp;v=4"
                                  loading="lazy"
                                />
                              </div>

                              <h4 className="f4-mktg d-inline-block text-gray-mktg opacity-4 unselectable text-bold">
                                +3 collaborators
                              </h4>
                            </div>

                            <h2 className="h2-mktg mb-3">
                              <span className="text-gradient-pink-blue">
                                Ready player two.
                              </span>{" "}
                              Scale your team to any size in the cloud.
                            </h2>

                            <a
                              className="link-mktg text-semibold color-fg-default py-1 f3-mktg link-emphasis-mktg"
                              href="/account/organizations/new"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Homepage Collaborate section","action":"click","label":"text:Create a new organization for free;ref_loc:home launchpad","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="b7f92ac3165ca8b7b45671c9846724b40dc67699390774a0c7c5411491eaaf4e"
                              data-analytics-event='{"category":"Homepage Collaborate section","action":"click","label":"text:Create a new organization for free;ref_loc:home launchpad"}'
                            >
                              Create a new organization for free{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  className="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="col-12 d-none d-lg-block">
                          <div className="d-flex gutter gutter-spacious">
                            <div className="col-lg-6 offset-lg-7 position-relative">
                              <picture>
                                <source
                                  srcSet="https://github.githubassets.com/images/modules/site/home/pr-screen.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="https://github.githubassets.com/images/modules/site/home/pr-screen.png"
                                  className="position-absolute top-0 z-n1 height-auto home-pr-screen"
                                  alt="Timeline of a pull request on GitHub"
                                  loading="lazy"
                                  decoding="async"
                                  width="1400"
                                  height="2474"
                                />
                              </picture>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 offset-1 position-relative">
                          <ul className="home-git-log-light d-flex gutter gutter-spacious flex-column list-style-none ">
                            <li className="js-build-in-trigger col-11 col-sm-10 col-lg-12">
                              <div
                                className="d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious"
                                style={{padding: "8% 0 10.5%"}}
                              >
                                <div className="col-12 col-lg-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 20"
                                    width="28"
                                    className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                  >
                                    <circle
                                      cx="14"
                                      cy="10"
                                      fill="#fff"
                                      r="5"
                                      stroke="#d0d6df"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>

                                  <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg lh-condensed text-semibold mb-5 mb-lg-0 col-5-max">
                                    <span className="text-gray-dark-mktg">
                                      Better code starts with pull requests
                                    </span>
                                    —conversations around your code where you
                                    can experiment, squash bugs, and build new
                                    features.
                                  </h3>
                                </div>

                                <div className="col-12 col-lg-5">
                                  <div className="js-build-in-item home-pr-description rounded-2 position-relative z-2">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/pr-description.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/pr-description.png"
                                        className="width-full height-auto"
                                        alt="Pull request description on GitHub"
                                        loading="lazy"
                                        decoding="async"
                                        width="980"
                                        height="434"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="js-build-in-trigger col-11 col-sm-10 col-lg-12">
                              <div
                                className="d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious"
                                style={{padding: "5% 0 14.5%"}}
                              >
                                <div className="col-12 col-lg-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 20"
                                    width="28"
                                    aria-hidden="true"
                                    className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                  >
                                    <circle
                                      cx="14"
                                      cy="10"
                                      fill="#fff"
                                      r="5"
                                      stroke="#d0d6df"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>

                                  <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                    <span className="text-gray-dark-mktg">
                                      Code review is built in.
                                    </span>{" "}
                                    Pull requests cover the entire review flow:
                                    propose changes, browse code, ask for input,
                                    make a suggestion, and sign off in one
                                    place.{" "}
                                  </h3>
                                </div>
                                <div className="col-12 col-lg-5">
                                  <div className="js-build-in-item home-pr-comment rounded-2 position-relative z-2">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/pr-comment.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/pr-comment.png"
                                        className="width-full height-auto"
                                        alt="Pull request comment on GitHub"
                                        loading="lazy"
                                        decoding="async"
                                        width="980"
                                        height="940"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="js-build-in-trigger col-11 col-sm-10 col-lg-12">
                              <div className="d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious pt-5 pt-md-6 pb-9 pb-md-10">
                                <div className="col-12 col-lg-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 20"
                                    width="28"
                                    aria-hidden="true"
                                    className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                  >
                                    <circle
                                      cx="14"
                                      cy="10"
                                      fill="#fff"
                                      r="5"
                                      stroke="#d0d6df"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>

                                  <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                    <span className="text-gray-dark-mktg">
                                      {" "}
                                      Know when your pull request is ready to
                                      merge when everything’s green.
                                    </span>{" "}
                                    Reviews approved? Check. Tests passing?
                                    Check check. No conflicts? Ship it already.
                                  </h3>
                                </div>

                                <div className="col-12 col-lg-5">
                                  <div className="js-build-in-item home-pr-merge rounded-2 position-relative z-2">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/pr-merge.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/pr-merge.png"
                                        className="width-full height-auto"
                                        alt="Merge pull request on GitHub"
                                        loading="lazy"
                                        decoding="async"
                                        width="980"
                                        height="888"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              className="col-12 d-flex flex-items-center position-relative z-1 f6-mktg text-mono text-gray-light-mktg"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="26"
                                width="28"
                                className="home-git-item flex-shrink-0 mr-3 position-relative z-1"
                              >
                                <path d="m0 0h28v26h-28z" fill="#fff"></path>
                                <g fill="#8392ad">
                                  <path d="m11.25 13a.75.75 0 0 1 -.22.53l-2.75 2.75a.75.75 0 0 1 -1.06-1.06l2.22-2.22-2.22-2.22a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></path>
                                  <path
                                    clipRule="evenodd"
                                    d="m2 5.75c0-.966.784-1.75 1.75-1.75h20.5c.966 0 1.75.784 1.75 1.75v14.5a1.75 1.75 0 0 1 -1.75 1.75h-20.5a1.75 1.75 0 0 1 -1.75-1.75zm1.75-.25a.25.25 0 0 0 -.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25v-14.5a.25.25 0 0 0 -.25-.25z"
                                    fillRule="evenodd"
                                  ></path>
                                </g>
                              </svg>

                              <span className="text-truncate unselectable">
                                git merge add-status-screens
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="home-branch-container position-relative f6-mktg text-mono text-gray-light-mktg z-1 mb-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 110 142"
                            aria-hidden="true"
                            className="d-none d-md-block position-relative home-branch offset-n1"
                            style={{transform: "scaleX(-1)"}}
                          >
                            <path
                              d="m1-8c0 75 108 75 108 150"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </svg>

                          <div
                            className="d-flex flex-items-center"
                            style={{marginLeft: "-2.3125rem"}}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              height="20"
                              viewBox="0 0 28 20"
                              width="28"
                              aria-hidden="true"
                              className="home-git-icon flex-shrink-0 mr-3 d-none d-md-block"
                            >
                              <circle
                                cx="14"
                                cy="10"
                                fill="#fff"
                                r="5"
                                stroke="#d0d6df"
                                strokeWidth="2"
                              ></circle>
                            </svg>
                          </div>
                        </div>

                        <div className="col-12 mb-8 mb-md-9">
                          <div className="d-flex gutter gutter-spacious flex-column flex-lg-row">
                            <div className="offset-sm-1 ml-lg-0 col-12 col-sm-11 col-md-10 col-lg-5 d-flex flex-column mb-5 mb-md-6">
                              <div
                                className="text-center"
                                style={{maxWidth: "490px"}}
                              >
                                <div className="js-build-in build-in-slideY home-mobile-iphone mx-auto box-shadow-active-mktg mb-5 mb-md-6 position-relative">
                                  <img
                                    src="https://github.githubassets.com/images/modules/site/home/iphone-notch.svg"
                                    className="width-full position-absolute top-0 right-0 left-0 "
                                    alt="iPhone notch"
                                    loading="lazy"
                                  />

                                  <video
                                    loop=""
                                    muted=""
                                    playsInline=""
                                    className="width-full js-viewport-aware-video looping-mktg"
                                    data-threshold="0"
                                    preload="none"
                                    poster="https://github.githubassets.com/images/modules/site/home/gh-mobile.png"
                                    style={{borderRadius: "1.75rem"}}
                                  >
                                    <source
                                      type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                                      src="https://github.githubassets.com/images/modules/site/home/gh-mobile.h264.mp4"
                                    />
                                  </video>
                                </div>
                              </div>

                              <div>
                                <h3 className="f2-mktg text-gray-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                  <span className="text-gray-dark-mktg">
                                    Keep work moving.
                                  </span>
                                  Review or merge code, manage notifications,
                                  browse repositories, and more with{" "}
                                  <a
                                    className="color-fg-accent"
                                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn about GitHub Mobile","label":"ref_page:/;ref_cta:GitHub Mobile;ref_loc:collaboration launchpad;","originating_url":"https://github.com/","user_id":null}}'
                                    data-hydro-click-hmac="ba4bab549743a4620c73b97d5fadef178d3bc6d82e99ed447e53cff632e7dedb"
                                    data-analytics-event='{"category":"Home","action":"click to learn about GitHub Mobile","label":"ref_page:/;ref_cta:GitHub Mobile;ref_loc:collaboration launchpad;"}'
                                    href="/mobile"
                                  >
                                    GitHub Mobile
                                  </a>
                                  .
                                </h3>
                                <h4 className="f4-mktg text-semibold text-gray-mktg mb-3">
                                  Available for iOS and Android
                                </h4>
                                <ul className="list-style-none d-flex flex-items-center">
                                  <li className="mr-1 px-1">
                                    <a
                                      href="https://apps.apple.com/app/github/id1477376905?ls=1"
                                      data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to get GitHub Mobile on Apple App Store","label":"ref_page:/;ref_cta:apple icon;ref_loc:develop launchpad;","originating_url":"https://github.com/","user_id":null}}'
                                      data-hydro-click-hmac="8853a83c91374ed128a0542296ff80e8cb725b3114663f1959f153e711b95069"
                                      data-analytics-event='{"category":"Home","action":"click to get GitHub Mobile on Apple App Store","label":"ref_page:/;ref_cta:apple icon;ref_loc:develop launchpad;"}'
                                    >
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/logos/platform-apple.svg"
                                        alt="Apple App Store"
                                        loading="lazy"
                                      />
                                    </a>
                                  </li>
                                  <li className="px-1">
                                    <a
                                      href="https://play.google.com/store/apps/details?id=com.github.android"
                                      data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to get GitHub Mobile on Google Play Store","label":"ref_page:/;ref_cta:google icon;ref_loc:develop launchpad;","originating_url":"https://github.com/","user_id":null}}'
                                      data-hydro-click-hmac="27dcfd15841098eb02dac78948b96cf3e60843e8aff9f4b72b0966470d0d225c"
                                      data-analytics-event='{"category":"Home","action":"click to get GitHub Mobile on Google Play Store","label":"ref_page:/;ref_cta:google icon;ref_loc:develop launchpad;"}'
                                    >
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/logos/platform-google.svg"
                                        alt="Google Play Store"
                                        loading="lazy"
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="offset-sm-1 ml-lg-0 col-12 col-sm-11 col-md-10 col-lg-5 d-flex flex-column mb-5 mb-md-6">
                              <div className="js-build-in-trigger js-type-in-trigger position-relative d-flex flex-items-center mb-5 mb-md-6 home-desktop-comp">
                                <div className="col-12">
                                  <div className="js-build-in-item build-in-slideX-left home-desktop box-shadow-default-border-mktg offset-2 overflow-hidden">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/gh-desktop.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/gh-desktop.png"
                                        width="709"
                                        height="510"
                                        loading="lazy"
                                        className="width-full height-auto"
                                        alt="Viewing changelog in GitHub Desktop"
                                      />
                                    </picture>
                                  </div>

                                  <div className="js-build-in-item home-cli position-absolute width-full">
                                    <div
                                      className="terminal-mktg text-mono f6-mktg bg-gray-dark-mktg box-shadow-active-mktg rounded-2 js-type-in"
                                      data-color-mode="dark"
                                      data-light-theme="light"
                                      data-dark-theme="dark"
                                    >
                                      <div className="px-4 pt-3 position-relative">
                                        <div
                                          className="d-flex flex-row flex-nowrap position-absolute mt-1"
                                          aria-hidden="true"
                                        >
                                          <span
                                            className="d-inline-block circle mr-2 color-bg-emphasis"
                                            style={{width: "12px", height: "12px", opacity: ".4"}}
                                          ></span>
                                          <span
                                            className="d-inline-block circle mr-2 color-bg-emphasis"
                                            style={{width: "12px", height: "12px", opacity: ".4"}}
                                          ></span>
                                          <span
                                            className="d-inline-block circle mr-2 color-bg-emphasis"
                                            style={{width: "12px", height: "12px", opacity: ".4"}}
                                          ></span>
                                        </div>

                                        <div className="text-center text-small color-fg-subtle mb-n3">
                                          bash
                                        </div>
                                      </div>

                                      <div
                                        className="p-4"
                                        data-type-row-delay="100"
                                      >
                                        <div className="">
                                          <strong className="code-pink">→</strong>
                                          <strong className="color-fg-success">
                                            ~/
                                          </strong>

                                          <span
                                            className="js-type-letters"
                                            style={{visibility: "hidden"}}
                                          >
                                            $ gh pr status
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <var>
                                              Relevant pull requests in cli/cli
                                            </var>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>&nbsp;</span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <strong>Current branch</strong>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <var>
                                              There is no pull request
                                              associated with [main]
                                            </var>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>&nbsp;</span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <strong>Created by you</strong>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <var>
                                              You have no open pull requests
                                            </var>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>&nbsp;</span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <strong>
                                              Requesting a code review from you
                                            </strong>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <em>#1401</em> Correctly handle and
                                            set empty fields...{" "}
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <var>[octocat:emptyBody]</var>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <em>✓ Checks passing</em>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <em>#1357</em> Added confirmation
                                            steps for risk...{" "}
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <var>[octocat:confirmations]</var>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <span>
                                            <del>x 1/3 checks failing</del>
                                          </span>
                                        </div>

                                        <div
                                          className="js-type-row"
                                          style={{visibility: "hidden"}}
                                        >
                                          <strong className="code-pink">→</strong>
                                          <strong className="color-fg-success">
                                            ~/
                                          </strong>

                                          <span
                                            className="js-type-letters"
                                            style={{visibility: "hidden"}}
                                          >
                                            ${" "}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="f2-mktg text-gray-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                  <span className="text-gray-dark-mktg">
                                    Work however you want.
                                  </span>
                                  Put a GUI on it with{" "}
                                  <a
                                    className="color-fg-accent"
                                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn about GitHub Desktop","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad","originating_url":"https://github.com/","user_id":null}}'
                                    data-hydro-click-hmac="69ce36533db6968c6ad627b884ce22ec73d40f9c708a9cb623366e10073d09e2"
                                    data-analytics-event='{"category":"Home","action":"click to learn about GitHub Desktop","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad"}'
                                    href="https://desktop.github.com/"
                                  >
                                    GitHub Desktop
                                  </a>{" "}
                                  or stay in the command line with
                                  <a
                                    className="color-fg-accent"
                                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn about GitHub CLI","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad","originating_url":"https://github.com/","user_id":null}}'
                                    data-hydro-click-hmac="cdb22ed09168d9d4b968916090371d346ba95f7e81d825bb35b070723b3bff6e"
                                    data-analytics-event='{"category":"Home","action":"click to learn about GitHub CLI","label":"ref_page:/;ref_cta:npm;ref_loc:code launchpad"}'
                                    href="https://cli.github.com/"
                                  >
                                    GitHub CLI
                                  </a>
                                  .
                                </h3>
                                <h4 className="f4-mktg text-semibold text-gray-mktg mb-3">
                                  Available for macOS, Windows, and Linux*
                                </h4>
                                <ul className="list-style-none d-flex flex-items-center mb-2">
                                  <li className="mr-1 px-1">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/logos/platform-apple.svg"
                                      alt="macOS"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li className="px-1">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/logos/platform-windows.svg"
                                      alt="Windows"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li className="mr-1 px-1">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/logos/platform-linux.svg"
                                      alt="Linux"
                                      loading="lazy"
                                    />
                                  </li>
                                </ul>
                                <p className="f6-mktg text-gray-mktg">
                                  * GitHub CLI is available on macOS, Windows,
                                  and Linux
                                  <br />* GitHub Desktop is available on macOS
                                  and Windows
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mx-auto box-shadow-default-mktg wide-block py-0 position-relative home-git-log-dark-icons js-section"
              id="home-develop"
              data-color-mode="dark"
              data-light-theme="light"
              data-dark-theme="dark"
            >
              <div className="container-xl p-responsive height-full position-absolute top-0 left-0 right-0 width-full events-none overflow-hidden">
                <div className="d-flex flex-column gutter gutter-spacious height-full events-none">
                  <div
                    className="col-10 offset-1 home-git-log-dark height-full"
                    style={{padding: "6.5rem 0 0"}}
                  ></div>
                </div>
              </div>
              <div className="container-xl p-responsive">
                <div className="d-flex flex-column">
                  <div className="col-11 col-md-10 offset-1 home-codespaces-container">
                    <div className="col-8-max mx-lg-auto text-lg-center mb-6 mb-md-8 position-relative z-2">
                      <h2 className="h2-mktg color-fg-default mb-3">
                        Blazing fast cloud developer environments with{" "}
                        <span className="text-gradient-turq-purple-dark">
                          Codespaces
                        </span>
                      </h2>
                      <a
                        className="link-mktg text-semibold color-fg-default py-1 f3-mktg link-emphasis-mktg"
                        href="/features/codespaces"
                        data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn more about Codespaces","label":"ref_page:/;ref_cta:Learn more about GitHub Codespaces;ref_loc:codespaces launchpad","originating_url":"https://github.com/","user_id":null}}'
                        data-hydro-click-hmac="2258abf4172850e1777bdb2286824cd5310bd5ba4449b8f3ea992896f16d3844"
                        data-analytics-event='{"category":"Home","action":"click to learn more about Codespaces","label":"ref_page:/;ref_cta:Learn more about GitHub Codespaces;ref_loc:codespaces launchpad"}'
                      >
                        Learn more about GitHub Codespaces{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="octicon arrow-symbol-mktg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill="currentColor"
                            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                          ></path>
                          <path
                            className="octicon-chevrow-stem"
                            stroke="currentColor"
                            d="M1.75 8H11"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <div className="d-flex flex-column pt-5 z-1">
                      <div
                        className="js-build-in col-12 col-md-9 col-lg-6 home-codespaces-copy-item home-codespaces-copy-item-1 position-relative"
                        data-build-non-decorative="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="28"
                          viewBox="0 0 28 20"
                          width="28"
                          aria-hidden="true"
                          className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                          style={{right: "-0.26rem"}}
                        >
                          <circle
                            cx="14"
                            cy="10"
                            fill="#fff"
                            r="5"
                            stroke="#d0d6df"
                            strokeWidth="2"
                          ></circle>
                        </svg>

                        <h3 className="f2-mktg text-gray-light-mktg text-semibold">
                          The future of code is in the cloud, not your local
                          copy.{" "}
                          <span className="color-fg-default">
                            Codespaces gives you a complete, configurable dev
                            environment on top of a powerful VM in minutes.
                          </span>
                        </h3>
                      </div>

                      <div
                        className="js-build-in col-12 col-md-9 col-lg-6 home-codespaces-copy-item home-codespaces-copy-item-2 position-relative"
                        data-build-non-decorative="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="64"
                          viewBox="0 0 56 64"
                          width="56"
                          aria-hidden="true"
                          className="d-none d-sm-block float-left position-relative z-1"
                          style={{marginLeft: "-4.6875rem"}}
                        >
                          <path d="m0 0h56v64h-56z" fill="#051127"></path>
                          <rect
                            fill="#fff"
                            height="56"
                            rx="16"
                            width="56"
                            y="4"
                          ></rect>
                          <path
                            d="m43.6096 18.8281-6.923-3.3333c-.8013-.3858-1.7591-.2231-2.388.4058l-22.6636 20.664c-.6096.5558-.6089 1.5155.0015 2.0704l1.8512 1.6829c.4991.4538 1.2506.4871 1.7879.0796l27.2923-20.7046c.9156-.6946 2.2307-.0416 2.2307 1.1077v-.0804c0-.8067-.4621-1.5421-1.189-1.8921z"
                            fill="#0065a9"
                          ></path>
                          <path
                            d="m43.6096 45.1719-6.923 3.3334c-.8013.3857-1.7591.223-2.388-.4058l-22.6636-20.664c-.6096-.5558-.6089-1.5156.0015-2.0705l1.8512-1.6829c.4991-.4537 1.2506-.4871 1.7879-.0795l27.2923 20.7045c.9156.6946 2.2307.0416 2.2307-1.1077v.0804c0 .8067-.4621 1.5421-1.189 1.8921z"
                            fill="#007acc"
                          ></path>
                          <path
                            d="m36.6877 48.5059c-.8015.3855-1.7593.2226-2.3882-.4063.7749.7749 2.1.226 2.1-.8699v-30.4603c0-1.096-1.3251-1.6448-2.1-.8699.6289-.6289 1.5867-.7919 2.3882-.4064l6.9219 3.3287c.7274.3498 1.1899 1.0855 1.1899 1.8926v22.5704c0 .8071-.4625 1.5427-1.1899 1.8925z"
                            fill="#1f9cf0"
                          ></path>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="28"
                          viewBox="0 0 28 20"
                          width="28"
                          aria-hidden="true"
                          className="d-block d-sm-none home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                          style={{right: "-0.26rem"}}
                        >
                          <circle
                            cx="14"
                            cy="10"
                            fill="#fff"
                            r="5"
                            stroke="#d0d6df"
                            strokeWidth="2"
                          ></circle>
                        </svg>

                        <h3 className="f2-mktg text-gray-light-mktg text-semibold">
                          <span className="color-fg-default">
                            Visual Studio Code, in your browser, full stop.
                          </span>{" "}
                          Codespaces brings the world’s most popular desktop
                          editor to every repo. Code, build, test, use the
                          terminal, and open pull requests from anywhere.
                        </h3>
                      </div>

                      <div
                        className="js-build-in col-12 col-md-9 col-lg-6 home-codespaces-copy-item home-codespaces-copy-item-3 position-relative"
                        data-build-non-decorative="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="28"
                          viewBox="0 0 28 20"
                          width="28"
                          aria-hidden="true"
                          className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                          style={{right: "-0.26rem"}}
                        >
                          <circle
                            cx="14"
                            cy="10"
                            fill="#fff"
                            r="5"
                            stroke="#d0d6df"
                            strokeWidth="2"
                          ></circle>
                        </svg>

                        <h3 className="f2-mktg text-gray-light-mktg text-semibold">
                          <span className="color-fg-default">
                            Customize to your heart’s desire.
                          </span>{" "}
                          Add your favorite VS Code extensions, create a
                          devcontainer config file, install new themes, and
                          tweak your settings.
                        </h3>
                      </div>

                      <div
                        className="col-12 col-lg-6 position-absolute top-0 right-0 height-full home-codespaces-illo events-none"
                        style={{paddingLeft: "0 !important", paddingRight: "0 !important"}}
                      >
                        <div className="top-0 right-0 position-sticky z-1 pt-3 pt-lg-8">
                          <div className="home-codespaces-img-container overflow-hidden d-flex flex-items-start position-relative pl-2 pl-lg-4">
                            <picture>
                              <source
                                srcSet="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-1.webp"
                                type="image/webp"
                              />
                              <img
                                src="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-1.png"
                                className="home-codespaces-view home-codespaces-view-1 z-2 rounded-2 box-shadow-active-border-light-mktg"
                                alt="VS Code running in the browser with your project's code and development environment running. A terminal panel is visiable in the editor."
                                loading="lazy"
                              />
                            </picture>
                            <picture>
                              <source
                                srcSet="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-2.webp"
                                type="image/webp"
                              />
                              <img
                                src="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-2.png"
                                className="home-codespaces-view home-codespaces-view-2 z-2 rounded-2 box-shadow-active-border-light-mktg"
                                alt="VS Code running in the browser with your project's code and development environment running. A terminal panel is visiable in the editor."
                                loading="lazy"
                              />
                            </picture>
                            <picture>
                              <source
                                srcSet="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-3.webp"
                                type="image/webp"
                              />
                              <img
                                src="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-3.png"
                                className="home-codespaces-view home-codespaces-view-3 z-2 rounded-2 box-shadow-active-border-light-mktg"
                                alt="VS Code running in the browser with your project's code and development environment running. A terminal panel is visiable in the editor."
                                loading="lazy"
                              />
                            </picture>
                          </div>

                          <div className="home-codespaces-glow-container position-absolute top-0 bottom-0 overflow-hidden">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/codespaces-glow.svg"
                              className="home-codespaces-glow position-absolute z-n1"
                              alt="Light glowing behind the editor"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="width-full overflow-hidden">
                  <div className="d-flex flex-column gutter gutter-spacious">
                    <div className="d-none d-lg-flex offset-1 col-5 px-0 position-relative z-1">
                      <div
                        className="flex-auto ml-n7"
                        style={{height: "1rem", borderRadius: "0 0 0 1rem", borderBottom: "2px solid #424d65", borderLeft: "2px solid #424d65"}}
                      ></div>
                      <div
                        className="mr-n4"
                        style={{width: "1rem", height: "10rem", marginTop: "0.875rem", borderRadius: "0 16px 0 0", borderTop: "2px solid #424d65", borderRight: "2px solid #424d65"}}
                      ></div>
                      <div
                        className="ml-n7 height-full position-absolute top-0 width-full z-n1 bg-home-dark"
                        style={{backgroundColor: "#040d21"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="overflow-hidden js-section" id="home-automate">
                <div className="container-xl p-responsive pb-8 pb-md-9">
                  <div className="home-git-log-center pt-10 pt-md-11 pb-8 pb-md-9">
                    <div className="col-8-max mx-0 mx-lg-auto text-left text-lg-center mb-4 mb-md-7 color-bg-default pb-3">
                      <h2 className="h2-mktg mb-3">
                        {" "}
                        Automate anything with{" "}
                        <span className="text-gradient-purple-coral no-wrap">
                          GitHub Actions
                        </span>
                      </h2>
                      <a
                        className="link-mktg text-semibold color-fg-default py-1 f3-mktg link-emphasis-mktg"
                        href="/features/actions"
                        data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn more about GitHub Actions","label":"ref_page:/;ref_cta:Learn more about GitHub Actions;ref_loc:automate launchpad","originating_url":"https://github.com/","user_id":null}}'
                        data-hydro-click-hmac="a728d203f4ae0b773a5ad0f797541adde6c9fd072582d16374f1267b37c02fad"
                        data-analytics-event='{"category":"Home","action":"click to learn more about GitHub Actions","label":"ref_page:/;ref_cta:Learn more about GitHub Actions;ref_loc:automate launchpad"}'
                      >
                        Learn more about GitHub Actions{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="octicon arrow-symbol-mktg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill="currentColor"
                            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                          ></path>
                          <path
                            className="octicon-chevrow-stem"
                            stroke="currentColor"
                            d="M1.75 8H11"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </a>
                    </div>

                    <div
                      className="river-mktg js-build-in-trigger d-flex flex-column gutter gutter-spacious flex-md-items-center my-3 my-sm-7 my-md-8 position-relative flex-md-row-reverse pb-4 pb-md-7"
                      data-build-in-stagger="100"
                    >
                      <div
                        className="col-12 py-3 js-build-in-item col-sm-10 col-md-6 col-lg-5 build-in-slideX-left"
                        style={{transitionDelay: "0ms"}}
                      >
                        <div className="pl-md-4">
                          <div className="f2-mktg text-gray-mktg text-semibold">
                            <span className="text-gray-dark-mktg">
                              Setup CI/CD, enhance your DevOps, and script your
                              entire workflow with GitHub Actions.
                            </span>{" "}
                            Kick off automated workflows with GitHub events like
                            push, issue creation, merge, and release.
                          </div>
                        </div>
                      </div>

                      <div className="col-12 py-3 col-md-6 col-lg-7">
                        <div className="position-relative">
                          <div
                            style={{maxWidth: "706px", fontSize: "0px", transitionDelay: '100ms'}}
                            className="js-build-in-item build-in-scale-fade color-bg-default rounded-2 box-shadow-active-border-mktg position-relative overflow-hidden"
                          >
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/actions-autoComplete.png"
                              className="width-full"
                              alt="GitHub Actions web editor editing workflow file showcasing autoComplete"
                              loading="lazy"
                            />
                            <video
                              loop=""
                              muted=""
                              playsInline=""
                              preload="none"
                              className="width-full looping-mktg js-viewport-aware-video"
                              data-threshold="0"
                              poster="https://github.githubassets.com/images/modules/site/home/actions-autoComplete-poster.png"
                            >
                              <source
                                type="video/mp4; codecs=hevc,mp4a.40.2"
                                src="https://github.githubassets.com/images/modules/site/home/actions-autoComplete.hevc.mp4"
                              />
                              <source
                                type="video/mp4; codecs=avc1.4D401E,mp4a.40.2"
                                src="https://github.githubassets.com/images/modules/site/home/actions-autoComplete.h264.mp4"
                              />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="river-mktg js-build-in-trigger d-flex flex-column gutter gutter-spacious flex-md-items-center my-3 my-sm-7 my-md-8 position-relative flex-md-row pb-4 pb-md-7"
                      data-build-in-stagger="100"
                    >
                      <div
                        className="col-12 py-3 js-build-in-item col-sm-10 col-md-6 col-lg-5 build-in-slideX-right"
                        style={{transitionDelay: "0ms"}}
                      >
                        <div className="pr-md-4">
                          <div className="mb-3">
                            <h4 className="h3-mktg mb-3 lh-condensed-ultra text-gradient-purple-coral">
                              5,000+ <br />
                              Actions
                            </h4>
                            <h3 className="f2-mktg text-gray-mktg text-semibold mb-4 col-5-max">
                              Write your own, or import Actions from the open
                              source community, all within our world-class
                              editor. Feeling stuck? Browse the Actions
                              developer docs as you code.
                            </h3>
                            <a
                              className="link-mktg text-semibold color-fg-default py-1 f4-mktg link-emphasis-mktg"
                              href="/marketplace/actions"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to Actions Marketplace","label":"ref_page:/;ref_cta:Explore the Actions Marketplace;ref_loc:automate launchpad","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="cbdd7edacd47fe2465089095eae7f45e977d87ffcb8f6c691f0a4744c791499d"
                              data-analytics-event='{"category":"Home","action":"click to go to Actions Marketplace","label":"ref_page:/;ref_cta:Explore the Actions Marketplace;ref_loc:automate launchpad"}'
                            >
                              Explore the Actions Marketplace{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  className="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 py-3 col-md-6 col-lg-7">
                        <div className="position-relative">
                          <div
                            className="js-build-in-item home-workflow-comp position-relative rounded-2 box-shadow-active-border-mktg overflow-hidden"
                            style={{transitionDelay: "100ms"}}
                          >
                            <div
                              className="home-workflow-sidebar height-full position-absolute top-0 right-0 bottom-0 border-left"
                              style={{maxWidth: "276px"}}
                            >
                              <div
                                className="position-absolute right-0 bottom-0 left-0 z-1 overflow-hidden"
                                style={{top: "10%"}}
                              >
                                <picture>
                                  <source
                                    srcSet="https://github.githubassets.com/images/modules/site/home/actions-editor-actions.webp"
                                    type="image/webp"
                                  />
                                  <img
                                    src="https://github.githubassets.com/images/modules/site/home/actions-editor-actions.png"
                                    className="home-workflow-actions width-full"
                                    alt="The Actions Marketplace is available inline alongside the GitHub Actions workflow editor"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </picture>
                              </div>
                              <picture>
                                <source
                                  srcSet="https://github.githubassets.com/images/modules/site/home/actions-editor-sidebar.webp"
                                  type="image/webp"
                                />
                                <img
                                  src="https://github.githubassets.com/images/modules/site/home/actions-editor-sidebar.png"
                                  className="height-full"
                                  alt="The Actions Marketplace is available inline alongside the GitHub Actions workflow editor"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </picture>
                            </div>

                            <picture>
                              <source
                                srcSet="https://github.githubassets.com/images/modules/site/home/actions-editor.webp"
                                type="image/webp"
                              />
                              <img
                                src="https://github.githubassets.com/images/modules/site/home/actions-editor.png"
                                className="width-full height-auto"
                                alt="The GitHub Actions workflow editor"
                                width="706"
                                height="452"
                                loading="lazy"
                                decoding="async"
                              />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column gutter gutter-spacious flex-lg-items-center my-7 my-md-8 pb-7">
                      <div className="col-6-max text-left text-lg-center mx-lg-auto pt-3 pb-5 pb-md-6 color-bg-default">
                        <h3 className="f2-mktg text-gray-mktg text-semibold mb-5">
                          You can have it all.{" "}
                          <span className="text-gray-dark-mktg">
                            Run actions in any language or operating system, on
                            Linux, macOS, Windows, ARM, and containers. Or all
                            at once with matrix builds.
                          </span>
                        </h3>
                        <ul className="list-style-none d-flex flex-items-center flex-justify-start flex-lg-justify-center">
                          <li className="mr-1 px-1">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/logos/platform-linux.svg"
                              alt="Linux"
                              loading="lazy"
                            />
                          </li>
                          <li className="mr-1 px-1">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/logos/platform-apple.svg"
                              alt="macOS"
                              loading="lazy"
                            />
                          </li>
                          <li className="mr-1 px-1">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/logos/platform-windows.svg"
                              alt="Windows"
                              loading="lazy"
                            />
                          </li>
                          <li className="px-1">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/logos/platform-arm.svg"
                              alt="ARM"
                              loading="lazy"
                            />
                          </li>
                        </ul>
                      </div>

                      <div className="col-12 col-lg-7 mx-lg-auto">
                        <div
                          className="position-relative z-2"
                          style={{maxWidth: "706px"}}
                        >
                          <div
                            className="js-build-in home-matrix-comp d-flex position-absolute top-6 top-lg-3 bottom-0 flex-items-center"
                            data-build-margin-top="0"
                            data-build-margin-bottom="0"
                          >
                            <div className="home-matrix-string d-flex gutter-condensed flex-items-start flex-justify-center mx-3 mx-lg-0 width-full position-relative">
                              <div className="d-none d-lg-block col-4 flex-auto">
                                <div className="home-matrix-build mt-3 float-right color-bg-default width-full rounded-2 position-relative box-shadow-card-border-mktg">
                                  <div className="home-matrix-connector home-matrix-connector--right">
                                    <div className="home-matrix-connector-bg"></div>
                                  </div>

                                  <picture>
                                    <source
                                      srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-build.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-build.png"
                                      className="width-full"
                                      alt="Actions build workflow"
                                      loading="lazy"
                                    />
                                  </picture>
                                </div>
                              </div>

                              <div className="col-6 col-lg-4 flex-auto">
                                <div
                                  className="home-matrix-test mx-auto color-bg-default width-full rounded-2 position-relative z-1"
                                  style={{borderTopLeftRadius: "0 !important"}}
                                >
                                  <div
                                    className="home-matrix-tab-container position-absolute"
                                    style={{width: "22%"}}
                                  >
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-test-tab.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-test-tab.png"
                                        className="width-full position-relative z-1"
                                        alt="Actions build workflow"
                                        loading="lazy"
                                      />
                                    </picture>
                                    <div className="home-matrix-tab position-absolute top-0 overflow-hidden width-full"></div>
                                  </div>

                                  <div className="home-matrix-connector d-none d-lg-block">
                                    <div className="home-matrix-connector-bg"></div>
                                  </div>
                                  <div className="home-matrix-connector home-matrix-connector--right">
                                    <div className="home-matrix-connector-bg"></div>
                                  </div>

                                  <picture>
                                    <source
                                      srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-test.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-test.png"
                                      className="width-full"
                                      alt="Actions build workflow"
                                      loading="lazy"
                                    />
                                  </picture>
                                </div>
                              </div>

                              <div className="col-6 col-lg-4 flex-auto">
                                <div
                                  className="home-matrix-publish float-lg-left mx-auto color-bg-default width-full rounded-2 position-relative box-shadow-card-border-mktg"
                                  style={{borderTopLeftRadius: "0 !important"}}
                                >
                                  <div
                                    className="home-matrix-tab-container position-absolute"
                                    style={{width: "27%"}}
                                  >
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-publish-tab.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-publish-tab.png"
                                        className="width-full position-relative z-1"
                                        alt="Actions build workflow"
                                        loading="lazy"
                                      />
                                    </picture>
                                    <div className="home-matrix-tab position-absolute top-0 overflow-hidden width-full"></div>
                                  </div>

                                  <div className="home-matrix-connector">
                                    <div className="home-matrix-connector-bg"></div>
                                  </div>
                                  <div
                                    className="position-absolute d-flex flex-column flex-justify-around"
                                    style={{left: "9.75%", top: "9.5%", width: "5.5%", height: "80.25%"}}
                                  >
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-spinner.svg"
                                      className="home-matrix-spinner-1"
                                      loading="lazy"
                                      alt=""
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-spinner.svg"
                                      className="home-matrix-spinner-2"
                                      loading="lazy"
                                      alt=""
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-spinner.svg"
                                      className="home-matrix-spinner-3"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>

                                  <div
                                    className="position-absolute d-flex flex-column flex-justify-around"
                                    style={{left: "9.75%", top: "9.5%", width: "5.5%", height: "80.25%"}}
                                  >
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-success.svg"
                                      className="home-matrix-success-1"
                                      loading="lazy"
                                      alt=""
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-success.svg"
                                      className="home-matrix-success-2"
                                      loading="lazy"
                                      alt=""
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-success.svg"
                                      className="home-matrix-success-3"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>

                                  <picture>
                                    <source
                                      srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-publish.webp"
                                      type="image/webp"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-publish.png"
                                      className="width-full"
                                      alt="Actions publish workflow"
                                      loading="lazy"
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </div>
                          <picture>
                            <source
                              srcSet="https://github.githubassets.com/images/modules/site/home/matrix-workflow-canvas.webp"
                              type="image/webp"
                            />
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/matrix-workflow-canvas.png"
                              className="width-full height-auto rounded-2 box-shadow-default-border-mktg"
                              alt="Actions workflow canvas"
                              loading="lazy"
                              decoding="async"
                              width="1412"
                              height="844"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="col-6-max text-left text-lg-center mx-lg-auto d-flex flex-sm-row-reverse flex-lg-column flex-items-center mt-5 mt-lg-0">
                        <div
                          className="d-none d-sm-block flex-shrink-0 color-bg-default circle position-relative mt-lg-n7 mx-auto js-build-in"
                          style={{width: "164px", height: "164px"}}
                          data-build-margin-top="0"
                          data-build-margin-bottom="0"
                        >
                          <div className="position-absolute text-left top-0 right-0 bottom-0 left-0 home-actions-success circle z-1">
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/icons/actions-check.svg"
                              className="home-actions-success-check"
                              alt="Large representation of the indicator that a workflow is successfully completed"
                              loading="lazy"
                            />
                          </div>
                          <img
                            src="https://github.githubassets.com/images/modules/site/home/actions-spinner.svg"
                            className="width-full home-actions-spinner"
                            alt="Large representation of the indicator that a workflow is running"
                            loading="lazy"
                          />
                        </div>

                        <h3 className="col-5-max f2-mktg text-gray-mktg text-semibold color-bg-default pt-lg-4 pr-4 pr-lg-0 pb-lg-3">
                          <span className="text-gray-dark-mktg">
                            With 70 million jobs run per month you’re in good
                            company with Actions, the number one CI service on
                            the world’s largest developer platform.
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="js-build-in-trigger d-flex flex-column flex-lg-row-reverse gutter flex-lg-justify-end flex-lg-items-center pt-5 pb-8 pb-md-9">
                    <div className="col-12 col-lg-5 mb-4">
                      <div className="mb-5 mb-md-6">
                        <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg text-semibold mb-4 col-5-max">
                          Speaking of automation,{" "}
                          <span className="text-gray-dark-mktg">
                            Dependabot keeps your projects up to date
                          </span>{" "}
                          with automated pull requests that update all your
                          dependencies. Just review and merge to keep your
                          software secure.
                        </h3>
                        <a
                          className="link-mktg text-semibold color-fg-default py-1 f4-mktg link-emphasis-mktg"
                          href="https://docs.github.com/github/managing-security-vulnerabilities/configuring-dependabot-security-updates"
                          data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Homepage Automation section","action":"click","label":"text:Learn more about Dependabot;ref_loc:automate launchpad;","originating_url":"https://github.com/","user_id":null}}'
                          data-hydro-click-hmac="e8301a997a2a40fb51d4634a770da826faf44d4ddee71556063502461503a521"
                          data-analytics-event='{"category":"Homepage Automation section","action":"click","label":"text:Learn more about Dependabot;ref_loc:automate launchpad;"}'
                        >
                          Learn more about Dependabot{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="octicon arrow-symbol-mktg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill="currentColor"
                              d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                            ></path>
                            <path
                              className="octicon-chevrow-stem"
                              stroke="currentColor"
                              d="M1.75 8H11"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="js-build-in-item home-dependabot-comp position-relative">
                        <picture>
                          <source
                            srcSet="https://github.githubassets.com/images/modules/site/home/dependabot-pr.webp"
                            type="image/webp"
                          />
                          <img
                            src="https://github.githubassets.com/images/modules/site/home/dependabot-pr.png"
                            className="width-full home-dependabot-pr rounded-2 box-shadow-active-border-mktg"
                            alt="Automated pull request that updates a dependency in your repository"
                            loading="lazy"
                          />
                        </picture>
                        <div className="home-dependabot-merge mx-4 position-absolute right-0 bottom-0 left-0 rounded-2 box-shadow-default-border-mktg z-n1">
                          <picture>
                            <source
                              srcSet="https://github.githubassets.com/images/modules/site/home/dependabot-merge.webp"
                              type="image/webp"
                            />
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/dependabot-merge.png"
                              className="opacity-4 width-full"
                              alt="Merge pull request on GitHub"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="position-relative z-1 mx-auto box-shadow-default-mktg wide-block overflow-hidden js-section"
                style={{paddingTop: "0 !important"}}
                id="home-secure"
                data-color-mode="dark"
                data-light-theme="light"
                data-dark-theme="dark"
              >
                <div className="container-xl p-responsive">
                  <div className="d-flex flex-column gutter gutter-spacious position-relative">
                    <div className="home-git-log-dark col-12 offset-md-1 pt-10">
                      <div className="d-flex flex-column gutter gutter-spacious">
                        <div className="home-branch-container position-relative f6 text-mono text-gray-light-mktg z-1">
                          <div
                            className="d-flex flex-items-center"
                            style={{marginLeft: "-2.3125rem"}}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              height="20"
                              viewBox="0 0 28 20"
                              width="28"
                              aria-hidden="true"
                              className="home-git-icon flex-shrink-0 mr-3 d-none d-md-block"
                            >
                              <circle
                                cx="14"
                                cy="10"
                                fill="#fff"
                                r="5"
                                stroke="#d0d6df"
                                strokeWidth="2"
                              ></circle>
                            </svg>
                          </div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 110 142"
                            aria-hidden="true"
                            className="d-none d-md-block position-relative home-branch offset-n1"
                          >
                            <path
                              d="m1-8c0 75 108 75 108 150"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </svg>
                        </div>

                        <div className="home-git-log-dark col-11 offset-1 pb-5 pb-md-6">
                          <div className="col-12 col-md-10">
                            <div className="mb-5 mb-md-6 mt-n3">
                              <div className="d-flex flex-items-center position-relative z-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="20"
                                  viewBox="0 0 28 20"
                                  width="28"
                                  aria-hidden="true"
                                  className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                                >
                                  <circle
                                    cx="14"
                                    cy="10"
                                    fill="#fff"
                                    r="5"
                                    stroke="#d0d6df"
                                    strokeWidth="2"
                                  ></circle>
                                </svg>
                              </div>
                            </div>

                            <h2 className="h2-mktg color-fg-default mt-n8 mt-md-n9 mb-3">
                              Find and fix vulnerabilities <br />{" "}
                              <span className="text-gradient-coral-yellow-dark pb-1">
                                before you merge
                              </span>
                            </h2>
                            <a
                              className="link-mktg text-semibold color-fg-default py-1 f3-mktg link-emphasis-mktg"
                              href="/features/security"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn more about advanced security","label":"ref_page:/;ref_cta:Learn more about advanced security;ref_loc:secure launchpad","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="fe264a6a64a4ad175e02afef377f2506753da7605bafea0023033e17c1aef744"
                              data-analytics-event='{"category":"Home","action":"click to learn more about advanced security","label":"ref_page:/;ref_cta:Learn more about advanced security;ref_loc:secure launchpad"}'
                            >
                              Learn more about advanced security{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="octicon arrow-symbol-mktg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                ></path>
                                <path
                                  className="octicon-chevrow-stem"
                                  stroke="currentColor"
                                  d="M1.75 8H11"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="col-12 offset-1">
                          <ul className="home-git-log-dark d-flex gutter gutter-spacious flex-column list-style-none ">
                            <li className="col-11 col-sm-10 col-lg-12">
                              <div className="js-build-in-trigger d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious py-5 py-md-6">
                                <div className="col-12 col-lg-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 20"
                                    width="28"
                                    aria-hidden="true"
                                    className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                  >
                                    <circle
                                      cx="14"
                                      cy="10"
                                      fill="#fff"
                                      r="5"
                                      stroke="#d0d6df"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>

                                  <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-light-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                    <span className="color-fg-default">
                                      Secure your code as you write it.
                                    </span>{" "}
                                    CodeQL’s code scanning automatically reviews
                                    every change to your codebase and identifies
                                    known vulnerabilities before they ever reach
                                    production.
                                  </h3>
                                </div>

                                <div className="col-12 col-lg-5">
                                  <div className="js-build-in-item home-codeql-comp position-relative pt-8 pt-md-9">
                                    <div className="home-codeql-step-3 rounded-2 position-absolute box-shadow-active-border-light-mktg">
                                      <picture>
                                        <source
                                          srcSet="https://github.githubassets.com/images/modules/site/home/codeql-step-3.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          src="https://github.githubassets.com/images/modules/site/home/codeql-step-3.png"
                                          alt="Step 3"
                                          className="width-full"
                                          loading="lazy"
                                        />
                                      </picture>
                                    </div>
                                    <div className="home-codeql-step-2 rounded-2 position-absolute box-shadow-active-border-light-mktg">
                                      <picture>
                                        <source
                                          srcSet="https://github.githubassets.com/images/modules/site/home/codeql-step-2.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          src="https://github.githubassets.com/images/modules/site/home/codeql-step-2.png"
                                          alt="Step 2"
                                          className="width-full"
                                          loading="lazy"
                                        />
                                      </picture>
                                    </div>
                                    <div className="home-codeql-step-1 rounded-2 position-relative z-1">
                                      <picture>
                                        <source
                                          srcSet="https://github.githubassets.com/images/modules/site/home/codeql-step-1.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          src="https://github.githubassets.com/images/modules/site/home/codeql-step-1.png"
                                          alt="Step 1"
                                          className="width-full"
                                          loading="lazy"
                                        />
                                      </picture>
                                    </div>
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/codeql-description.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/codeql-description.png"
                                        alt="Code injection alert"
                                        className="home-codeql-description width-full"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              className="col-12 d-flex flex-items-center position-relative f6 text-mono text-gray-light-mktg py-2"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="29"
                                width="28"
                                className="home-git-item flex-shrink-0 mr-3 position-relative z-1"
                              >
                                <path d="m0 0h28v29h-28z" fill="#041027"></path>
                                <g fill="#ffd33d">
                                  <path d="m15 19.5a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm-.25-8.25a.75.75 0 0 0 -1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                                  <path
                                    clipRule="evenodd"
                                    d="m11.836 5.244c.963-1.665 3.366-1.665 4.329 0l8.966 15.504c.964 1.667-.239 3.752-2.164 3.752h-17.933c-1.925 0-3.128-2.085-2.164-3.752zm3.03.751a1 1 0 0 0 -1.731 0l-8.967 15.504a1 1 0 0 0 .866 1.501h17.933a1 1 0 0 0 .865-1.5l-8.966-15.506z"
                                    fillRule="evenodd"
                                  ></path>
                                </g>
                              </svg>

                              <span className="text-truncate color-fg-attention unselectable">
                                Vulnerabilities found
                              </span>
                            </li>

                            <li
                              className="col-12 d-flex flex-items-center position-relative f6 text-mono text-gray-light-mktg py-2 unselectable"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="22"
                                width="28"
                                className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                              >
                                <path
                                  d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                                  fill="#465061"
                                ></path>
                                <circle
                                  cx="14"
                                  cy="11"
                                  fill="#041027"
                                  r="5"
                                  stroke="#465061"
                                  strokeWidth="2"
                                ></circle>
                              </svg>

                              <img
                                src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                                className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                                alt="@jasonetco"
                                loading="lazy"
                              />
                              <span className="opacity-4 text-truncate">
                                Fixed deserialized data security vulnerability
                              </span>
                            </li>

                            <li className="col-11 col-sm-10 col-lg-12">
                              <div className="js-build-in-trigger d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious py-7 py-md-8">
                                <div className="col-12 col-lg-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="28"
                                    viewBox="0 0 28 20"
                                    width="28"
                                    aria-hidden="true"
                                    className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                  >
                                    <circle
                                      cx="14"
                                      cy="10"
                                      fill="#fff"
                                      r="5"
                                      stroke="#d0d6df"
                                      strokeWidth="2"
                                    ></circle>
                                  </svg>

                                  <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-light-mktg text-semibold mb-5 mb-lg-0 col-5-max">
                                    <span className="color-fg-default">
                                      Keep your secrets.
                                    </span>{" "}
                                    We automatically scan repositories for OAuth
                                    tokens, API keys, personal tokens, and more.
                                    If we find one, we’ll notify you and the
                                    partner that issued it to invalidate the
                                    secret.
                                  </h3>
                                </div>

                                <div className="col-12 col-lg-5">
                                  <div className="js-build-in-item home-secret-comp">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/secret-alert.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/secret-alert.png"
                                        className="width-full rounded-2 home-secret-alert position-relative z-1"
                                        alt="An alert of found secret committed to the repository"
                                        loading="lazy"
                                      />
                                    </picture>
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/secret-list.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/secret-list.png"
                                        className="width-full home-secret-list"
                                        alt="List of exposed secrets found in the repository"
                                        loading="lazy"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li
                              className="col-12 d-flex flex-items-center position-relative f6 text-mono text-gray-light-mktg py-2"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="29"
                                width="28"
                                className="home-git-item flex-shrink-0 mr-3 position-relative z-1"
                              >
                                <path d="m0 0h28v29h-28z" fill="#041027"></path>
                                <g fill="#ffd33d">
                                  <path d="m15 19.5a1 1 0 1 1 -2 0 1 1 0 0 1 2 0zm-.25-8.25a.75.75 0 0 0 -1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                                  <path
                                    clipRule="evenodd"
                                    d="m11.836 5.244c.963-1.665 3.366-1.665 4.329 0l8.966 15.504c.964 1.667-.239 3.752-2.164 3.752h-17.933c-1.925 0-3.128-2.085-2.164-3.752zm3.03.751a1 1 0 0 0 -1.731 0l-8.967 15.504a1 1 0 0 0 .866 1.501h17.933a1 1 0 0 0 .865-1.5l-8.966-15.506z"
                                    fillRule="evenodd"
                                  ></path>
                                </g>
                              </svg>

                              <span className="text-truncate color-fg-attention unselectable">
                                OAuth token found
                              </span>
                            </li>

                            <li
                              className="col-12 d-flex flex-items-center position-relative f6 text-mono text-gray-light-mktg pt-2 unselectable"
                              aria-hidden="true"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="22"
                                width="28"
                                className="home-git-icon home-git-item flex-shrink-0 mr-3 position-relative z-1"
                              >
                                <path
                                  d="m2.5 10a1 1 0 1 0 0 2zm23 2a1 1 0 1 0 0-2zm-23 0h23v-2h-23z"
                                  fill="#465061"
                                ></path>
                                <circle
                                  cx="14"
                                  cy="11"
                                  fill="#041027"
                                  r="5"
                                  stroke="#465061"
                                  strokeWidth="2"
                                ></circle>
                              </svg>

                              <img
                                src="https://avatars.githubusercontent.com/jasonetco?s=64&amp;v=4"
                                className="d-none d-sm-block flex-shrink-0 opacity-4 avatar avatar-4 mr-3 circle color-bg-subtle"
                                alt="@jasonetco"
                                loading="lazy"
                              />
                              <span className="opacity-4 text-truncate">
                                Replaced OAuth token with a key vault value
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="home-branch-container position-relative f6 text-mono text-gray-light-mktg z-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 110 142"
                            aria-hidden="true"
                            className="d-none d-md-block position-relative home-branch offset-n1"
                            style={{transform: "scaleX(-1)"}}
                          >
                            <path
                              d="m1-8c0 75 108 75 108 150"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            ></path>
                          </svg>

                          <div
                            className="d-flex flex-items-center"
                            style={{marginLeft: "-2.3125rem"}}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              height="20"
                              viewBox="0 0 28 20"
                              width="28"
                              aria-hidden="true"
                              className="home-git-icon flex-shrink-0 mr-3 d-none d-md-block"
                            >
                              <circle
                                cx="14"
                                cy="10"
                                fill="#fff"
                                r="5"
                                stroke="#d0d6df"
                                strokeWidth="2"
                              ></circle>
                            </svg>
                          </div>
                        </div>

                        <div className="offset-1 col-11 col-sm-10 col-lg-12">
                          <div className="home-git-log-dark home-security-point-3 d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious pt-8 pt-md-0 mb-n12 mb-md-0">
                            <div className="col-12 col-lg-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="28"
                                viewBox="0 0 28 20"
                                width="28"
                                aria-hidden="true"
                                className="home-git-icon home-git-item float-left d-block d-md-none mr-n6 position-relative z-2"
                              >
                                <circle
                                  cx="14"
                                  cy="10"
                                  fill="#fff"
                                  r="5"
                                  stroke="#d0d6df"
                                  strokeWidth="2"
                                ></circle>
                              </svg>

                              <h3 className="js-build-in build-in-slideX-left f2-mktg text-gray-light-mktg text-semibold mt-md-n5 mb-5 mb-md-n11 col-5-max">
                                <span className="color-fg-default">
                                  Found a vulnerability?
                                </span>{" "}
                                Our security advisory remediation tools help
                                developers identify and disclose them
                                responsibly so maintainers can patch them in
                                dedicated, private workspaces.
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 offset-1 ml-md-0 events-none">
                          <img
                            src="https://github.githubassets.com/images/modules/site/home/security-alert-fan.svg"
                            className="home-security-alert-fan mb-7 mb-md-8 position-relative z-1 unselectable"
                            alt="Distributed security alerts"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="container-xl p-responsive mx-auto js-section"
                id="home-community"
              >
                <div className="d-flex flex-column gutter gutter-spacious position-relative">
                  <div className="col-12">
                    <div className="d-flex flex-column gutter gutter-spacious">
                      <div className="home-git-log-light col-10 offset-1 pt-10 pt-md-11 pb-lg-6">
                        <div className="col-5-max">
                          <h2 className="h2-mktg overflow-visible">
                            The home for all developers — including you
                          </h2>
                        </div>
                      </div>

                      <div className="col-12 offset-1 position-relative">
                        <ul className="home-git-log-light d-flex gutter gutter-spacious flex-column list-style-none pb-md-12 mb-12">
                          <li className="col-11 col-sm-10 col-lg-12">
                            <div className="js-build-in-trigger d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious pb-9 pb-md-10 mt-6 mt-lg-n6">
                              <div className="col-12 col-lg-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 28 24"
                                  width="28"
                                  aria-hidden="true"
                                  className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="m7.5 6.75c0-.0663.02634-.12989.07322-.17678.04689-.04688.11048-.07322.17678-.07322h8.5c.0663 0 .1299.02634.1768.07322.0469.04689.0732.11048.0732.17678v5.5c0 .0663-.0263.1299-.0732.1768s-.1105.0732-.1768.0732h-3.5c-.1989.0002-.3895.0793-.53.22l-2.72 2.72v-2.19c0-.1989-.07902-.3897-.21967-.5303-.14065-.1407-.33142-.2197-.53033-.2197h-1c-.0663 0-.12989-.0263-.17678-.0732-.04688-.0469-.07322-.1105-.07322-.1768zm.25-1.75c-.46413 0-.90925.18437-1.23744.51256s-.51256.77331-.51256 1.23744v5.5c0 .966.784 1.75 1.75 1.75h.25v1.543c.0001.2881.08561.5697.24571.8092s.38762.4262.65379.5364.55904.1391.84161.0829c.28259-.0562.54209-.1948.74589-.3985l2.574-2.573h3.189c.4641 0 .9092-.1844 1.2374-.5126.3282-.3281.5126-.7733.5126-1.2374v-5.5c0-.46413-.1844-.90925-.5126-1.23744s-.7733-.51256-1.2374-.51256zm12.75 3.75c0-.0663-.0263-.12989-.0732-.17678-.0469-.04688-.1105-.07322-.1768-.07322h-.5c-.1989 0-.3897-.07902-.5303-.21967-.1407-.14065-.2197-.33142-.2197-.53033s.079-.38968.2197-.53033c.1406-.14065.3314-.21967.5303-.21967h.5c.966 0 1.75.784 1.75 1.75v5.5c0 .4641-.1844.9092-.5126 1.2374s-.7733.5126-1.2374.5126h-.25v1.543c-.0001.2881-.0856.5697-.2457.8092s-.3876.4262-.6538.5364-.559.1391-.8416.0829-.5421-.1948-.7459-.3985l-2.293-2.293c-.0737-.0687-.1328-.1515-.1738-.2435s-.063-.1913-.0648-.292.0168-.2007.0545-.2941.0938-.1782.1651-.2494c.0712-.0713.156-.1274.2494-.1651s.1934-.0563.2941-.0545.2.0238.292.0648.1748.1001.2435.1738l2.22 2.22v-2.19c0-.1989.079-.3897.2197-.5303.1406-.1407.3314-.2197.5303-.2197h1c.0663 0 .1299-.0263.1768-.0732s.0732-.1105.0732-.1768z"
                                    fill="#dadfe9"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>

                                <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg text-semibold mb-4 col-5-max">
                                  <span className="text-gray-dark-mktg">
                                    GitHub Discussions is dedicated space for
                                    your community to come together, ask and
                                    answer questions, and have open-ended
                                    conversations.
                                  </span>
                                </h3>
                                <a
                                  className="link-mktg text-semibold color-fg-default py-1 f3-mktg link-emphasis-mktg"
                                  href="https://docs.github.com/discussions"
                                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn how to get started with Discussions","label":"ref_page:/;ref_cta:Learn how to get started with Discussions;ref_loc:community launchpad","originating_url":"https://github.com/","user_id":null}}'
                                  data-hydro-click-hmac="ec9ac5ea40c0b15f2acf34fedc199d7c2909da72d847d9a460a605d072f5a3fb"
                                  data-analytics-event='{"category":"Home","action":"click to learn how to get started with Discussions","label":"ref_page:/;ref_cta:Learn how to get started with Discussions;ref_loc:community launchpad"}'
                                >
                                  Learn how to get started with Discussions{" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="octicon arrow-symbol-mktg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    ></path>
                                    <path
                                      className="octicon-chevrow-stem"
                                      stroke="currentColor"
                                      d="M1.75 8H11"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    ></path>
                                  </svg>
                                </a>
                              </div>

                              <div className="col-12 col-lg-5 offset-lg-1">
                                <div className="js-build-in-item home-discussions-comp position-relative">
                                  <div className="rounded-2 box-shadow-default-border-mktg position-relative z-1 overflow-hidden home-discussions-1">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/community-discussions-1.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/community-discussions-1.png"
                                        className="opacity-4 width-full height-auto"
                                        alt="Technical question from the Gatsby community"
                                        loading="lazy"
                                        width="808"
                                        height="480"
                                      />
                                    </picture>
                                  </div>

                                  <div className="rounded-2 box-shadow-active-mktg position-relative z-1 float-right home-discussions-2">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/discussions-answered-check.svg"
                                      className="home-discussions-check-0 js-build-in-item position-absolute z-1"
                                      alt="Answered checkmark"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/discussions-check.svg"
                                      className="home-discussions-check-1 js-build-in-item position-absolute z-1"
                                      alt="Floating checkmark"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/discussions-check.svg"
                                      className="home-discussions-check-2 js-build-in-item position-absolute z-1"
                                      alt="Floating checkmark"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/discussions-check.svg"
                                      className="home-discussions-check-3 js-build-in-item position-absolute z-1"
                                      alt="Floating checkmark"
                                      loading="lazy"
                                    />

                                    <div className="rounded-2 float-right home-discussions-answer overflow-hidden">
                                      <picture>
                                        <source
                                          srcSet="https://github.githubassets.com/images/modules/site/home/community-discussions-2.webp"
                                          type="image/webp"
                                        />
                                        <img
                                          src="https://github.githubassets.com/images/modules/site/home/community-discussions-2.png"
                                          className="width-full height-auto"
                                          alt="Answer to the technical question from the Gatsby community"
                                          style={{minWidth: "10px"}}
                                          loading="lazy"
                                          width="768"
                                          height="792"
                                          decoding="async"
                                        />
                                      </picture>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="col-11 col-sm-10 col-lg-12">
                            <div className="js-build-in-trigger d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious py-9">
                              <div className="col-12 col-lg-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="24"
                                  viewBox="0 0 28 24"
                                  width="28"
                                  aria-hidden="true"
                                  className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d="m7.5 12c0-1.7239.68482-3.37721 1.90381-4.59619 1.21899-1.21899 2.87229-1.90381 4.59619-1.90381s3.3772.68482 4.5962 1.90381c1.219 1.21898 1.9038 2.87229 1.9038 4.59619s-.6848 3.3772-1.9038 4.5962-2.8723 1.9038-4.5962 1.9038-3.3772-.6848-4.59619-1.9038-1.90381-2.8723-1.90381-4.5962zm6.5-8c-2.1217 0-4.15656.84285-5.65685 2.34315-1.5003 1.50029-2.34315 3.53512-2.34315 5.65685 0 2.1217.84285 4.1566 2.34315 5.6569 1.50029 1.5002 3.53515 2.3431 5.65685 2.3431s4.1566-.8429 5.6569-2.3431c1.5002-1.5003 2.3431-3.5352 2.3431-5.6569 0-2.12173-.8429-4.15656-2.3431-5.65685-1.5003-1.5003-3.5352-2.34315-5.6569-2.34315zm-3 8c.2652 0 .5196-.1054.7071-.2929s.2929-.4419.2929-.7071-.1054-.5196-.2929-.7071-.4419-.2929-.7071-.2929-.5196.1054-.7071.2929-.2929.4419-.2929.7071.1054.5196.2929.7071.4419.2929.7071.2929zm7-1c0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929-.5196-.1054-.7071-.2929-.2929-.4419-.2929-.7071.1054-.5196.2929-.7071.4419-.2929.7071-.2929.5196.1054.7071.2929.2929.4419.2929.7071zm-6.68 2.636c.1613-.113.3606-.1579.5549-.1252.1942.0327.3677.1406.4831.3002l.007.009c.1028.118.2205.2221.35.31.264.178.683.37 1.285.37s1.02-.192 1.285-.371c.1295-.0879.2472-.192.35-.31l.007-.008c.1154-.1621.2904-.2716.4865-.3046.1962-.033.3975.0132.5595.1286s.2716.2904.3046.4865c.033.1962-.0132.3975-.1286.5595l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019c-.0562.0753-.1177.1464-.184.213-.1607.1664-.3383.3155-.53.445-.6298.4184-1.3709.6376-2.127.629-.946 0-1.652-.308-2.126-.63-.2508-.1697-.4772-.3729-.673-.604-.0143-.0174-.0283-.0351-.042-.053l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43c-.114-.1628-.1588-.3641-.1245-.5599.0343-.1957.1449-.3698.3075-.4841z"
                                    fill="#dadfe9"
                                    fillRule="evenodd"
                                  ></path>
                                </svg>

                                <h3 className="js-build-in-item build-in-slideX-left f2-mktg text-gray-mktg text-semibold mb-5 col-5-max">
                                  <span className="text-gray-dark-mktg">
                                    {" "}
                                    Amplify your voice in your own personal
                                    README on your profile.
                                  </span>
                                  Tell the story of your work through your
                                  repositories, contributions, and technologies
                                  of choice.
                                </h3>
                              </div>

                              <div className="col-12 col-lg-5 offset-lg-1">
                                <div className="js-build-in-item home-readme-comp">
                                  <div className="rounded-2 box-shadow-default-border-mktg position-relative z-1 overflow-hidden home-readme-1">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/community-readme-1.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/community-readme-1.png"
                                        className="width-full height-auto opacity-4"
                                        alt="GitHub profile README for @M0nica"
                                        loading="lazy"
                                        width="766"
                                        height="748"
                                      />
                                    </picture>
                                  </div>

                                  <div className="rounded-2 box-shadow-active-border-mktg position-relative z-1 overflow-hidden float-right home-readme-2">
                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/community-readme-2.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/community-readme-2.png"
                                        className="width-full height-auto"
                                        alt="GitHub profile README for @ethomson"
                                        loading="lazy"
                                        width="766"
                                        height="730"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li
                            className="col-12 d-flex flex-items-center position-relative f5-mktg text-gray-light-mktg py-2 unselectable"
                            aria-hidden="true"
                          >
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                              className="home-git-item color-bg-default flex-shrink-0 mr-3 position-relative z-1"
                              height="22"
                              width="28"
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <img
                              src="https://avatars.githubusercontent.com/sophshep?s=64&amp;v=4"
                              className="d-none d-sm-block flex-shrink-0 avatar avatar-4 mr-3 circle color-bg-subtle"
                              alt="@sophshep"
                              loading="lazy"
                            />
                            <span className="text-truncate">
                              <strong className="text-semibold text-gray-dark-mktg">
                                sophshep
                              </strong>
                              started sponsoring you for{" "}
                              <strong className="text-semibold text-gray-dark-mktg">
                                $10/month
                              </strong>{" "}
                              <span
                                title="Label: 2x"
                                data-view-component="true"
                                className="Label"
                              >
                                2x
                              </span>{" "}
                              3 days ago
                            </span>
                          </li>

                          <li
                            className="col-12 d-flex flex-items-center position-relative f5-mktg text-gray-light-mktg py-2 unselectable"
                            aria-hidden="true"
                          >
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                              className="home-git-item color-bg-default flex-shrink-0 mr-3 position-relative z-1"
                              height="22"
                              width="28"
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <img
                              src="https://avatars.githubusercontent.com/joshaber?s=64&amp;v=4"
                              className="d-none d-sm-block flex-shrink-0 avatar avatar-4 mr-3 circle color-bg-subtle"
                              alt="@joshaber"
                              loading="lazy"
                            />
                            <span className="text-truncate">
                              <strong className="text-semibold text-gray-dark-mktg">
                                joshaber
                              </strong>
                              started sponsoring you for{" "}
                              <strong className="text-semibold text-gray-dark-mktg">
                                $10/month
                              </strong>{" "}
                              <span
                                title="Label: 5x"
                                data-view-component="true"
                                className="Label"
                              >
                                5x
                              </span>{" "}
                              2 days ago
                            </span>
                          </li>

                          <li
                            className="col-12 d-flex flex-items-center position-relative f5-mktg text-gray-light-mktg py-2 unselectable"
                            aria-hidden="true"
                          >
                            <img
                              src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                              className="home-git-item color-bg-default flex-shrink-0 mr-3 position-relative z-1"
                              height="22"
                              width="28"
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <img
                              src="https://avatars.githubusercontent.com/pmarsceill?s=64&amp;v=4"
                              className="d-none d-sm-block flex-shrink-0 avatar avatar-4 mr-3 circle color-bg-subtle"
                              alt="@pmarsceill"
                              loading="lazy"
                            />
                            <span className="text-gray-mktg text-truncate">
                              <strong className="text-semibold text-gray-dark-mktg">
                                pmarsceill
                              </strong>{" "}
                              started sponsoring you for
                              <strong className="text-semibold text-gray-dark-mktg">
                                $25/month
                              </strong>{" "}
                              2 days ago
                            </span>
                          </li>

                          <li className="col-11 col-sm-10 col-lg-12 position-relative z-1">
                            <div className="js-build-in-trigger d-flex flex-column flex-lg-row flex-items-center gutter gutter-spacious py-9 py-md-10">
                              <div className="js-build-in-item build-in-slideX-left col-12 col-lg-5 mb-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="28"
                                  viewBox="0 0 28 20"
                                  width="28"
                                  aria-hidden="true"
                                  className="home-git-icon home-git-item float-left mr-n6 position-relative z-1"
                                >
                                  <circle
                                    cx="14"
                                    cy="10"
                                    fill="#fff"
                                    r="5"
                                    stroke="#d0d6df"
                                    strokeWidth="2"
                                  ></circle>
                                </svg>

                                <h3 className="f2-mktg text-gray-mktg text-semibold mb-5 col-5-max">
                                  That open source code you wrote for yourself
                                  might just help someone else.{" "}
                                  <span className="text-gray-dark-mktg">
                                    Get paid for building what matters to you
                                    with GitHub Sponsors.
                                  </span>
                                </h3>

                                <h4 className="f4-mktg text-semibold text-gray-mktg mb-1">
                                  Support the projects you depend on, too.
                                </h4>
                                <h3 className="h5-mktg mb-5 text-gradient-blue-purple">
                                  100% to developers, zero fees
                                </h3>
                                <a
                                  className="link-mktg text-semibold color-fg-default py-1 f4-mktg link-emphasis-mktg"
                                  href="/sponsors"
                                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to learn more about Sponsors","label":"ref_page:/;ref_cta:Learn more about Sponsors;ref_loc:community launchpad","originating_url":"https://github.com/","user_id":null}}'
                                  data-hydro-click-hmac="f37433de227b237b9b008ce3c074a0a01df58649f370226cd9df4aa5ce765337"
                                  data-analytics-event='{"category":"Home","action":"click to learn more about Sponsors","label":"ref_page:/;ref_cta:Learn more about Sponsors;ref_loc:community launchpad"}'
                                >
                                  Learn more about Sponsors{" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="octicon arrow-symbol-mktg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    ></path>
                                    <path
                                      className="octicon-chevrow-stem"
                                      stroke="currentColor"
                                      d="M1.75 8H11"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                    ></path>
                                  </svg>
                                </a>
                              </div>

                              <div className="col-12 col-lg-5 offset-lg-1">
                                <div className="js-build-in-item home-sponsors-comp">
                                  <div className="rounded-2 box-shadow-default-border-mktg position-relative z-1 home-sponsors-1">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-1 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-2 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-3 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />

                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/community-sponsor-1.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/community-sponsor-1.png"
                                        className="width-full height-auto opacity-4"
                                        alt="GitHub profile card for the Homebrew organization"
                                        loading="lazy"
                                        width="768"
                                        height="484"
                                      />
                                    </picture>
                                  </div>

                                  <div className="rounded-2 box-shadow-active-border-mktg position-relative z-1 float-right home-sponsors-2">
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-1 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-2 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />
                                    <img
                                      src="https://github.githubassets.com/images/modules/site/home/icons/heart.svg"
                                      width="72"
                                      height="72"
                                      className="home-sponsors-heart-3 js-build-in-item position-absolute z-1"
                                      alt="Floating heart"
                                      loading="lazy"
                                    />

                                    <picture>
                                      <source
                                        srcSet="https://github.githubassets.com/images/modules/site/home/community-sponsor-2.webp"
                                        type="image/webp"
                                      />
                                      <img
                                        src="https://github.githubassets.com/images/modules/site/home/community-sponsor-2.png"
                                        className="width-full height-auto"
                                        alt="GitHub profile card for @prophen"
                                        loading="lazy"
                                        width="768"
                                        height="524"
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="bg-gray-dark-mktg pb-11 pb-md-12 position-relative"
                data-color-mode="dark"
                data-light-theme="light"
                data-dark-theme="dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1680 40"
                  aria-hidden="true"
                  className="position-absolute top-0 width-full mt-n1"
                  style={{transform: "scaleY(-1)"}}
                >
                  <path
                    d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
                    fill="#fff"
                  ></path>
                </svg>

                <div className="container-xl p-responsive">
                  <picture>
                    <source
                      srcSet="https://github.githubassets.com/images/modules/site/home/footer-illustration.webp"
                      media="(min-width: 700px)"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://github.githubassets.com/images/modules/site/home/footer-illustration-894.webp"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://github.githubassets.com/images/modules/site/home/footer-illustration.svg"
                      media="(min-width: 700px)"
                      type="image/svg"
                    />
                    <source
                      srcSet="https://github.githubassets.com/images/modules/site/home/footer-illustration-894.svg"
                      type="image/svg"
                    />
                    <img
                      src="https://github.githubassets.com/images/modules/site/home/footer-illustration.svg"
                      alt="Illustration of the evolution of development by octocats"
                      width="2900"
                      height="1494"
                      className="home-footer-illustration height-auto position-relative z-1 width-full d-block events-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>

                  <div className="d-flex flex-items-center flex-column flex-lg-row gutter gutter-spacious">
                    <div className="col-12 col-md-10 col-lg-6 mx-auto mx-lg-0 text-center text-lg-left mb-5 mb-md-6">
                      <h2 className="h1-mktg color-fg-default mb-2 mb-sm-3">
                        Make your contribution
                      </h2>
                      <p className="f2-mktg text-gray-light-mktg mr-lg-n4 mb-4 text-normal">
                        Small experiments, inspired inventions, and the software
                        everyone depends on—the code you write on GitHub can
                        reach one codebase or millions.
                      </p>

                      <a
                        className="btn-mktg mr-2 mb-2 width-full width-sm-auto btn-signup-mktg"
                        data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                        data-hydro-click-hmac="b4038888c04767d5d7855db59c476a5f94455e31c8a94c58788e9431bf710c05"
                        data-analytics-event='{"category":"Sign up","action":"click to sign up for account","label":"ref_page:/;ref_cta:Sign up for GitHub;ref_loc:footer launchpad;"}'
                        href="/signup?ref_cta=Sign+up+for+GitHub&amp;ref_loc=footer+launchpad&amp;ref_page=%2F"
                      >
                        Sign up for GitHub
                      </a>

                      <a
                        className="btn-mktg mr-2 mb-2 width-full width-sm-auto btn-muted-mktg"
                        data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Contact Sales","action":"click to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;ref_loc:footer launchpad","originating_url":"https://github.com/","user_id":null}}'
                        data-hydro-click-hmac="c62a9e1d90673366ecd4f5d8a6465f39b40aede4b5c6f11d2138efb5ec10cfa8"
                        data-analytics-event='{"category":"Contact Sales","action":"click to Contact Sales","label":"ref_page:/;ref_cta:Contact Sales;ref_loc:footer launchpad"}'
                        href="https://github.com/enterprise/contact?ref_page=/&amp;ref_cta=Contact%20Sales&amp;ref_loc=footer%20launchpad"
                      >
                        Contact Sales
                      </a>
                    </div>

                    <div className="col-12 col-lg-6 offset-lg-n2">
                      <div className="offset-n1 ml-lg-0 home-featured-repos position-relative">
                        <div className="width-full flex-shrink-0 offset-1 offset-lg-3 d-flex flex-justify-center gutter-condensed gutter-lg py-2 py-lg-3">
                          <div className="col-3">
                            <a
                              href="/tensorflow/tensorflow"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:tensorflow/tensorflow;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="b44f8043e05f3cd9950a54c8404d75824c00f07fd3860f0ac664159f2310a035"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:tensorflow/tensorflow;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/tensorflow?s=64&amp;v=4"
                                  alt="Tensorflow"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  tensorflow/
                                  <span className="color-fg-default">
                                    tensorflow
                                  </span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                An Open Source Machine Learning Framework for
                                Everyone
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="gatsbyjs/gatsby"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:gatsbyjs/gatsby;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="f5007fcf99074e6887156ae507e83be960e5e43af733a5cf53af4bdb043c451e"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:gatsbyjs/gatsby;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/gatsbyjs?s=64&amp;v=4"
                                  alt="Gatsby"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  gatsbyjs/
                                  <span className="color-fg-default">gatsby</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Build blazing fast, modern apps and websites
                                with React
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="home-assistant/core"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:home-assistant/core;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="3babbe8ca0c1da44dfe9533435b4bafd8f8f83716fa0cfe0f5655c91405cf6fd"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:home-assistant/core;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/home-assistant?s=64&amp;v=4"
                                  alt="Home Assistant"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  home-assistant/
                                  <span className="color-fg-default">core</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                🏡 Open source home automation that puts local
                                control and privacy first
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className="width-full offset-lg-2 d-flex flex-justify-center gutter-condensed gutter-lg py-2 py-lg-3">
                          <div className="col-3">
                            <a
                              href="/rust-lang/rust"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:rust-lang/rust;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="963d5990af36c6b6bdce9d3ab87b5adbe98cd1996838035a09e75fac94557eb0"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:rust-lang/rust;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/rust-lang?s=64&amp;v=4"
                                  alt="The Rust Programming Language"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  rust-lang/
                                  <span className="color-fg-default">rust</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Empowering everyone to build reliable and
                                efficient software.
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/flutter/flutter"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:flutter/flutter;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="df92d5e6068363fe30ef1e1fddce1540d0fa9905cc8142eadce6c83cedf19429"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:flutter/flutter;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/flutter?s=64&amp;v=4"
                                  alt="Flutter"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  flutter/
                                  <span className="color-fg-default">flutter</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Flutter makes it easy and fast to build
                                beautiful apps for mobile and beyond.
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/kubernetes/kubernetes"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:kubernetes/kubernetes;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="fa5a2b5132132e90bd4fc1cf7d3590a23ef463eadd17fa8c3bac2cb0d94e80ac"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:kubernetes/kubernetes;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/kubernetes?s=64&amp;v=4"
                                  alt="Kubernetes"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  kubernetes/
                                  <span className="color-fg-default">
                                    kubernetes
                                  </span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Production-Grade Container Scheduling and
                                Management
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className="width-full offset-1 d-flex flex-justify-center gutter-condensed gutter-lg py-2 py-lg-3">
                          <div className="col-3">
                            <a
                              href="/apple/swift"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:apple/swift;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="466f899681561d6b7788fa80747af9a7b7e4b1d2a7b1070223bd52a64699bd61"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:apple/swift;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/apple?s=64&amp;v=4"
                                  alt="Kubernetes"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  apple/
                                  <span className="color-fg-default">swift</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                The Swift Programming Language
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/ansible/ansible"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:ansible/ansible;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="2e9d6f4f317f118cd96010664f931f55210e6e1316ce6173d7eead50f88af62f"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:ansible/ansible;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/ansible?s=64&amp;v=4"
                                  alt="Ansible"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  ansible/
                                  <span className="color-fg-default">ansible</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Ansible is a radically simple IT automation
                                platform.
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/hashicorp/terraform"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:hashicorp/terraform;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="d37837b1b002d20a30c4af647331b098d59db82b41cc6feb7e6b044597d8be29"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:hashicorp/terraform;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/hashicorp?s=64&amp;v=4"
                                  alt="Hashicorp"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  hashicorp/
                                  <span className="color-fg-default">
                                    terraform
                                  </span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                Terraform enables you to safely and predictably
                                create, change, and improve infrastructure.
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className="width-full offset-lg-n1 d-flex flex-justify-center gutter-condensed gutter-lg py-2 py-lg-3">
                          <div className="col-3">
                            <a
                              href="/ohmyzsh/ohmyzsh"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:ohmyzsh/ohmyzsh;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="7d97e2bcd6440f6b6484d5bff82c6ca8b743dc5c30109dc9f3ade09d4d2b2072"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:ohmyzsh/ohmyzsh;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/ohmyzsh?s=64&amp;v=4"
                                  alt="Oh my zsh"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  ohmyzsh/
                                  <span className="color-fg-default">ohmyzsh</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                🙃 A delightful community-driven framework for
                                managing your zsh configuration.
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/facebook/react"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:facebook/react;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="14b4dce268878ea2622984cf2eca57c5c768c0af9909bbb5e0f9dad47ccbcc5f"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:facebook/react;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/facebook?s=64&amp;v=4"
                                  alt="Facebook"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  facebook/
                                  <span className="color-fg-default">react</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                A declarative, efficient, and flexible
                                JavaScript library for building user interfaces.
                              </p>
                            </a>
                          </div>
                          <div className="col-3">
                            <a
                              href="/npm/cli"
                              className="home-repo-card js-home-repo-card d-block p-3 rounded-2 box-shadow-card-border-light-mktg text-gray-light-mktg no-underline"
                              data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:npm/cli;ref_loc:footer launchpad;","originating_url":"https://github.com/","user_id":null}}'
                              data-hydro-click-hmac="129dca2ce2aa600017946bd3e975f752d82fc2e0179a0229a3a5ada8752bc679"
                              data-analytics-event='{"category":"Home","action":"click to go to repository","label":"ref_page:/;ref_cta:npm/cli;ref_loc:footer launchpad;"}'
                              tabIndex="-1"
                            >
                              <div className="d-flex flex-items-center mb-2">
                                <img
                                  src="https://avatars.githubusercontent.com/npm?s=64&amp;v=4"
                                  alt="npm"
                                  className="color-bg-default avatar avatar-5 rounded-2 mr-2"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <p className="f5-mktg text-semibold">
                                  npm/<span className="color-fg-default">cli</span>
                                </p>
                              </div>
                              <p
                                className="f6-mktg mb-0 line-clamp-2"
                                style={{WebkitBoxOrient: "vertical", minHeight: "3em"}}
                              >
                                The package manager for JavaScript
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="footer pt-6 position-relative">
        <div className="container-xl p-responsive">
          <div className="d-flex flex-wrap py-5 mb-5">
            <div className="col-12 col-lg-4 mb-5">
              <a
                href="/"
                data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to home","label":"text:home","originating_url":"https://github.com/","user_id":null}}'
                data-hydro-click-hmac="062d687e04e8668f63bed700cfd9281766aa03a46d1beb6c750d751f692a1442"
                data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
                className="color-fg-default"
                aria-label="Go to GitHub homepage"
              >
                <img
                  className="footer-logo-mktg"
                  src="https://github.githubassets.com/images/modules/site/icons/footer/github-logo.svg"
                  width="84"
                  height="30"
                  loading="lazy"
                  decoding="async"
                  alt="GitHub"
                />
              </a>
            </div>

            <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-lg-0 pl-lg-4">
              <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
                Product
              </h2>

              <ul className="list-style-none color-fg-muted f5">
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to features","label":"text:features","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="056ac9ea7f6f0943a73c3a0bdd62b8736cc5c7900b07e024ad5681d78b2333e7"
                    data-analytics-event='{"category":"Footer","action":"go to features","label":"text:features"}'
                    href="/features"
                  >
                    Features
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to security","label":"text:security","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="e964b12eead5ec74d30308481c7b82e880d80af0f38e476eac35706c31d123ab"
                    data-analytics-event='{"category":"Footer","action":"go to security","label":"text:security"}'
                    href="/security"
                  >
                    Security
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to team","label":"text:team","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="c837c57c10a263a0a6185dced7d2ebd50d7b2243ef430fef412adf7d13ec90bc"
                    data-analytics-event='{"category":"Footer","action":"go to team","label":"text:team"}'
                    href="/team"
                  >
                    Team
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to enterprise","label":"text:enterprise","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="d12313d57ff37325a429f69cac9df1658b1dd329cbddbe5da63c44e883348445"
                    data-analytics-event='{"category":"Footer","action":"go to enterprise","label":"text:enterprise"}'
                    href="/enterprise"
                  >
                    Enterprise
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to customer stories","label":"text:customer stories","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="fbbb75bc349a6f3a5429dd0d8692c831358a47810cceb7264cfba0c6e89d6e49"
                    data-analytics-event='{"category":"Footer","action":"go to customer stories","label":"text:customer stories"}'
                    href="/customer-stories?type=enterprise"
                  >
                    Customer stories
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to the readme project","label":"text:the readme project","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="93f7aa3224260130b1bd77737f1a25a7f751aeaeaa755a8e7d21360887f57254"
                    data-analytics-event='{"category":"Footer","action":"go to the readme project","label":"text:the readme project"}'
                    href="/readme"
                  >
                    The ReadME Project
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to pricing","label":"text:pricing","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="25d0a47f4f121ce6c4d81979345da9cfe2d8e689ccea8312e343acfc41d17039"
                    data-analytics-event='{"category":"Footer","action":"go to pricing","label":"text:pricing"}'
                    href="/pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to resources","label":"text:resources","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="585590386b3e322ed86160325616eee4d59df283422c8430d1c05ba7b1c9a5be"
                    data-analytics-event='{"category":"Footer","action":"go to resources","label":"text:resources"}'
                    href="https://resources.github.com"
                  >
                    Resources
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to roadmap","label":"text:roadmap","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="b8ac3f2418c7af9582603d5df13e91304db3b9d08a55bed6d2b7d22928fb785b"
                    data-analytics-event='{"category":"Footer","action":"go to roadmap","label":"text:roadmap"}'
                    href="https://github.com/github/roadmap"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
              <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
                Platform
              </h2>

              <ul className="list-style-none f5">
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to api","label":"text:api","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="dc1b127c675cb4c442c0da5f104b03b724d822466da3524771fe6c8129b94e55"
                    data-analytics-event='{"category":"Footer","action":"go to api","label":"text:api"}'
                    href="https://docs.github.com"
                  >
                    Developer API
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to partner","label":"text:partner","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="b633fcd775d25e25c3c1cd4df0e31f48d85c37fe88f856b35657e5bc66f7115c"
                    data-analytics-event='{"category":"Footer","action":"go to partner","label":"text:partner"}'
                    href="https://partner.github.com"
                  >
                    Partners
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to atom","label":"text:atom","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="a24e3ba8984093cbe58efb6cec5f6460ec0d1961c308d253ffb29055224416cf"
                    data-analytics-event='{"category":"Footer","action":"go to atom","label":"text:atom"}'
                    href="https://atom.io"
                  >
                    Atom
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to electron","label":"text:electron","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="2cd2a0c59f3a3679df72824368412eaed464d7487ab540ca82e72b22e6a23db2"
                    data-analytics-event='{"category":"Footer","action":"go to electron","label":"text:electron"}'
                    href="https://www.electronjs.org"
                  >
                    Electron
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to desktop","label":"text:desktop","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="2163d337754fdddf505c1afe2538ba25b5576054faa349f924a98c514bfa7e22"
                    data-analytics-event='{"category":"Footer","action":"go to desktop","label":"text:desktop"}'
                    href="https://desktop.github.com/"
                  >
                    GitHub Desktop
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
              <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
                Support
              </h2>

              <ul className="list-style-none f5">
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to help","label":"text:Docs","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="76b82a57ed551afd7a0fcc39b0b87f3880efcdde12348a707ad49267b20f37bd"
                    data-analytics-event='{"category":"Footer","action":"go to help","label":"text:Docs"}'
                    href="https://docs.github.com"
                  >
                    Docs
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to community","label":"text:community","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="8e87abf8ef7db395de951a00dc99ff9557b94532a611a0bedee2fa66068744b1"
                    data-analytics-event='{"category":"Footer","action":"go to community","label":"text:community"}'
                    href="https://github.community"
                  >
                    Community Forum
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to professional services","label":"text:professional services","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="962acbef26b84f92f8cb8d888194c0a5708d194ecfa40b2dc23d1f1ebfda3ca8"
                    data-analytics-event='{"category":"Footer","action":"go to professional services","label":"text:professional services"}'
                    href="https://services.github.com/"
                  >
                    Professional Services
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to learning lab","label":"text:learning lab","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="e509a7c4828183f1f0e1709d83a3967da110f36ab54e011ef20318e928ff9097"
                    data-analytics-event='{"category":"Footer","action":"go to learning lab","label":"text:learning lab"}'
                    href="https://lab.github.com/"
                  >
                    Learning Lab
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to status","label":"text:status","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="6f29b339402ca85e43abb97b31dd26c6e0965e977785df0671364113acc6fe16"
                    data-analytics-event='{"category":"Footer","action":"go to status","label":"text:status"}'
                    href="https://www.githubstatus.com/"
                  >
                    Status
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to contact","label":"text:contact","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="0808433c6c0007191b16f062c37bd14cb56990769caa8c27c343209809ca24a7"
                    data-analytics-event='{"category":"Footer","action":"go to contact","label":"text:contact"}'
                    href="https://support.github.com?tags=dotcom-footer"
                  >
                    Contact GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 col-lg-2 mb-6 mb-md-2 pr-3 pr-md-0 pl-md-4">
              <h2 className="h5 mb-3 text-mono color-fg-muted text-normal">
                Company
              </h2>

              <ul className="list-style-none f5">
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to about","label":"text:about","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="49b1c2d332ada517e4bd5144ce1d63e716150db04bea6a65c2a1d1c01a94c07e"
                    data-analytics-event='{"category":"Footer","action":"go to about","label":"text:about"}'
                    href="https://github.com/about"
                  >
                    About
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to blog","label":"text:blog","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="46d44cef2cb56809d9acbd44b209f06e858f42e2cd2a5bd4d2700533908b51c6"
                    data-analytics-event='{"category":"Footer","action":"go to blog","label":"text:blog"}'
                    href="https://github.blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to careers","label":"text:careers","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="759ef84244a8856c1032be92416f1e74d1146bcdc2a84e13d4720d3e95e496ae"
                    data-analytics-event='{"category":"Footer","action":"go to careers","label":"text:careers"}'
                    href="/about/careers"
                  >
                    Careers
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to press","label":"text:press","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="ce7fd52aaa5c43c8a8de3fff3d69fbf04dd42f398149101c65ce95041e507454"
                    data-analytics-event='{"category":"Footer","action":"go to press","label":"text:press"}'
                    href="/about/press"
                  >
                    Press
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to diversity","label":"text:Inclusion","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="521af16d333e2f5f98f81740ed3c4bf553dde176e87bc57cb56fbae061bae8fe"
                    data-analytics-event='{"category":"Footer","action":"go to diversity","label":"text:Inclusion"}'
                    href="/about/diversity"
                  >
                    Inclusion
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to social impact","label":"text:social impact","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="1275642d50dfcf668e31e9df15a50db40399c276660ad21bdf566c9eef03acb7"
                    data-analytics-event='{"category":"Footer","action":"go to social impact","label":"text:social impact"}'
                    href="https://socialimpact.github.com/"
                  >
                    Social Impact
                  </a>
                </li>
                <li className="lh-condensed mb-3">
                  <a
                    className="Link--secondary"
                    data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to shop","label":"text:shop","originating_url":"https://github.com/","user_id":null}}'
                    data-hydro-click-hmac="e051ea8b498bc28f44e3f8efd32d8245ad64fd723eca5cb1d1676bc7ac84b790"
                    data-analytics-event='{"category":"Footer","action":"go to shop","label":"text:shop"}'
                    href="https://shop.github.com"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="color-bg-subtle">
          <div className="container-xl p-responsive f6 py-4 d-sm-flex flex-justify-between flex-row-reverse flex-items-center">
            <ul className="list-style-none d-flex flex-items-center mb-3 mb-sm-0 lh-condensed-ultra">
              <li className="mr-3">
                <a
                  href="https://twitter.com/github"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to Twitter","label":"text:twitter","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="32f4e67823362b2cb5d508f3651c5cbccaac633bf7ea7a9babc03bd102d96c48"
                  data-analytics-event='{"category":"Footer","action":"go to Twitter","label":"text:twitter"}'
                  className="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"
                    height="18"
                    width="22"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Twitter icon"
                  />
                  <span className="sr-only">GitHub on Twitter</span>
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.facebook.com/GitHub"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to Facebook","label":"text:facebook","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="decbede6e4a382ed8244116992ee47196c38ca863f615155f7bc5d784cf03c3a"
                  data-analytics-event='{"category":"Footer","action":"go to Facebook","label":"text:facebook"}'
                  className="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg"
                    width="18"
                    height="18"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Facebook icon"
                  />
                  <span className="sr-only">GitHub on Facebook</span>
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="https://www.youtube.com/github"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to YouTube","label":"text:youtube","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="491632fdb8fd08ef6cb9dde16e947082178b767a98a591f1470ec90cd46ff0f7"
                  data-analytics-event='{"category":"Footer","action":"go to YouTube","label":"text:youtube"}'
                  className="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg"
                    width="23"
                    height="16"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="YouTube icon"
                  />
                  <span className="sr-only">GitHub on YouTube</span>
                </a>
              </li>
              <li className="mr-3 flex-self-start">
                <a
                  href="https://www.linkedin.com/company/github"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to Linkedin","label":"text:linkedin","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="39940bb4587b15263c8b8bb290a1c3a5a0a6967ef035bfd47ae4f88ec5419c13"
                  data-analytics-event='{"category":"Footer","action":"go to Linkedin","label":"text:linkedin"}'
                  className="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg"
                    width="19"
                    height="18"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="Linkedin icon"
                  />
                  <span className="sr-only">GitHub on LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/github"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to github&apos;s org","label":"text:github","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="769f870d12d08e613a8c959da1fe293fd0432637c29472b253e876340306bd65"
                  data-analytics-event='{"category":"Footer","action":"go to github&apos;s org","label":"text:github"}'
                  className="color-fg-subtle"
                >
                  <img
                    src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                    width="20"
                    height="20"
                    className="d-block"
                    loading="lazy"
                    decoding="async"
                    alt="GitHub mark"
                  />
                  <span className="sr-only">GitHub’s organization on GitHub</span>
                </a>
              </li>
            </ul>

            <ul className="list-style-none d-flex flex-wrap color-fg-muted">
              <li className="mr-3">© 2022 GitHub, Inc.</li>

              <li className="mr-3">
                <a
                  href="https://docs.github.com/en/github/site-policy/github-terms-of-service"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to terms","label":"text:terms","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="a0c8c46b8464b47c2558d5b7ecf4b3e95ff74f0e59042c4a8f47f638bc1a0f59"
                  data-analytics-event='{"category":"Footer","action":"go to terms","label":"text:terms"}'
                  className="Link--secondary"
                >
                  Terms
                </a>
              </li>

              <li className="mr-3">
                <a
                  href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to privacy","label":"text:privacy","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="151e48b36c5df359e6c126d04968bc4c46cf22e128f61155a6abc1478c6a29ec"
                  data-analytics-event='{"category":"Footer","action":"go to privacy","label":"text:privacy"}'
                  className="Link--secondary"
                >
                  Privacy
                </a>
              </li>

              <li className="mr-3">
                <a
                  className="Link--secondary"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to site map","label":"text:site map","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="6efad81924f4d5b85a60ecac124d440f23383e9215664fd291600b1bcbc71f3b"
                  data-analytics-event='{"category":"Footer","action":"go to site map","label":"text:site map"}'
                  href="/site-map"
                >
                  Site Map
                </a>
              </li>

              <li>
                <a
                  className="Link--secondary"
                  data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?","originating_url":"https://github.com/","user_id":null}}'
                  data-hydro-click-hmac="4c48d0cde13bfa68636614d1e2a15db45d4571a4b57167c18d94465a67c5710b"
                  data-analytics-event='{"category":"Footer","action":"go to Git Guides","label":"text:What is Git?"}'
                  href="/git-guides"
                >
                  What is Git?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div
        id="ajax-error-message"
        className="ajax-error-message flash flash-error"
        hidden=""
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="octicon octicon-alert"
        >
          <path
            fillRule="evenodd"
            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
          ></path>
        </svg>
        <button
          type="button"
          className="flash-close js-ajax-error-dismiss"
          aria-label="Dismiss error"
        >
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="octicon octicon-x"
          >
            <path
              fillRule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        </button>
        You can’t perform that action at this time.
      </div>

      <div
        className="js-stale-session-flash flash flash-warn flash-banner"
        hidden=""
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="octicon octicon-alert"
        >
          <path
            fillRule="evenodd"
            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
          ></path>
        </svg>
        <span className="js-stale-session-flash-signed-in" hidden="">
          You signed in with another tab or window. <a href="">Reload</a> to
          refresh your session.
        </span>
        <span className="js-stale-session-flash-signed-out" hidden="">
          You signed out in another tab or window. <a href="">Reload</a> to
          refresh your session.
        </span>
      </div>
      <template id="site-details-dialog">
        <details
          className="details-reset details-overlay details-overlay-dark lh-default color-fg-default hx_rsm"
          open=""
        >
          <summary role="button" aria-label="Close dialog"></summary>
          <details-dialog
            className="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal"
            aria-labelledby="box-title"
          >
            <button
              className="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0"
              type="button"
              aria-label="Close dialog"
              data-close-dialog=""
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-x"
              >
                <path
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </button>
            <div className="octocat-spinner my-6 js-details-dialog-spinner"></div>
          </details-dialog>
        </details>
      </template>

      <div
        className="Popover js-hovercard-content position-absolute"
        style={{display: "none", outline: "none"}}
        tabIndex="0"
      >
        <div
          className="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large"
          style={{width:"360px"}}
        ></div>
      </div>

      <template id="snippet-clipboard-copy-button">
        <div className="zeroclipboard-container position-absolute right-0 top-0">
          <clipboard-copy
            aria-label="Copy"
            className="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay"
            data-copy-feedback="Copied!"
            data-tooltip-direction="w"
          >
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-copy js-clipboard-copy-icon m-2"
            >
              <path
                fillRule="evenodd"
                d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
              ></path>
              <path
                fillRule="evenodd"
                d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"
            >
              <path
                fillRule="evenodd"
                d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
              ></path>
            </svg>
          </clipboard-copy>
        </div>
      </template>

      <div aria-live="polite" className="sr-only"></div>
    </div>
  );
};

export default Github;
