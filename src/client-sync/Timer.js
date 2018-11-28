import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TimerComponent } from 'components/TimerComponent';

// 🐌🐌🐌🐌🐌🐌🐌
// Classes
// 🐌🐌🐌🐌🐌🐌🐌
export default class Timer extends Component {
  startTime = performance.now();
  state = { time: performance.now() };
  componentDidMount = () => {
    this.timer = setTimeout(() => {
      this.setState({ time: performance.now() });
    });
  };
  componentDidUpdate = () => {
    this.timer = setTimeout(() => {
      this.setState({ time: performance.now() });
    });
  };
  componentWillUnmount = () => {
    if (this.timer) clearTimeout(this.timer);
  };
  render() {
    const time = Math.round(this.state.time - this.startTime);
    return <TimerComponent time={time} />;
  }
}

// export default function Timer() {
//   const startTime = useRef(performance.now());
//   const [time, setTime] = useState(performance.now());
//   useEffect(() => {
//     const id = setTimeout(() => {
//       ReactDOM.flushSync(() => {
//         setTime(performance.now());
//       });
//     }, 0);
//     return () => clearTimeout(id);
//   });
//   return (
//     <div className="Fallback">
//       <h3>
//         <span role="img" aria-label="spinner">
//           🌀 App Level Suspense
//         </span>
//       </h3>
//       <b>{Math.round(time - startTime.current)} ms</b>
//     </div>
//   );
// }
