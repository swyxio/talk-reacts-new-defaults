import React, { ConcurrentMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CmodeApp from './client-concurrent/App';
import SmodeApp from './client-sync/App';

function CheckBox({ label, state, handler }) {
  return (
    <label>
      <input type="checkbox" checked={state} onChange={() => handler(label)} />
      {label}
    </label>
  );
}

class App extends React.Component {
  state = { Synchronous: true, Concurrent: false };
  handler = modeName => this.setState({ [modeName]: !this.state[modeName] });
  render() {
    const { Synchronous, Concurrent } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h3 style={{ paddingRight: 10 }}>
            <em>Characters of</em> Stan Lee
          </h3>
          <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
            <CheckBox
              label="Synchronous"
              state={Synchronous}
              handler={this.handler}
            />
            <CheckBox
              state={Concurrent}
              label="Concurrent"
              handler={this.handler}
            />
          </div>
        </div>
        <div className="BiPanel">
          {Synchronous && <SMode />}
          {Concurrent && <CMode />}
        </div>
      </div>
    );
  }
}
function SMode() {
  return (
    <div>
      <SmodeApp />
    </div>
  );
}
function CMode() {
  return (
    <ConcurrentMode>
      <Suspense fallback={<Timer />} maxDuration={0}>
        <CmodeApp />
      </Suspense>
    </ConcurrentMode>
  );
}

// syncMode
ReactDOM.render(<App />, document.getElementById('root'));

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
