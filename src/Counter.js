import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }
  
  counterUp = () => {
	  const { count } = this.state
	  this.setState({
		  count: count + 1
	  })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button data-testid={'test-btn'} onClick={() => this.counterUp()}>{count}</button>
      </div>
    )
  }
}

export default Counter
