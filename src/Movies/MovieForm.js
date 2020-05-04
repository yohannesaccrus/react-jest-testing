import React, { Component } from 'react'

class MovieForm extends Component {
  state = {
    text: '',
  }

  render() {
    const { submitForm } = this.props
    const { text } = this.state

    return (
      <div>
        <form data-testid={'movie-form'} onSubmit={() => submitForm({ text })}>
          <input
            type={'text'}
            id={'name'}
            data-testid={'input-name'}
            onChange={(e) =>
              this.setState({
                text: e.target.value,
              })
            }
          />
          <button data-testid={'submit-btn'}>submit</button>
        </form>
      </div>
    )
  }
}
export default MovieForm
