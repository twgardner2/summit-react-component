import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React components</h2>
        <h3 style={{ backgroundColor: this.props.color }}>
          {this.props.message}
        </h3>
      </div>
    );
  }
}
