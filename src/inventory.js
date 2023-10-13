import './App.css';
import McText from 'mctext-react'
import { Slot } from './slot';
import { Search } from './search';
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import YAML from 'js-yaml';
import Modal from 'react-modal';
import _LANG from './lang/english';
import fileDownload from 'js-file-download';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";

const LANGLIST = ['russian', 'english', 'chinese'];

let LANG = _LANG;
const _lang = localStorage.getItem('lang') || 'english';

let selectLang = async (lang) => {
  if (lang && LANGLIST.includes(lang)) {
    await import(`./lang/${lang}`).then(res => {
      LANG = res.default;
    });
  }
  localStorage.setItem('lang', lang);
}

Modal.setAppElement('#root');

const customStyles = {
  content : {
    width                 : '315px',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    boxShadow: '5px 5px 0px #555555, inset 4px 4px 0px #fefefe',
    background: '#c6c6c6'
  }
};

const fields = () => [
  {
    name: LANG['data'],
    value: 'data',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['amount'],
    value: 'amount',
    extra: false,
    type: 'number',
    tagName: 'input'
  },
  {
    name: LANG['dynamic_amount'],
    value: 'dynamic_amount',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['model_data'],
    value: 'model_data',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['nbt_string'],
    value: 'nbt_string',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['nbt_int'],
    value: 'nbt_int',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['banner_meta'],
    value: 'banner_meta',
    extra: true,
    type: 'text',
    tagName: 'textarea'
  },
  {
    name: LANG['rgb'],
    value: 'rgb',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['base_color'],
    value: 'base_color',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['item_flags'],
    value: 'item_flags',
    extra: true,
    type: 'text',
    tagName: 'textarea'
  },
  {
    name: LANG['potion_effects'],
    value: 'potion_effects',
    extra: true,
    type: 'text',
    tagName: 'textarea'
  },
  {
    name: LANG['entity_type'],
    value: 'entity_type',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['display_name'],
    value: 'display_name',
    extra: false,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['lore'],
    value: 'lore',
    extra: false,
    type: 'text',
    tagName: 'textarea'
  },
  {
    name: LANG['priority'],
    value: 'priority',
    extra: true,
    type: 'number',
    tagName: 'input'
  },
  {
    name: LANG['view_requirement'],
    value: 'view_requirement',
    extra: true,
    type: 'text',
    tagName: 'input'
  },
  {
    name: LANG['enchantments'],
    value: 'enchantments',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['update'],
    value: 'update',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['hide_enchantments'],
    value: 'hide_enchantments',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['hide_attributes'],
    value: 'hide_attributes',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['hide_effects'],
    value: 'hide_effects',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['unbreakable'],
    value: 'unbreakable',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['hide_unbreakable'],
    value: 'hide_unbreakable',
    extra: true,
    type: 'checkbox',
    tagName: 'input'
  },
  {
    name: LANG['left_click_commands'],
    value: 'left_click_commands',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['right_click_commands'],
    value: 'right_click_commands',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['middle_click_commands'],
    value: 'middle_click_commands',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['shift_left_click_commands'],
    value: 'shift_left_click_commands',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['shift_right_click_commands'],
    value: 'shift_right_click_commands',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['left_click_requirement'],
    value: 'left_click_requirement',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['right_click_requirement'],
    value: 'right_click_requirement',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['middle_click_requirement'],
    value: 'middle_click_requirement',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['shift_left_click_requirement'],
    value: 'shift_left_click_requirement',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
  {
    name: LANG['shift_right_click_requirement'],
    value: 'shift_right_click_requirement',
    extra: true,
    type: '',
    tagName: 'textarea'
  },
];

const YAML_DEFAULTS = {
  indent: 2,
  noArrayIndent: false,
  skipInvalid: false,
  flowLevel: -1,
  sortKeys: false,
  lineWidth: 80,
  noRefs: false,
  noCompatMode: false,
  condenseFlow: false,
  quotingType: '\'',
  forceQuotes: false,
};

export class Inventory extends Component {
  state = {
    menu_title: LANG['Menu default title'],
    open_command: 'menu',
    size: 0,
    showModal: true,
    showYAMLOpts: false,
    yamlError: false,
    selected: 0,
    selectedSearch: {},
    items: [],
    currentItem: {
      material: 'none'
    },
    yaml: YAML_DEFAULTS,
  }

  inputRef = React.createRef(null)

  computedMaterial = (id) => {
    if (this.state.items[id]) {
      if (typeof this.state.items[id].material !== 'undefined') {
        return this.state.items[id].material;
      }

      if (typeof this.state.items[id].parent === 'number') {
        return this.state.items[this.state.items[id].parent].material;
      }
    }

    return 'none';
  }

  _changeLang = async (e) => {
    await selectLang(e.value);
    this.forceUpdate();
  }

  componentDidMount() {
    this._changeLang({value: _lang});

    let saved = localStorage.getItem('state');

    if (saved) {
      const old = JSON.parse(saved);
      this.setState(old);
      this.inputRef.current.value = JSON.stringify(old.yaml, null, 4);
      return;
    }

    let elems = [];
    for (let i = this.state.size; i < this.state.size+9; i += 1) {
      elems.push({
        id: i
      })
    }
    this.setState({
      items: elems,
      size: this.state.size + 9,
      currentItem: {
        material: this.computedMaterial(0)
      }
    });
  }
  selectedSlot = (id) => {
    this.setState({
      selected: id,
      showModal: true,
      currentItem: {
        material: this.computedMaterial(id)
      }
    });
  }
  componentDidUpdate(){
    localStorage.setItem('state', JSON.stringify(this.state))
  }

  selectedHead = (itm) => {
    let ar = this.state.items;
    ar[this.state.selected] = {
      id: this.state.selected,
      icon: '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',
    }
    this.setState({
      items: ar,
    })
  }
  selectedFromSearch = (itm, obj) => {
    let ar = this.state.items;
    if (itm === 'copy') {
      let parent = typeof obj.parent === 'number' ? obj.parent : obj.id;
      if (typeof ar[parent].slot === 'number') {
        delete ar[parent].slot;
        ar[parent].slots = [parent];
      }

      ar[parent].slots = [...ar[parent].slots, this.state.selected];

      ar[this.state.selected] = {
        id: this.state.selected,
        parent,
      }
    } else {
      ar[this.state.selected] = {
        id: this.state.selected,
        icon: itm.icon,
        material: itm.name.replace(/ /g, '_').toUpperCase(),
        slot: this.state.selected,
      }
    }
    this.setState({
      items: ar,
      currentItem: {
        material: this.computedMaterial(this.state.selected)
      }
    });
    this.closeModal();
  }
  computedItems = () => {
    // eslint-disable-next-line
    let items = this.state.items.map($ => {
      let _ = Object.assign({}, $);
      const _fields = fields();

      Object.entries(_).forEach((e) => {
        // Old version for supporting string and arrays in textarea
        // if (/\n/.test(e[1])) {
          let index = _fields.findIndex(el => el.value === e[0]);
          if (index > -1 && _fields[index].tagName === 'textarea') {
            _[e[0]] = e[1].split('\n');
          }
        // }
      });

      if (Object.keys($).length > 2) {
        delete _.icon;
        delete _.id;
        return _;
      }
    });

    let _state = {
      menu_title: this.state.menu_title,
      open_command: this.state.open_command,
      size: this.state.size,
      items: { ...items },
    }
    return _state;
  }
  handleName = (e) => {
    this.setState({
      menu_title: e.target.value
    });
  }
  handleopen_command = (e) => {
    this.setState({
      open_command: e.target.value
    })
  }
  downloadYaml = () => {
    fileDownload(YAML.dump(this.computedItems(), this.state.yaml), 'menu.yml');
  }
  clearSlot = () => {
    let ar = this.state.items;

    ar[this.state.selected] = {id: this.state.selected};

    for (let i = 0; i < ar.length; i += 1) {
      if (typeof ar[i].slots !== 'undefined' && ar[i].slots.includes(this.state.selected)) {
        let index = ar[i].slots.indexOf(this.state.selected);

        ar[i].slots.splice(index, 1);

        if (ar[i].slots.length === 1) {
          ar[i].slot = ar[i].slots[0];
          delete ar[i].slots;
        }
      }
    }

    this.setState({
      items: ar,
    });
  }
  changeSize = (e) => {
    if (e.currentTarget.textContent === LANG['button Remove row']) {
      if (this.state.items.length === 9) {
        return;
      }
      this.setState({
        items: this.state.items.slice(0, this.state.items.length-9),
        size: this.state.size-9
      });
      if (this.state.selected > this.state.items.length-10) {
        this.setState({
          selected: 0
        })
      }
    }
    if (e.currentTarget.textContent === LANG['button Add row']) {
      if (this.state.items.length > 50 ) {
        return;
      }
      let elems = [];
      for (let i = this.state.size; i < this.state.size+9; i += 1) {
        elems.push({
          id: i,
        });
      }
      this.setState({
        items: [...this.state.items, ...elems],
        size: this.state.size + 9,
      })
    }
  }
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }
  showExtra = () => {
    this.setState({
      extra: !this.state.extra,
    });
  }
  resetYaml = (e) => {
    this.setState({
      yaml: YAML_DEFAULTS,
    });
    this.inputRef.current.value = JSON.stringify(YAML_DEFAULTS, null, 4);
    this.setState({
      yamlError: false,
    });
  }
  updateYAMLOpts = (e) => {

    try {
      JSON.parse(e.target.value)

      this.setState({
        yaml: JSON.parse(e.target.value),
      });

      this.setState({
        yamlError: false,
      });
    } catch (error) {
      this.setState({
        yamlError: true,
      });
    }
  }
  toggleYAMLOpts = (e) => {
    this.setState({
      showYAMLOpts: !this.state.showYAMLOpts,
    });
  }
  updateItem = (e) => {
    let ar = this.state.items;

    if (typeof ar[this.state.selected].material === 'undefined') {
      return;
    }

    let val;

    switch (e.target.type) {
      case 'number':
        val = Number(e.target.value);
        break;
      case 'checkbox':
        val = Boolean(e.target.value);
        break;
      case 'text':
        val = String(e.target.value);
        break;
      default:
        val = String(e.target.value);
        break;
    }

    ar[this.state.selected][e.target.name] = val;

    if ((e.target.type === 'text' || e.target.type === 'textarea') && val === '') {
      delete ar[this.state.selected][e.target.name];
    }

    this.setState({
      items: ar,
    });
  }
  render() {
    return(
      <div>
        <div id="output">
          <button onClick={this.toggleYAMLOpts} className="download">{LANG['button YAML config']}</button>
          <div style={{
            display: this.state.showYAMLOpts ? 'block' : 'none'
          }}>
            <div
              style={{
                color: 'red',
                display: this.state.yamlError ? 'block' : 'none'
              }}
            >JSON error, fix config</div>
            <div
              style={{
                color: 'blue',
                fontSize: '14px',
              }}
            ><a target='_blank' rel='noopener noreferrer' href="https://github.com/nodeca/js-yaml#dump-object---options-">Options description</a></div>
            <textarea
              className='yamlOpts'
              onChange={this.updateYAMLOpts}
              ref={this.inputRef}
              defaultValue={JSON.stringify(this.state.yaml, null, 4)}
            ></textarea>
            <button className="download" onClick={this.resetYaml}>{LANG['button Reset YAML']}</button>
          </div>
          <button className="download" onClick={this.downloadYaml}>{LANG['button Download']}</button>
          <AceEditor
            mode="yaml"
            theme="github"
            readOnly={true}
            value={YAML.dump(this.computedItems(), this.state.yaml)}
            // value={YAML.dump(this.computedItems(), {
            //   indent: 2,
            //   noArrayIndent: false,
            //   skipInvalid: false,
            //   flowLevel: -1,
            //   sortKeys: false,
            //   lineWidth: 80,
            //   noRefs: false,
            //   noCompatMode: false,
            //   condenseFlow: false,
            //   quotingType: '\'',
            //   forceQuotes: false,
            // })}
            />
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          {LANG['Language']}: <Dropdown options={LANGLIST} onChange={this._changeLang} value={_lang} />
        </div>
        <br/>
        <button onClick={() => {localStorage.clear();window.location.reload(false);}}>{LANG['button CLEAR']}</button>
        <button onClick={this.clearSlot}>{LANG['button Clear slot']}</button>
        <button onClick={this.changeSize}>{LANG['button Remove row']}</button>
        <button onClick={this.changeSize}>{LANG['button Add row']}</button>
        <button onClick={this.showExtra}>{this.state.extra ? LANG['button Hide extra'] : LANG['button Show extra']}</button>
        <br/><br/>
        <div className="inventory">
          <div id="title">
            <McText
              style={{fontFamily: "Minecraft"}}
              prefix='&'
              randomChars='ABCDEFGHJKLMNOPQRSTUVWXYZ'
            >
              {this.state.menu_title || LANG['Menu empty title']}
            </McText>

          </div>
          <div className="slotSpace">
            {this.state.items.map((el, i) => (
              <Slot
                key={Math.random() + '_inv'}
                id={el.id}
                lore={Number.isInteger(el.parent) ? this.state.items[el.parent].lore : el.lore}
                selectedSlot={this.selectedSlot}
                amount={Number.isInteger(el.parent) ? this.state.items[el.parent].amount : el.amount}
                isSelected={this.state.selected === el.id}
                icon={Number.isInteger(el.parent) ? this.state.items[el.parent].icon : el.icon}
              />
            ))}
          </div>
        </div>
        <strong>{LANG['Menu info']}</strong>:
        <div className="value">
          {LANG['menu_title']}:<br/> <input type="text" name="menu_title" value={this.state.menu_title} onChange={this.handleName} />
        </div>
        <div className="value">
          {LANG['open_command']}:<br/> <input type="text" name="open_command" value={this.state.open_command} onChange={this.handleopen_command} />
        </div>
        <br />
        <strong>{LANG['Item info']}</strong>:
          {fields().map((el, i) => (
            <div
              key={i}
              className="value"
              style={{display: !el.extra || this.state.extra ? 'block' : 'none'}}
            >
              <span>{el.name}:</span>
              <br />
              <el.tagName
                value={this.state.items[this.state.selected] ? this.state.items[this.state.selected][el.value] || '' : ''}
                onChange={this.updateItem}
                type={el.type}
                name={el.value}
              />
            </div>
          ))}

        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={this.closeModal}
        >
           <Search
             selectedFromSearch={this.selectedFromSearch}
             title={LANG['Search items']}
           />
         <br />
         {LANG['Your configured items']}
         <br /><br />
         <div style={{
           display: 'flex',
           flexWrap: 'wrap'
           }}>
             {this.state.items.map((el, i) => (
               <Slot
                 selectedSlot={() => this.selectedFromSearch('copy', el)}
                 key={Math.random() + '_search'}
                 id={el.id}
                 amount={Number.isInteger(el.parent) ? this.state.items[el.parent].amount : el.amount}
                 icon={Number.isInteger(el.parent) ? this.state.items[el.parent].icon : el.icon}
               />
             ))}
           </div>
       </Modal>
      </div>
    )
  }

}
