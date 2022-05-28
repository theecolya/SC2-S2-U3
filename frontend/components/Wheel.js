import React, { useState } from 'react'
import { connect } from 'react-redux'
import { moveClockwise } from '../state/action-creators'
import { useDispatch } from 'react-redux'

//action creators
const aC = {
      moveClockwise,
    }


export function Wheel(props) {
  const dispatch = useDispatch()
  const [petals, setActivePetal] = useState(['','','','','',''])
  function handleClick() {
    dispatch({type: 'MOVE_CLOCKWISE'});
    console.log(petals)
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        {petals.map((item, idx) => { return <div className={item === 'B' ? "cog active" : "cog"} style={{ "--i": idx }}>{item === 'B' ? 'B' : ''}</div>})}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={() => handleClick()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, aC)(Wheel)
