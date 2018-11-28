# Immediate Mode vs Retained Mode (DOM vs JSX)

## Retained Mode - DOM

```js
var el = document.createElement('div');
el.className = 'marker';
const callback = () => {
  el.removeEventListener('click', callback)
})
el.addEventListener('click', callback)
```

- Faster
- Imperative

## Immediate Mode - JSX

```js
<div className="marker" onClick={callback} />
```

- Less Efficient
- Declarative
