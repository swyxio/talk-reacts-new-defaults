import React from 'react';

export function TimerComponent({ time }) {
  return (
    <div className="Fallback">
      <h3>
        <span role="img" aria-label="spinner">
          🌀 App Level Suspense
        </span>
      </h3>
      <b>{time} ms</b>
    </div>
  );
}
