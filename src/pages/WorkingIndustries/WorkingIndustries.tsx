import React from "react";

type Props = {};

export default function WorkingIndustries({}: Props) {
  return (
    <div className="working-industries">
      {/* Popular Services */}
      <section className="popular-services">
        <div className="container">
          <h2>Popular professional services</h2>
          <div className="row">
            {/* <i className="fa fa-chevron-left" aria-hidden="true"></i> */}
            <a href="#">
              <div className="col">
                <div className="item">
                  <img src="./img/jobs/LogoDesign.webp" alt="..." />
                  <div className="title">
                    <p>Build your brand</p>
                    <h4>Logo Design</h4>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="col">
                <div className="item">
                  <img src="./img/jobs/WordPress.webp" alt="..." />
                  <div className="title">
                    <p>Customize your site</p>
                    <h4>WordPress</h4>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="col">
                <div className="item">
                  <img src="./img/jobs/VoiceOver.webp" alt="..." />
                  <div className="title">
                    <p>Share your message</p>
                    <h4>Voice Over</h4>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="col">
                <div className="item">
                  <img src="./img/jobs/VideoExplainer.webp" alt="..." />
                  <div className="title">
                    <p>Engage your audience</p>
                    <h4>Video Explainer</h4>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="col">
                <div className="item">
                  <img src="./img/jobs/SocialMedia.webp" alt="..." />
                  <div className="title">
                    <p>Reach more customers</p>
                    <h4>Social Media</h4>
                  </div>
                </div>
              </div>
            </a>
            {/* <i className="fa fa-chevron-right" aria-hidden="true"></i> */}
          </div>
        </div>
      </section>

      {/* Freelance Info */}
      <section className="freelance-info">
        <div className="container">
          <div className="row">
            {/* col-left */}
            <div className="col">
              <div className="item">
                <h2>A whole world of freelance talent at your fingertips</h2>
                <div className="details">
                  <ul>
                    <div className="detail-item">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <h6>The best for every budget</h6>
                      </li>
                      <p>
                        Find high-quality services at every price point. No
                        hourly rates, just project-based pricing.
                      </p>
                    </div>
                    <div className="detail-item">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <h6>Quality work done quickly</h6>
                      </li>
                      <p>
                        Find the right freelancer to begin working on your
                        project within minutes.
                      </p>
                    </div>
                    <div className="detail-item">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <h6>Protected payments, every time</h6>
                      </li>
                      <p>
                        Always know what you'll pay upfront. Your payment isn't
                        released until you approve the work.
                      </p>
                    </div>
                    <div className="detail-item">
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i>
                        <h6>24/7 support</h6>
                      </li>
                      <p>
                        Questions? Our round-the-clock support team is available
                        to help anytime, anywhere.
                      </p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            {/* col-right */}
            <div className="col">
              <div className="item">
                <img src="./img/Info.webp" alt="..." />
                <div className="play-video">
                  <div className="play-icon">
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </div>
                  <div className="circle-icon">
                    <i className="fa fa-circle" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="marketplace">
        <div className="container">
          <div className="comments">
            <div className="row">
              <div className="col">
                <div className="item">
                  <img src="./img/Teaser.webp" alt="..." />
                  <div className="play-video">
                    <div className="play-icon">
                      <i className="fa fa-play" aria-hidden="true"></i>
                    </div>
                    <div className="circle-icon">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="item">
                  <div className="top d-flex">
                    <p>Kay Kim, Co-Founder</p>
                    <span>
                      <b>rooted</b>
                    </span>
                  </div>
                  <div className="bottom">
                    <p>
                      "It's extremely exciting that Fiverr has freelancers from
                      all over the world — it broadens the talent pool. One of
                      the best things about Fiverr is that while we're sleeping,
                      someone's working."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-marketplace">
            <h2>Explore the marketplace</h2>
            <ul>
              <li>
                <a href="#">
                  <img src="./img/marketplace/graphics.svg" alt="..." />
                  <span>Graphics & Design</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/marketing.svg" alt="..." />
                  <span>Digital Marketing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="./img/marketplace/writing-translation.svg"
                    alt="..."
                  />
                  <span>Writing & Translation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/video-animation.svg" alt="..." />
                  <span>Video & Animation</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/music-radio.svg" alt="..." />
                  <span>Music & Audio</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/programming.svg" alt="..." />
                  <span>Programming & Tech</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/business.svg" alt="..." />
                  <span>Business</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/lifestyle.svg" alt="..." />
                  <span>Lifestyle</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/marketplace/data.svg" alt="..." />
                  <span>Data</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
