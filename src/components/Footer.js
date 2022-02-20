import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container is-fluid">
          <div className="content">
            <div className=" column is-11 is-size-7-mobile">
              <div className="columns is-centered">
                <div className="column is-3">
                  <a href="/" className="nuxt-link-active">
                    <img
                      src="https://lucdn.letsupgrade.net/Logo_new_clour_blk_efe1bd0a9d.png"
                      width="150"
                      alt="LetsUpgrade Logo"
                      srcSet=""
                    />
                  </a>
                  <div className="is-size-7 mt-3 is-italic">
                    On a Mission to UpSkill 10 Million People for Tech Industry
                    with Live Instructors and Amazing Community for Upgrading
                    Together
                  </div>
                </div>
                <div className="column">
                  <div className="columns is-mobile is-multiline">
                    <div className="column is-12-mobile  ">
                      <div className="has-text-weight-medium">
                        Programs &amp; Certifications
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey is-active nuxt-link-active"
                          aria-current="page"
                        >
                          JavaScript Essentials Zero to Hero
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          Python Essentials Zero to Hero
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          FullStack Web Development (PGP FS)
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          FullStack Data Science (PGP FS)
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          FullStack Python &amp; Django (PGP FS)
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          FullStack AI, ML &amp; DL (PGP FS)
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          HTML &amp; CSS Zero to Hero
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          Machine Learning Zero to Hero
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          Java Programming Zero to Hero
                        </a>
                        <br />
                      </div>
                      <div className="has-text-white mb-1">
                        <a
                          href=""
                          className="has-text-grey"
                        >
                          Data Visualization using Python Zero to Hero
                        </a>
                        <br />
                      </div>
                    </div>
                    <div className="column is-6-mobile">
                      <div className="has-text-weight-medium">
                        Help &amp; Support
                      </div>
                      <div>
                        <Link
                          to="/community-guidelines"
                          className="has-text-grey"
                        >
                          Community Guidelines
                        </Link>
                        <br />
                      </div>
                      <div>
                        <a href="/" className="has-text-grey">
                          Terms &amp; Conditions
                        </a>
                        <br />
                      </div>
                      <div>
                        <a href="/" className="has-text-grey">
                          Privacy Policy
                        </a>
                        <br />
                      </div>
                      <div>
                        <a href="/" className="has-text-grey">
                          Returns, Refunds &amp; Cancellation Policy
                        </a>
                        <br />
                      </div>
                      <div>
                        <a href="/" className="has-text-grey">
                          Contact Us
                        </a>
                        <br />
                      </div>
                      <div>
                        <a href="/" className="has-text-grey">
                          About Us
                        </a>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="has-text-centered is-size-6 is-size-7-mobile has-text-grey is-unselectable	is-relative mt-4">
          LetsUpgrade EdTech Pvt. Ltd. © 2022
        </div>
        <div className="has-text-centered is-size-5 mt-1 is-size-7-mobile has-text-grey">
          <span>
            <span>
              <a
                href="https://www.youtube.com/c/LetsUpgrade"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-youtube"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://www.facebook.com/LetsUpgrade.in"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-facebook"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://www.instagram.com/letsupgrade.in/"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-instagram"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://twitter.com/LetsUpgrade_in"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-twitter"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://www.linkedin.com/company/letsupgrade-in/mycompany/"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://github.com/LetsUpgrade"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-github"></i>
              </a>
              &nbsp;
            </span>
          </span>
          <span>
            <span>
              <a
                href="https://letsupgrade.medium.com/"
                target="_blank"
                className="has-text-grey"
              >
                <i className="fab fa-medium"></i>
              </a>
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
