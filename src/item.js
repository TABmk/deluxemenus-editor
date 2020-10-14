import './App.css';

import React, { Component } from 'react';

export class Item extends Component {

  render() {
    return(
      <div className="item">
        <img
          src={`data:image/png;base64, ${this.props.img}`}
          title={this.props.name}
          alt={this.props.name}
        />
        <div className="number">
          {this.props.count}
        </div>
    </div>
    )
  }

}
