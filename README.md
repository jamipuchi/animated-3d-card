# react-animated-3d-card

> Animated 3d card that reacts to the user&#x27;s mouse pointer

Each component that is a child to the Card component will be animated in 3d, the top one being flush with the card and each subsequent one higher than the one on top of it

[Code](https://github.com/jamipuchi/react-animated-3d-card/blob/master/example/src/App.js)
[Demo](https://jamipuchi.github.io/react-animated-3d-card/)

![Credit card](https://raw.githubusercontent.com/jamipuchi/animated-3d-card/master/example/images/cc.gif)

[![NPM](https://img.shields.io/npm/v/animated-3d-card.svg)](https://www.npmjs.com/package/react-animated-3d-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animated-3d-card
```

## Usage

```jsx
import React, { Component } from 'react'

import Card from 'react-animated-3d-card'

class Example extends Component {
  render() {
    return <Card       
      style={{
        backgroundColor: 'red',
        width: '450px',
        height: '300px',
        cursor: 'pointer'
      }}
      onClick={() => console.log('Card clicked')}
    />
  }
}
```

## Available props
| Props         | Type          | Default value | Explanation   |
| ------------- | ------------- | ------------- | ------------- |
| style         | Object        | {}            | The style that will be applied to the card |
| onClick       | Function      | -            | The function that will run when the card is clicked |
| borderRadius  | String        | '20px'        | The radius of the card |
| isStatic      | Boolean       | false         | Whether the card is transformed in 3d or not |
| shineStrength | Number        | 0.4           | The strength of the shine from 0 to 1 |
| cursorPointer | Boolean       | true          | Whether the cursor is a pointer or not |

## Example


## License

MIT © [jamipuchi](https://github.com/jamipuchi)
