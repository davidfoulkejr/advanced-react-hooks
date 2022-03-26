// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
}

const countReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {...state, count: state.count + action.step}
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => dispatch({type: ACTION_TYPES.INCREMENT, step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
