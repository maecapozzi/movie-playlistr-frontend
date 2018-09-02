import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { HomeContainer } from '../src/components/container/HomeContainer'
import {
  PlaylistContainer
} from '../src/components/container/PlaylistContainer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/playlists' component={PlaylistContainer} />
        </div>
      </Router>
    )
  }
}

export default App
