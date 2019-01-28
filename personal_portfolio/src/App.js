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
        <section className="intro-section">
          <SelfIntro />
        </section>
        <section className="main-info-session">
          <MainSkills />
          <Background />
          <Education />
        </section>
      </div>
    );
  }
}

export default App;
