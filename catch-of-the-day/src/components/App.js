import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  constructor () {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount () {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

  addToOrder (key) {
    // update our state
    const order = { ...this.state.order };
    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({ order });
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
                .map(key =>
                  <Fish
                    key={key}
                    index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}
                  />)
            }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
        />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> {/* addFish is passed down */}
      </div>
    );
  }
}

export default App;
