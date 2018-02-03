import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>{/* Match cannot be a child of BrowserRouter....I guess? */}
        {/* For the root */}
        <Match exactly pattern='/' component={StorePicker} />
        {/* For anything '/store' */}
        <Match pattern='/store/:storeId' component={App} />
        {/* For anything '/store' */}
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

render(<Root />, document.querySelector('#main'));
