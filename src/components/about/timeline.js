import React, { Component } from "react";
import { FaFlag } from "react-icons/fa";

export default class Timeline extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="divider is-centered"></div>
          <h2 className="title is-semibold has-text-centered is-spaced">
            Career Path
          </h2>
          <h4 className="subtitle is-6 has-text-centered is-compact">
            An overview of my career timeline shown below.
          </h4>

          <div className="timeline is-centered mt-3">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Now</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                February 2020
                </p>
                <p>Ph.D. Candidate at RMIT - Recommender System Algorithms</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2020</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  December 2019
                </p>
                <p>First-Class Honours Bachelor of Computer Science at RMIT - Recommender System Algorithms</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2019</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  December 2018
                </p>
                <p>Bachelor of Information Technology at RMIT - Information Technology</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  November 2018
                </p>
                <p>Loyalty Corp (Part-Time) - Senior PHP Developer</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  August 2018
                </p>
                <p>DotDev (Part-Time) - PHP Developer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2018</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  September 2017
                </p>
                <p>Came to Australia</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2017</span>
            </header>
            <div className="timeline-item">
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2016</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  July 2015
                </p>
                <p>Qihoo 360 Technology Co. Ltd. — Senior Software Engineer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2015</span>
            </header>
            <div className="timeline-item"></div>
            <header className="timeline-header">
              <span className="tag is-primary">2014</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  October 2013
                </p>
                <p>
                  Beijing Danei Technology Co. Ltd. — Senior PHP Lecture
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2013</span>
            </header>
            <div className="timeline-item"></div>
            <header className="timeline-header">
              <span className="tag is-primary">2012</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  June 2011
                </p>
                <p>
                  Beijing Yidiyou Technology Co. Ltd. — Senior PHP Lecture
                </p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
