# animated-3d-card

> Animated 3d card that reacts to the user&#x27;s mouse pointer

[![NPM](https://img.shields.io/npm/v/animated-3d-card.svg)](https://www.npmjs.com/package/animated-3d-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save animated-3d-card
```

## Usage

```jsx
import React, { Component } from 'react'

import Card from 'animated-3d-card'
import 'animated-3d-card/dist/index.css'

class Example extends Component {
  render() {
    return <Card       
      style={{
        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        width: '450px',
        height: '300px',
        cursor: 'pointer'
      }}
      onClick={() => console.log('Card clicked')}/>
  }
}
```
![alt text](https://i.ibb.co/d7MVJJy/ezgif-com-gif-maker-1.gif)


## Available props
| Props         | Type          | Default value | Explanation   |
| ------------- | ------------- | ------------- | ------------- |
| borderRadius  | String        | '20px'        | The radius of the card              |
| isStatic      | Boolean       | false         | Whether the card is transformed in 3d or not |
| shineStrength | Number        | 0.4              | The strength of the shine from 0 to 1 |
| cursorPointer | Boolean       | true               | Whether the cursor is a pointer or not |


## License

MIT © [jamipuchi](https://github.com/jamipuchi)
