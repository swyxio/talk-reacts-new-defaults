import React, { ConcurrentMode } from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import CmodeApp from 'client-concurrent/App';
import SmodeApp from 'client-sync/App';
import { IDXContext } from 'context';
import { unstable_scheduleCallback as defer } from 'scheduler';
function getFromStorage(str, defaultValue) {
  const temp = window.localStorage.getItem('reactsNewDefaults_' + str);
  if (temp) return 'true' === temp;
  else return defaultValue;
}
function setStorage(str, value) {
  window.localStorage.setItem('reactsNewDefaults_' + str, value[str]);
  return value;
}
class App extends React.Component {
  state = { idx: 0 };
  componentDidMount = () => {
    this.setState({
      Synchronous: getFromStorage('Synchronous', true),
      Concurrent: getFromStorage('Concurrent', false)
    });
  };
  onIdx = ({ target: { value } }) =>
    defer(() => this.setState({ idx: Number(value) }));
  handler = modeName =>
    this.setState(setStorage(modeName, { [modeName]: !this.state[modeName] }));
  render() {
    const { Synchronous, Concurrent, idx } = this.state;
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>
          <em>Characters of</em> Stan Lee
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <label>
            <input type="number" value={idx} min="0" onChange={this.onIdx} />-{' '}
            {idx + 2} of 296 characters
          </label>

          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: '3rem'
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
            {Synchronous && <SmodeApp />}
            {Concurrent && <CmodeApp />}
          </div>
        </IDXContext.Provider>
      </div>
    );
  }
}

function CheckBox({ label, state, handler }) {
  return (
    <label>
      <input type="checkbox" checked={state} onChange={() => handler(label)} />
      {label}
    </label>
  );
}

// syncMode
// ReactDOM.render(<App />, document.getElementById('root'));

// concurrentMode
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
