import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  render() {
    return <p>
      {this.props.message},
      {
        chance.first() == 'Jhon'
        ? "Hello Jhon"
        : "Hello world"
      }
      </p>
  }
}

export default Detail;
