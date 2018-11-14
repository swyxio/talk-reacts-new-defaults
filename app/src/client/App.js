import React, { Component } from 'react';
import Card from '../components/Card';
import { getInfo } from './api';
import { createResource } from './react-cache';

export default function App() {
  return (
    <div className="App">
      <HeroCard id={1} delay={100} />
      <HeroCard id={2} delay={100} />
      <HeroCard id={3} delay={100} />
    </div>
  );
}

const Info = createResource(getInfo);
class HeroCard extends Component {
  // state = null;
  // componentDidMount() {
  //   getInfo(this.props).then(x => this.setState(x));
  // }
  render() {
    // if (!this.state) return '🌀';
    const data = Info.read(this.props);
    return <Card {...data} />;
  }
}

// ❌ Will show three 🌀's
// ❌ Even if the data loads almost instantly
// ❌ UI may jump around if 2 loads before 1 or 3

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
