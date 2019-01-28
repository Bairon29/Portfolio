import React, { Component } from 'react';
import me from './images/me.jpg'

class SelfIntro extends Component {
  render() {
    return (
      <div className="SelfIntro">
      	<div className="img-container">
      		<img src={me} alt="Professional" />
      	</div>
      	<div className="title">
      		<h1>Bairon J. Vasquez</h1>
      		<h3>Software Engineer</h3>
      	</div>
      	<div className="contact-info">
      		<div className="spe-contact-info">
      			<span>Email:</span>
      			<p>baironvasquez29@gmail.com</p>
      		</div>
      		<div className="spe-contact-info">
      			<span>LinkedIn:</span>
      			<a href="https://www.linkedin.com/in/bairon-jvasquez/" >LinkedIn Account</a>
      		</div>
      	</div>
      </div>
    );
  }
}

export default SelfIntro;