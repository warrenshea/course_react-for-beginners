import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

/*
  constructor() {
    super(); //runs React.Component
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    console.log(this); //is now the correct 'this'
  }
*/

  goToStore(event) {
    /*stopped form from submitting*/
    event.preventDefault();
    //grab text from box
    console.log(this.storeInput.value);
    //transition from / to store/id
  }

  render () {
    /* comment */
    return (
      <form action='' className='store-selector' onSubmit={(e) => this.goToStore(e)}>
        {/* this will bind the goToStore 'this' properly */}
        {/*<form action='' className='store-selector' onSubmit={this.goToStore.bind(this)}> */}
        {/* comment */}
        <h2>Please Enter a Store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
        <button type='submit'>Visit Store -></button>
      </form>
    );
  }
}

/* Tells react that StorePicker wants router */
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
