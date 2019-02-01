import React, { Component } from 'react';
import './App.css';

import SelfIntro from './components/SelfIntro'
import MainSkills from './components/MainSkills'
import Background from './components/Background'
import Education from './components/Education'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="online-resume">
          <section className="intro-section">
            <SelfIntro />
          </section>
          <div className="line-breaker">
            <hr />
          </div>
          <section className="main-info-session">
            <div className="info-item" >
              <MainSkills />
            </div>
            <div className="info-item" >
              <Background />
              <Education />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
