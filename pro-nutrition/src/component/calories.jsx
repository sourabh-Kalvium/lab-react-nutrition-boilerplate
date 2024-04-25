import React, { Component } from 'react';

export default class Calories extends Component {
  render() {
    const { name, count, calories } = this.props;
    return (
      <div>
        <p>
          <span>{count}</span> {name} = <span>{calories}</span> Calories
        </p>
      </div>
    );
  }
}
