import React from 'react';

const Refer = () => {
  return (
  <div>
      <section className="section" style={{marginTop: "-50px"}}>
            <div className="container is-fluid">
              <div className="card is-relative is-clipped is-shadowless has-background-info-light has-text-black has-radius-full w-auto">
                <div className="card-content">
                  <div className="columns">
                    <div className="column is-half py-6 pl-5">
                      <div className="title is-size-2 has-text-black is-size-2-mobile">
                        Refer &amp; Earn
                      </div>
                      <div className="is-size-5 mt-1 mb-6 has-text-black has-text-weight-medium">
                        Share the all-new way to get started in Tech Development
                        space and have complete clarity to be a pro developer
                        without spending a Rupee, share this program by visiting
                        the referral page &amp; send a referral link to your
                        friends via SMS / Email / Whatsapp
                      </div>
                      <div className="columns is-mobile is-multiline">
                        <div className="column is-half">
                          <div className="mb-5">
                            <div className="has-text-black has-text-weight-semibold is-size-6">
                              LU COINS
                            </div>
                            <div className="content has-font-14px mt-4 has-text-weight-medium has-text-grey">
                              Earn LU COINS for each refer, and encash them for
                              exciting goodies
                            </div>
                          </div>
                        </div>
                        <div className="column is-half">
                          <div className="mb-5">
                            <div className="has-text-black has-text-weight-semibold is-size-6">
                              Referral Leaderboard
                            </div>
                            <div className="content has-font-14px mt-4 has-text-weight-medium has-text-grey">
                              Top the referral leaderboard, to get monthly cool
                              swags like smart watch, airDopes, &amp; Etc
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column has-text-centered p-0 has-text-left">
                        <a href="/refer" className="">
                          <div
                            id="referEnrollBtn"
                            className="button is-medium is-rounded has-background-primary has-text-white"
                          >
                            Refer &amp; Earn
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column is-half is-hidden-mobile">
                      <img
                        src="https://lucdn.letsupgrade.net/mega_creator_10_81abb6aa0f.webp"
                        loading="lazy"
                        width="532"
                        alt="posted in community"
                        className="image-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  </div>);
};

export default Refer;
