# rn-classnames
> A simple javascript utility for conditionally joining className objects together

## Install
```
$ npm install rn-classnames
```

## Usage
> The API is highly inspired by [`classnames`](https://github.com/JedWatson/classnames)
```js

```

## Example
```jsx
import { View, Text, StyleSheet } from 'react-native';
import classnames from 'classnames';

const style = StyleSheet.create({
  main: {
    background: 'red'
  }
});

const cn = classnames(style);

export default () => (
  <View style={ cn('main') }>
    <Text>Hello World!</Text>
  </View>
)
```