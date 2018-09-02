import React from 'react'
import axios from 'axios'
import { PlaylistCreator } from '../base/Playlists'
import { SearchBar } from '../base/SearchBar/SearchBar'
import { Input } from '../styled/Input'
import { SearchButton } from '../styled/Button'

export class PlaylistContainer extends React.Component {
  defaultState = {
    showSearch: false
  }
  state = {
    playlists: [],
    showSearch: this.props.showSearch
  }

  componentDidMount () {
    axios.get('/api/v1/playlists').then(response => {
      console.log(response.data)
    })
  }

  addAMovie = () => {
    this.setState({ showSearch: true })
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  render () {
    if (!this.state.showSearch) {
      return (
        <div>
          <PlaylistCreator addAMovie={this.addAMovie} />
        </div>
      )
    } else {
      return (
        <SearchBar
          searchBarProps={({ value, handleChange, handleSubmit }) => {
            return (
              <div style={{ display: 'flex', padding: '20px' }}>
                <Input
                  placeholder='Search for an artist'
                  type='text'
                  value={value}
                  onChange={handleChange}
                />
                <SearchButton onClick={handleSubmit}>Search</SearchButton>
              </div>
            )
          }}
        />
      )
    }
  }
}
