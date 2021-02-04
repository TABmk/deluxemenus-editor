# DeluxeMenus Editor

Visual editor for [DeluxeMenus](https://wiki.helpch.at/clips-plugins/deluxemenus)

#### Demo: https://tabmk.github.io/dmeditor/

---
<p align="center">
  <b>Rate</b>
  <br>
  <img src="https://img.shields.io/github/stars/tabmk/dmeditor?style=social">
  <img src="img/1.png" />
  <img src="img/2.png" />
</p>

---

# ⚠️ WIP | Early version

Install dependencies
```
yarn install
   or
npm i
```

Run:
```
yarn start
   or
npm start
```
---
### Features
- __auto-save__ you can reload page any time w/o losing data, all saved in localStorage
- __visual edit__ you can even search items by name (items provided by [minecraft-items](https://github.com/pandapaul/minecraft-items). __TODO__: add support of [minecraft-blocks-render](https://github.com/TABmk/minecraft-blocks-render) data)
- __All actual__ fields of config
- __YML__ export
- __Pre-configured__ items select. It will change "slot" field to "slots" for using same info for those items
- __Preview__ even with minecraft color styled title
- __Language selector__

---

### New features

You can request new features by [open issue](https://github.com/TABmk/dmeditor/issues/new) (Added label "feature wanted" for this)

---
### Contributing

##### Adding new language
- Copy main lang file `english.json` in `/src/lang`.
- Rename it to your language
- Edit it
- Add language to list in [/src/inventory.js on line 17](https://github.com/TABmk/dmeditor/blob/master/src/inventory.js#L17) (variable `LANGLIST`)
⚠️ Name in list and file name must be the same ⚠️
- Send pull request

##### Adding new field
- Open [/src/inventory.js on line 49](https://github.com/TABmk/dmeditor/blob/master/src/inventory.js#L49)
- Add new object (info below)
- Add name to main language file (en)
- send pull request

###### Fild object
```
{
  name: LANG['your new field'],
  value: 'your new field',
  extra: Boolean,
  type: String,
  tagName: String
}
```
- name - String from lang file
- value - value to be added in yaml
- extra - true = hide field by default
- type - number | checkbox | text
- tagName - input | textarea

---

##### A lot of work to do. Just wanted to share it
