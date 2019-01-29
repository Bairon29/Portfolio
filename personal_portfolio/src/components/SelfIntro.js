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
      		<table className="table-contact-info">
      			<tbody>
	      			<tr>
	      				<td className="odd-col">Email:</td>
	      				<td className="even-col" >baironvasquez29@gmail.com</td>
	      			</tr>
	      			<tr>
	      				<td className="odd-col" >LinkedIn:</td>
	      				<td className="even-col" ><a href="https://www.linkedin.com/in/bairon-jvasquez/" >LinkedIn Account</a></td>
	      			</tr>
      			</tbody>
      		</table>
      		<div className="spe-contact-info">
      			<p>Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default SelfIntro;