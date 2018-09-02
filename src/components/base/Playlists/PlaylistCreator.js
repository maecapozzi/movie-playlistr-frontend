import React from 'react'
import { Input } from '../../styled/Input'
import { SearchButton } from '../../styled/Button'
import { StyledLink } from '../../styled/Link'
import { PageContainer, Page } from '../../styled/Page/Page'
import { PlaylistCreationForm } from '../../base/Form/PlaylistCreationForm'

export class PlaylistCreator extends React.Component {
  state = {
    movies: []
  }

  render () {
    return (
      <PageContainer>
        <Page>
          <PlaylistCreationForm addAMovie={this.props.addAMovie} />
        </Page>
      </PageContainer>
    )
  }
}
