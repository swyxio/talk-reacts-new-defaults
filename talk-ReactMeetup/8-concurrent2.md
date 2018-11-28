## The other meaning of Concurrent

```js
class App extends PureComponent {
  state = { value: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const data = doExpensiveCalculation(value); // expensive calculation!!!
    return (
      <div className="container">
        <input value={value} onChange={this.handleChange} />
        <Charts data={data} />
      </div>
    );
  }
}
```
