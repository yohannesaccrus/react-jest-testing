import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { MemoryRouter } from 'react-router-dom'
import Movie, { POSTER_PATH } from '../Movie'

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

test('<Movie/>', () => {
 render(<Movie />)
  expect(console.error).toHaveBeenCalled()
})

const movie = {
  id: 'hi',
  title: 'level up',
  poster_path: 'dwdada.jpg',
}

test('<Movie/> with movie', () => {
	const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  )

  const movieLink = getByTestId('movie-link')
  const moviePoster = getByTestId('movie-poster')
  expect(console.error).not.toHaveBeenCalled()
  expect(movieLink.getAttribute('href')).toBe(`/${movie.id}`)
  expect(moviePoster.src).toBe(`${POSTER_PATH}${movie.poster_path}`)
})
