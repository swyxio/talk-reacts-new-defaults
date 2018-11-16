import React, { Component } from 'react';
import Card from 'components/Card';
import { getInfo } from 'api';
import { IDXContext } from 'context';
import Timer from './Timer';

// 🐌🐌🐌🐌🐌🐌🐌
// Synchronous
// 🐌🐌🐌🐌🐌🐌🐌
export default class App extends Component {
  static contextType = IDXContext;
  render() {
    const idx = this.context;
    return (
      <div className="Synchronous App">
        <h3>Synchronous</h3>
        <HeroCard id={idx} delay={100} />
        <HeroCard id={idx + 1} delay={1000} />
        <HeroCard id={idx + 2} delay={100} />
      </div>
    );
  }
}

class HeroCard extends Component {
  state = null;
  componentDidMount() {
    getInfo(this.props).then(x => this.setState(x));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id)
      getInfo(this.props).then(x => this.setState(x));
  }
  componentWillMount() {
    // cancel fetch when unmount?
    // ????
  }
  render() {
    if (!this.state) return <Timer />;
    return <Card {...this.state} />;
  }
}

// ❌ Will show three 🌀's
// ❌ Even if the data loads almost instantly
// ❌ UI may jump around based on loading
