import React, { Component } from 'react';
import rightIcon from './images/rightIcon.png';

class Background extends Component {
  render() {
    return (
      <div className="Background">

        <div className="back-container">
          <div className="exp-img">
            <img src={rightIcon} alt="Right" />
          </div>
          <div className="back-header">
            <h3>EXPERIENCE</h3>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Senior Manager, Curriculum Design, Social Ventures ​| Per Scholas | Bronx, NY</h4>
            </div>
            <div className="date">
              <h4>June 2017-January 2019</h4>
            </div>
          </div>
          <div className="responsabilities">
            <ul>
              <li>
                <p>Deliver Per Scholas’ Quality Engineering skills training to prepare students for entry-level to mid-level careers in Information Technology</p>
              </li>
              <li>
                <p>Work in collaboration with the Director of Social Ventures and Innovation to identify and continually evaluate and evolve the training as demand and new technologies become available</p>
              </li>
              <li>
                <p>Create and maintain training curricula for approval</p>
              </li>
              <li>
                <p>Provide candidates with insight on career tracks within the field and advise on career opportunities and types of positions that would be commensurate with their skills</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Teacher Assistant Intern | Per Scholas | Bronx, NY</h4>
            </div>
            <div className="date">
              <h4>February 2017-June 2017</h4>
            </div>
          </div>
          <div className="responsabilities">
            <ul>
              <li>
                <p>Helped structure the curriculum of a Web Development Immersive course</p>
              </li>
              <li>
                <p>Taught students the foundations of HTML5/CSS3, JavaScript and Node.js</p>
              </li>
              <li>
                <p>Worked with students individually and in small groups to reinforce the concept and help them complete assignments or projects</p>
              </li>
              <li>
                <p>Built a Hackathon that challenged students’ programming skill level</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Front-End Developer Intern | Wrevel | Brooklyn, NY</h4>
            </div>
            <div className="date">
              <h4>March 2017-April 2017</h4>
            </div>
          </div>
          <div className="responsabilities">
            <ul>
              <li>
                <p>Develop front-end code in a timely and high-quality manner while ensuring a consistent structure in design</p>
              </li>
              <li>
                <p>Populated information into dynamic HTML templates from the database</p>
              </li>
              <li>
                <p>Implemented a live chat room interface utilizing a framework called Meteor</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="exp-collection">
          <div className="title-date">
            <div className="role">
              <div className="col-img">
                <img src={rightIcon} alt="Right" />
              </div>
              <h4>Computer Science Tutor | Kingsborough Community College | Brooklyn NY</h4>
            </div>
            <div className="date">
              <h4>September 2013-June 2015</h4>
            </div>
          </div>
          <div className="responsabilities">
            <ul>
              <li>
                <p>Tutored a small group of students to analyze programs efficiently</p>
              </li>
              <li>
                <p>Assisted students to write readable and well organized C++ code</p>
              </li>
              <li>
                <p>Aided two to three students with homework in Algebra, Trigonometry, Calculus I, and Calculus II</p>
              </li>
              <li>
                <p>Prepared students for final examinations by reviewing topics and creating new challenging problems to enhance their knowledge</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Background;