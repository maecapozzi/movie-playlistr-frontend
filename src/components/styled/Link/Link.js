import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: white;
  cursor: pointer;
  font-family: 'Inconsolata', monospace;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    color: #1ed760;
  }
`
