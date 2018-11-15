## React's Multi-pass Update Queue

https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactUpdateQueue.js#L10

## Given a queue: `A1 - B2 - C1 - D2`

First render, at priority 1:

```
Base state: ''
  Updates: [A1, C1]           <- Only Priority 1
Result state: 'AC'            <- Committed to the DOM
```

Second render, at priority 2:

```
Base state: 'A'               <- A already rendered in first run
  Updates: [B2, C1, D2]       <- Priority 1 and 2
Result state: 'ABCD'          <- Committed to the DOM
```
