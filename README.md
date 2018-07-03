# rn-classnames [![Build Status](https://travis-ci.com/entwicklerstube/rn-classnames.svg?branch=master)](https://travis-ci.com/entwicklerstube/rn-classnames) [![Coverage Status](https://coveralls.io/repos/github/entwicklerstube/rn-classnames/badge.svg?branch=master)](https://coveralls.io/github/entwicklerstube/rn-classnames?branch=master)
> Conditionally concatenate react-native `StyleSheet`-Objects together

## Install
```
$ npm install rn-classnames
```

## Usage
```js
const style = StyleSheet.create({
  main: {
    background: 'hotpink'
  },
  text: {
    color: 'red'
  }
});

const cn = classnames(style);

// Possible usage
cn('main')
cn({ main: true })
cn(['main'])

// Infinity arguments
cn('main', { text: true }, 'hello', ['world'], { foobar: true }, [ 'example' ])

// Supports computed keys
const ai = 'ai';
cn(`m${ai}n`);
cn({ [`m${ai}n`]: true });
cn([`m${ai}n`]);

// Nested array, but i dont recommend this, looks confusing
cn('test', [['hello_world', ['main'], 'foobar'], [{ text: true }]])

// Removes not found / available styles
cn(['this', 'classNames', 'will', 'not', 'appear'])

// Ignores not supported types
cn(false, true, new Date(), 123, null, undefined, Symbol(), () => "i'am a function");
```

## API
> The API is highly inspired by [`classnames`](https://github.com/JedWatson/classnames)
### `classNames()`
```
className(
  StyleSheet: Object
)
```
Pass your react-native `StyleSheet`

**returns** `picker: Function`

#### `picker()`
```
cn(
  arguments: String|Array|Object
)
```
Pass the classNames you want to pick, you can choose between `String` `Array` and / or `Object`.
Only truthy keys in a `Object` will be included.
All other types are ignored.

**returns** `concatenatedStyleSheets: Array`

## Example
```jsx
import { View, Text, StyleSheet, Platform } from 'react-native';
import classnames from 'rn-classnames';

const style = StyleSheet.create({
  main: {
    paddingTop: 10
  },
  // alternative to "Platform.select"
  android: {
    background: 'green'
  },
  ios: {
    background: 'grey'
  },
  hide: {
    opacity: 0
  }
});

const cn = classnames(style);

export default ({ hide }) => (
  <View style={ cn('main', [ Platform.OS ], { hide }) }>
    <Text>Hello World!</Text>
  </View>
)
```

## FAQ

### How is it different from [`classnames`](https://github.com/JedWatson/classnames) and [`class-names`](https://github.com/sindresorhus/class-names)?

- It works with `react-native` since it concatenates the style-objects instead joining the classNames into a string.
- Doesn't support dedupe since it bloats the code only for this usecase (if you disagree create an issue)
- Extreme lightweight

### It doesnt work in my web-react app
`rn-classnames` makes sense in react-native, if you want something for your non-react-native-app checkout:
- [`classnames`](https://github.com/JedWatson/classnames)
- [`class-names`](https://github.com/sindresorhus/class-names)

### Is it possible to have the stylings in another file? 
Yup, thats how i use it

`style.js`
```js
import  { Stylesheet } from 'react-native';

const style = StyleSheet.create({
  main: {
    background: 'hotpink'
  }
});
```
`component.js`
```jsx
import { Platform } from 'react-native';
import classnames from 'rn-classnames';
import style from './style';

const cn = classnames(style);

export default ({ hide }) => (
  <View style={ cn('main') }>
    <Text>Hello World!</Text>
  </View>
)
```

## License
MIT © Entwicklerstube