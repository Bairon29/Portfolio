import React, { Component } from 'react';

class MainSkills extends Component {
  render() {
    return (
      <div className="MainSkills">
      	<div className="skill-container">
	      	<h3>PROGRAMMING SKILLS</h3>
	      	<div className="skill" >
	      		<h4>HTML5</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color html">
					  90%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>CSS3</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color css">
					  90%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>Javascript</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color js">
					  90%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>NodeJS</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color nodejs">
					  80%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>Java</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color java">
					  90%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>MongoDB</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color mongodb">
					  80%
	      			</div>
	      		</div>
	      	</div>
	      	<div className="skill" >
	      		<h4>Oracle</h4>
	      		<div className="skill-scale-box">
	      			<div className="skill-scale-color oracle">
					  85%
	      			</div>
	      		</div>
	      	</div>
      	</div>

      	<div className="skill-container">
	      	<h3>FRAMEWORKS AND OTHER TECHNOLOGIES</h3>
	      	<div className="skill flex-container" >
	      		<h4>React</h4>
	      		<div className="skill-scale-circle">
	      			<div className="skill-scale-color react"></div>
					<div className="skill-scale-color react"></div>
					<div className="skill-scale-color react"></div>
					<div className="skill-scale-color react"></div>
					<div className="skill-scale-color"></div>
	      		</div>
	      	</div>
			<div className="skill flex-container" >
				<h4>Redux</h4>
				<div className="skill-scale-circle">
					<div className="skill-scale-color redux"></div>
					<div className="skill-scale-color redux"></div>
					<div className="skill-scale-color redux"></div>
					<div className="skill-scale-color"></div>
					<div className="skill-scale-color"></div>
				</div>
			</div>
			<div className="skill flex-container" >
				<h4>Spring MVC</h4>
				<div className="skill-scale-circle">
					<div className="skill-scale-color mvc"></div>
					<div className="skill-scale-color mvc"></div>
					<div className="skill-scale-color mvc"></div>
					<div className="skill-scale-color mvc"></div>
					<div className="skill-scale-color"></div>
				</div>
			</div>
      	</div>

      </div>
    );
  }
}

export default MainSkills;