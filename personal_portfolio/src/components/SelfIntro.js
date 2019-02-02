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
				<div className="spe-contact-info">
					<p>
						{/* bio */}
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
      </div>
    );
  }
}

export default SelfIntro;