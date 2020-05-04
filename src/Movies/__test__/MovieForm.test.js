import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import MoviewForm from '../MovieForm'

afterEach(cleanup)

const onSubmit = jest.fn()

test('<MovieForm/>', () => {
  const { debug, getByTestId, queryByTestId } = render(<MoviewForm submitForm={onSubmit} />)
  const movieForm    = queryByTestId('movie-form')
  const submitButton = getByTestId('submit-btn')
  const inputName    = getByTestId('input-name')

  expect(movieForm).toBeTruthy()

  fireEvent.change(inputName, {
	  target: { value: 'hello' }
  })

  fireEvent.click(submitButton)

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({
	  text: 'hello'
  })
  
})
