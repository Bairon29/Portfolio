import React, { Component } from 'react';
import rightIcon from './images/rightIcon.png';

class Education extends Component {
  render() {
    return (
      <div className="Background">

        <div className="back-container">
          <div className="exp-img edu-img">
            <img src={rightIcon} alt="Right" />
          </div>
          <div className="back-header">
            <h3>EDUDATION</h3>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img edu-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Computer Science Hunter College, New York, NY</h4>
            </div>
            <div className="date">
              <h4>Expected Graduation December 2019, Bachelor's</h4>
            </div>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img edu-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Mathematics Kingsborough Community College, Brooklyn, NY</h4>
            </div>
            <div className="date">
              <h4>Graduated June 2015, Associate of Science</h4>
            </div>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img edu-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>PerScholas and General Assembly CodeBridge Trainning Course</h4>
            </div>
            <div className="date">
              <h4>September 2016-January 2017, Certificate</h4>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Education;