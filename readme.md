# react-starfield-animation ([demo](https://transitive-bullshit.github.io/react-starfield-animation/))

> ✨ Canvas-based starfield animation for React.

[![NPM](https://img.shields.io/npm/v/react-starfield-animation.svg)](https://www.npmjs.com/package/react-starfield-animation) [![Build Status](https://travis-ci.org/transitive-bullshit/react-starfield-animation.svg?branch=master)](https://travis-ci.org/transitive-bullshit/react-starfield-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Demo](https://raw.githubusercontent.com/transitive-bullshit/react-starfield-animation/master/example/demo.gif)](https://transitive-bullshit.github.io/react-starfield-animation/)

## Install

```bash
npm install --save react-starfield-animation
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-starfield-animation/).

```jsx
import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'

class Example extends Component {
  render () {
    return (
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    )
  }
}
```

## Props

| Property      | Type               | Default                               | Description                                                                                                                                  |
|:--------------|:-------------------|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| `numParticles`  | number           | 300                                  | Number of particles (stars) to use. |
| `lineWidth`     | number           | 2.0                                  | Line width affecting particle size. |
| `alphaFactor`   | number           | 1.0                                  | Scaling factor for particle opacity. |
| `depth`         | number           | 300                                  | Scaling factor for particle depth. |
| `...`           | ...              | undefined                            | Any other props are applied to the root canvas element. |

Note that the canvas size will automatically be inferred based on available space via [react-sizeme](https://github.com/ctrlplusb/react-sizeme), so it should be really easy to use this component as a fullscreen background as in the [demo](https://transitive-bullshit.github.io/react-starfield-animation/).

## Related

- [react-particle-animation](https://github.com/transitive-bullshit/react-particle-animation) - Canvas-based particle animation for React.
- [astral app](https://astralapp.com/) - A tool for organizing your GitHub stars with ease. Credit for the original animation goes to [Collin Henderson](https://github.com/syropian).

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

This module was bootstrapped with [create-react-library](https://github.com/transitive-bullshit/create-react-library).
