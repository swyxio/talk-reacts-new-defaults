import React, { Component, Suspense } from 'react';
import Card from 'components/Card';
import { getInfo } from 'api/index';
import { createResource } from 'api/react-cache';
import { IDXContext } from 'context';
import Timer from './Timer';

// 🐇🐇🐇🐇🐇🐇
// Concurrent
// 🐇🐇🐇🐇🐇🐇
export default class App extends Component {
  static contextType = IDXContext;
  render() {
    const idx = this.context;
    return (
      <div className="Concurrent App">
        <h3>Concurrent</h3>
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
    if (prevProps.id !== this.props.id) {
      getInfo(this.props).then(x => this.setState(x));
    }
  }
  // cancel fetch when unmount?
  render() {
    if (!this.state) return <Timer />;
    return <Card {...this.state} />;
  }
}

// ✅ one 🌀
// ✅ unless data is cached/loads under maxDuration
// ✅ Only shows when all loaded, no jumps
