import React, { Component } from 'react';
import { render } from 'react-dom';

import Example from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>summit-react-component Demo</h1>
        <Example message={'this is a message'} color={'#efefef'} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
