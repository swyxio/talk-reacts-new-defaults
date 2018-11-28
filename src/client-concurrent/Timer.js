import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TimerComponent } from 'components/TimerComponent';

// 🐇🐇🐇🐇🐇🐇
// Hooks
// 🐇🐇🐇🐇🐇🐇
export default function Timer() {
  const startTime = React.useRef(performance.now());
  const [time, setTime] = React.useState(performance.now());
  React.useEffect(() => {
    const id = setTimeout(() => {
      ReactDOM.flushSync(() => {
        setTime(performance.now());
      });
    });
    return () => clearTimeout(id);
  });
  const _time = Math.round(time - startTime.current);
  return <TimerComponent time={_time} />;
}

// export default function Timer() {
//   const startTime = React.useRef(performance.now());
//   const [time, setTime] = React.useState(performance.now());
//   React.useEffect(() => {
//     const id = setTimeout(() => {
//       ReactDOM.flushSync(() => {
//         setTime(performance.now());
//       });
//     }, 0);
//     return () => clearTimeout(id);
//   });
//   const _time = Math.round(time - startTime.current);
//   return <TimerComponent time={_time} />;
// }
