import React, { Suspense } from 'react';
import Card from 'components/Card';
import { getInfo } from 'api';
import { createResource } from './react-cache';
import { IDXContext } from 'context';
import Timer from './Timer';

// 🐇🐇🐇🐇🐇🐇
// Concurrent
// 🐇🐇🐇🐇🐇🐇
export default function App() {
  const idx = React.useContext(IDXContext);
  return (
    <div className="Concurrent App">
      <Suspense fallback={<Timer />}>
        <h3>Concurrent</h3>
        <HeroCard id={idx} delay={100} />
        <HeroCard id={idx + 1} delay={100} />
        <HeroCard id={idx + 2} delay={100} />
      </Suspense>
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
