import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render () {
    /* comment */
    return (
      <form action='' className='store-selector'>
        {/* comment */}
        <h2>Please Enter a Store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()} />
        <button type='submit'>Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
