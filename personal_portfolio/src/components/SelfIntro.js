import React, { Component } from 'react';
import me from './images/me.jpg'

class SelfIntro extends Component {
  render() {
    return (
      <div className="SelfIntro">
				<div className="contact-info">
					<div className="img-container">
						<img src={me} alt="Professional" />
					</div>
					<div className="mid-use">
					<div className="title">
						<h1>Bairon J. Vasquez</h1>
						<h3>Software Engineer</h3>
					</div>
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
				</div>
				</div>
				<div className="spe-contact-info">
					<p>
						{/* bio */}
						A motivated Jr. Full Stack Developer with strong problem solving and team player capabilities. An
open-minded web designer with an eye for creativity and the ability to adapt to different ideas when
working with a team. Having studied Computer Science, I bring a unique understanding and skills
set to my current work as a Jr. developer, which I’m looking to offer to an innovated team.
					</p>
				</div>
      </div>
    );
  }
}

export default SelfIntro;