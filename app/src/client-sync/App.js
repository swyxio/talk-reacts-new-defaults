import React, { Component } from 'react';
import Card from '../components/Card';
import { getInfo } from '../api';

export default function App() {
  return (
    <div className="App">
      <h3>Synchronous</h3>
      <HeroCard id={1} delay={100} />
      <HeroCard id={2} delay={100} />
      <HeroCard id={3} delay={100} />
    </div>
  );
}

class HeroCard extends Component {
  state = null;
  componentDidMount() {
    getInfo(this.props).then(x => this.setState(x));
  }
  render() {
    if (!this.state) return '🌀';
    return <Card {...this.state} />;
  }
}

// ❌ Will show three 🌀's
// ❌ Even if the data loads almost instantly
// ❌ UI may jump around based on loading
