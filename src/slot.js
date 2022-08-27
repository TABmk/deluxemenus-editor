import './App.css';

import { Item } from './item';
import React, { Component } from 'react';
import McText from 'mctext-react'
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';

export class Slot extends Component {
  slotData = () => <div
    onClick={() => { if (!this.props.isSearch) this.props.selectedSlot(this.props.id) }}
    id={this.props.id}
    className={`slot${this.props.isSelected ? ' selectedSlot' : ''}`}
  >
    <Item
      img={this.props.icon || 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAF0lEQVRIDWMYBaNgFIyCUTAKRsEoQAMACCAAATXQUGAAAAAASUVORK5CYII='}
      count={this.props.amount}
      />
  </div>
  render() {
    return(
      this.props.lore ? <Tooltip
        showArrow={false}
        overlay={
          <McText
            style={{
              fontFamily: "Minecraft",
              whiteSpace: "pre-line"
            }}
            prefix='&'
            randomChars='ABCDEFGHJKLMNOPQRSTUVWXYZ'
          >
            { this.props.lore }
          </McText>
        }
      >
        {this.slotData()}
      </Tooltip> : this.slotData()
    )
  }
}
