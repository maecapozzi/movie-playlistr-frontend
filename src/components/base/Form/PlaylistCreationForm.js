import React from 'react'
import { Formik } from 'formik'
import { Input } from '../../styled/Input'
import { SearchButton } from '../../styled/Button'
import { StyledLink } from '../../styled/Link'
import { LargeText } from '../../styled/Text/LargeText'

export const PlaylistCreationForm = props => (
  <div>
    <LargeText>Create a Playlist</LargeText>
    <Formik
      initialValues={{
        name: '',
        tags: []
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
        console.log('submit')
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ margin: '20px 0px' }}>
            <Input
              type='text'
              name='playlistName'
              placeholder='Add a name for your playlist'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.playlistName}
            />
            {touched.playlistName &&
              errors.playlistName &&
              <div>{errors.playlistName}</div>}
          </div>
          <StyledLink to='#' onClick={props.addAMovie}>Add a Movie</StyledLink>
          <div style={{ margin: '20px 0px' }}>
            <Input
              type='text'
              name='tags'
              placeholder='Add tags so others can find your playlist later'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tags}
            />
            {touched.tags && errors.tags && <div>{errors.tags}</div>}
          </div>
          <SearchButton type='submit' disabled={isSubmitting}>
            Submit
          </SearchButton>
        </form>
      )}
    />
  </div>
)
