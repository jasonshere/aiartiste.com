import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import { OutboundLink } from "gatsby-plugin-google-analytics";

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  return (
    <footer className="ar-footer is-medium section">
      <div className="container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <div className="summary">
              <Link to="/" className="brand">
                <div className="brand-icon">
                  <img
                    alt="Jason Li"
                    role="presentation"
                    src="/img/site/brand/icon.png"
                  />
                </div>
                <div className="brand-content">
                  <div className="brand-title">Jason Li </div>
                  <div className="brand-subtitle">AI Researcher</div>
                </div>
              </Link>
              <hr className="spacer"></hr>
              <p> {site.siteMetadata.description}</p>
            </div>
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label"> Website </p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about/">About</Link>
                    </li>
                    <li>
                      <Link to="/blog/">Blog</Link>
                    </li>
                    <li>
                      <Link to="/topics/">Topics</Link>
                    </li>
                    <li>
                      <Link to="/contact/">Contact</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy/">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Recommended</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/recommended/stories/">Stories</Link>
                    </li>
                    <li>
                      <Link to="/recommended/videos/">Videos</Link>
                    </li>
                    <li>
                      <Link to="/recommended/services/">Tools & Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Connect with me</p>
                  <ul className="menu-list">
                    <li>
                      <OutboundLink
                        target="_blank"
                        href={`https://www.linkedin.com/in/jie-jason-li-4a1003146/`}
                      >
                        <img
                          role="presentation"
                          src="/img/site/icons/social/linkedin-icon-2.svg"
                          alt="linkedin-logo"
                        />{" "}
                        LinkedIn
                      </OutboundLink>
                    </li>
                    {/* <li>
                      <OutboundLink
                        target="_blank"
                        href={`https://gitlab.com/abhith`}
                      >
                        <img
                          role="presentation"
                          src="/img/site/icons/social/gitlab.svg"
                          alt="gitlab-logo"
                        />{" "}
                        GitLab
                      </OutboundLink>
                    </li> */}
                    {/* <li className="has-margin">
                      <a
                        className="twitter-follow-button"
                        href="https://twitter.com/abhithrajan"
                        data-size="large"
                        data-show-screen-name="false"
                      >
                        Follow @AbhithRajan
                      </a>
                    </li> */}
                    <li className="has-margin">
                      <GitHubButton
                        href="https://github.com/jasonshere"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Follow @Jason on GitHub"
                      >
                        Follow @Jason
                      </GitHubButton>
                    </li>
                    {/* <li className="has-margin">
                      <GitHubButton
                        href="https://github.com/jasonshere"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star Jason on GitHub"
                      >
                        Star
                      </GitHubButton>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
