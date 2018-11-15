import React, { ConcurrentMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import CmodeApp from 'client-concurrent/App';
import SmodeApp from 'client-sync/App';
import { IDXContext } from 'context';
import Timer from './Timer';

function CheckBox({ label, state, handler }) {
  return (
    <label>
      <input type="checkbox" checked={state} onChange={() => handler(label)} />
      {label}
    </label>
  );
}

class App extends React.Component {
  state = { Synchronous: true, Concurrent: false, idx: 0 };
  onIdx = e => this.setState({ idx: Number(e.target.value) });
  handler = modeName => this.setState({ [modeName]: !this.state[modeName] });
  render() {
    const { Synchronous, Concurrent, idx } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <h3 style={{ paddingRight: 10 }}>
              <em>Characters of</em> Stan Lee
            </h3>
            <label>
              <input type="number" value={idx} min="0" onChange={this.onIdx} />-{' '}
              {idx + 2} of 296 characters
            </label>
          </div>
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
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
        <IDXContext.Provider value={idx}>
          <div className="BiPanel">
            {Synchronous && <SMode />}
            {Concurrent && <CMode />}
          </div>
        </IDXContext.Provider>
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
      <Suspense fallback={<Timer />} unstable_maxDuration={1000}>
        <CmodeApp />
      </Suspense>
    </ConcurrentMode>
  );
}

// // syncMode
// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
