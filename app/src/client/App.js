import React, { Component } from 'react';
import Card from './components/Card';
import { getInfo } from './api';

export default function App() {
  return (
    <div className="App">
      <HeroCard id={1} delay={200} />
      <HeroCard id={2} delay={2000} />
      <HeroCard id={3} delay={200} />
    </div>
  );
}

class HeroCard extends Component {
  state = null;
  componentDidMount() {
    getInfo(this.props).then(x => this.setState(x));
  }
  render() {
    if (!this.state) return '🌀';
    return <Card {...this.state} />;
  }
}

// class App extends Component {
//   state = null;
//   componentDidMount = () => {
//     this.handleClick();
//   };

//   handleClick = () => {
//     getList({ delay: 0, idx: 0 }).then(
//       json => console.log(json) || this.setState(json)
//     );
//   };

//   render() {
//     if (!this.state) return 'loading...';
//     const { data, count } = this.state;
//     return (
//       <div className="App">
//         <button onClick={this.handleClick}>'Load data'</button>
//         <br />
//         <p>
//           Showing first 3 of {count} characters by <b>Stan Lee</b>
//         </p>
//         {data.map((item, i) => (
//           <Card {...item} key={i} />
//         ))}
//       </div>
//     );
//   }
// }
