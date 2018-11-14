import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // concurrentMode
root.render(
  <div>
    <Suspense fallback={<Timer />} maxDuration={0}>
      <h3 style={{ textAlign: 'center' }}>
        <em>Characters of</em> Stan Lee
      </h3>
      <App />
    </Suspense>
  </div>
);

function Timer() {
  const startTime = React.useRef(performance.now());
  const [time, setTime] = React.useState(performance.now());
  React.useEffect(() => {
    const id = setTimeout(() => {
      ReactDOM.flushSync(() => {
        setTime(performance.now());
      });
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

// syncMode
// ReactDOM.render(<App />, document.getElementById('root'));
