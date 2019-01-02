import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
  console.log('the render counter', props)
  return (
    <div>
      <h1>I am a counter!</h1>
      <p>Counter: {props.count}</p>
      <button onClick={props.onIncrementClick}>Increment</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      console.log('clicked')
      const action = {
        type: 'INCREMENT',
        number: 2
      }

      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter)