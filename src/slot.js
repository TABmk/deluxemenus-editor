import './App.css';

import { Item } from './item';
import React, { Component } from 'react';

export class Slot extends Component {
  render() {
    return(
      <div
        onClick={() => { if (!this.props.isSearch) this.props.selectedSlot(this.props.id) }}
        id={this.props.id}
        className={`slot${this.props.isSelected ? ' selectedSlot' : ''}`}
      >
        <Item
          img={this.props.icon || 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAF0lEQVRIDWMYBaNgFIyCUTAKRsEoQAMACCAAATXQUGAAAAAASUVORK5CYII='}
          count={this.props.amount}
        />
      </div>
    )
  }
}
