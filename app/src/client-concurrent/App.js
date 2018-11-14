import React, { Component } from 'react';
import Card from '../components/Card';
import { getInfo } from '../api';
import { createResource } from './react-cache';

export default function App() {
  return (
    <div className="App">
      <h3>Concurrent</h3>
      <HeroCard id={1} delay={100} />
      <HeroCard id={2} delay={100} />
      <HeroCard id={3} delay={100} />
    </div>
  );
}

const Info = createResource(getInfo);
function HeroCard(props) {
  const data = Info.read(props);
  return <Card {...data} />;
}

// ✅ one 🌀
// ✅ unless data is cached/loads under maxDuration
// ✅ Only shows when all loaded, no jumps
