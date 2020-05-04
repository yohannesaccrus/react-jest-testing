import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import NewMovie from '../NewMovie'

afterEach(cleanup)

test('<NewMovie/>', () => {
  const { debug, getByTestId, queryByTestId, container } = render(<NewMovie />)
  const pageTitle = getByTestId('page-title')
  const movieForm = queryByTestId('movie-form')

  expect(pageTitle.textContent).toBe('New Movie')
  expect(movieForm).toBeTruthy()
  expect(container.firstChild).toMatchSnapshot()
})
