import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="has-text-weight-normal">
        <nav
          role="navigation"
          aria-label="main navigation"
          className="navbar is-fixed-top is-hidden-desktop"
        >
          <div className="container is-10 column">
            <div className="navbar-brand">
              <a href="/" className="navbar-item nuxt-link-active">
                <span className="b-tooltip is-primary is-bottom is-medium">
                  <div className="tooltip-content" style={{ display: "none" }}>
                    LetsUpgrade Together
                  </div>
                  <div className="tooltip-trigger">
                    <img
                      src="https://lucdn.letsupgrade.net/small_logo_new_0cd08c57ce.png"
                      width="90"
                      alt="LetsUpgrade | Together for Tomorrow"
                      className="navlogo"
                    />
                  </div>
                </span>
              </a>
              <div className="navbar-burger">
                <span></span> <span></span> <span></span>
              </div>
            </div>
          </div>
        </nav>
        <nav
          role="navigation"
          aria-label="main navigation"
          className="navbar is-blured-xl is-transparent is-white is-fixed-top"
        >
          <div className="navbar-brand py-1 pl-6">
            <a href="/" className="nuxt-link-active">
              <span className="b-tooltip is-primary is-bottom is-medium">
                <div className="tooltip-content" style={{ display: "none" }}>
                  LetsUpgrade Together
                </div>
                <div className="tooltip-trigger">
                  <img
                    src="https://lucdn.letsupgrade.net/small_logo_new_0cd08c57ce.png"
                    alt="LetsUpgrade | Together for Tomorrow"
                    width="120"
                    className="navlogo"
                  />
                </div>
              </span>
            </a>
            <div className="navbar-burger">
              <span></span> <span></span> <span></span>
            </div>
          </div>
          <div className="navbar-menu pr-6 itm2">
            <div className="navbar-end">
              <div className="navbar-end">
              <a
                  href="/genieverse"
                  className="navbar-item has-text-weight-medium has-text-black mr-2"
                >
                  GenieVerse
                </a>
                <a
                  href="/community"
                  className="navbar-item has-text-weight-medium has-text-black mr-2"
                >
                  Community
                </a>
                <a
                  href="/programs"
                  className="navbar-item has-text-weight-medium has-text-black mr-2 nuxt-link-active"
                >
                  Programs
                </a>
              </div>
              <a
                href="/login?r=%2Fprograms%2Fessentials-javascript-programming"
                className="navbar-item"
              >
                <div className="button is-black is-rounded has-text-weight-normal">
                  Sign In
                </div>
              </a>
              <a href="/register" className="navbar-item">
                <div className="button is-outlined is-black is-rounded has-text-weight-normal">
                  Sign Up
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
