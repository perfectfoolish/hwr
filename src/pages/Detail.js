import React from 'react';
import Chance from 'chance';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    const people = [];

    for (let i = 0; i < 10; i++) {
      people.push({
        name: chance.first(),
        country: chance.country({ full: name })
      });
    }

    this.state = { people }
  }
  buttonClicked() {
    const newState = {
      name: chance.first()
    };
    this.setState(newState);
  }
  render() {
    return(
      <div>
        {this.state.people.map((person, index) => (
          <p key={index}>Hello, {person.name} from {person.country}!</p>
        ))}
      </div>
    )
  }
}

export default Detail;
