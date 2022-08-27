import './App.css';

import minecraftItems from 'minecraft-items';
import { Slot } from './slot';
import React, { Component } from 'react';

export class Search extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    this.setState({
      items: minecraftItems.find('').slice(0,54)
    });
  }
  handleChange = (e) => {
    let search = minecraftItems.find(e.target.value).slice(0,53);
    
    let empty = new Array(54-search.length).fill({empty: true})
    let items = [...search, ...empty];
    console.log(items);
    this.setState({
      items,
    });
  }
  render() {
    return(
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2px'
          }}
        >
          <span>{this.props.title}</span>
          <input
          type="text"
          name="search"
          onChange={this.handleChange}
          />
        </div>
        <div
          id="itemsSearch"
          style={{
            justifyContent: 'center',
          }}
        >
          {this.state.items.map((itm, index) => (
            <div key={index} onClick={() => { if (!itm.empty) this.props.selectedFromSearch(itm) }}>
              <Slot
                selectedSlot={this.props.selectedFromSearch}
                key={index}
                icon={itm.icon}
                isSearch={true}
              />
          </div>
          ))}
        </div>
      </div>
    )
  }

}
