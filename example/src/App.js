import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'

import background from './stars.jpg'
import ribbon from './ribbon.png'

export default class App extends Component {
  render () {
    return (
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: 'stretch',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a href='https://github.com/transitive-bullshit/react-starfield-animation'>
          <img
            src={ribbon}
            alt='Fork me on GitHub'
            style={{
              position: 'absolute',
              zIndex: 100,
              top: 0,
              right: 0
            }}
          />
        </a>

        <h1
          style={{
            color: '#fff',
            fontSize: '3em',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
          }}
        >
          React Starfield Animation
        </h1>

        <StarfieldAnimation
          numParticles={400}
          style={{
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>
    )
  }
}
