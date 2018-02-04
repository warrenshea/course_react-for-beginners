import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor () {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish (fish) {
    // update our state
    const fishes = {...this.state.fishes};
    /* this.state.fishes takes everything from the object and spreads it into the fishes object */
    /* which means it takes a copy of your existing state and puts it into your state */

    // add in our new fish
    const timestamp = Date.now();
    fishes[`fist-${timestamp}`] = fish;
    // set state - the fishes state has changed, update that
    // this.setState({ fishes: fishes }); //old way, next line is ES6 way
    this.setState({ fishes });
  }

  loadSamples () {
    this.setState({
      fishes: sampleFishes
    });
  }
  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> {/* addFish is passed down */}
      </div>
    );
  }
}

export default App;
