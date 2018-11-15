import React from 'react';
import ReactDOM from 'react-dom';

export default function Timer() {
  const startTime = React.useRef(performance.now());
  const [time, setTime] = React.useState(performance.now());
  React.useEffect(() => {
    const id = setTimeout(() => {
      // ReactDOM.flushSync(() => {
      setTime(performance.now());
      // });
    }, 2);
    return () => clearTimeout(id);
  });
  return (
    <div className="Fallback">
      <h3>🌀 App Level Suspense</h3>
      <b>{Math.round(time - startTime.current)} ms</b>
    </div>
  );
}
