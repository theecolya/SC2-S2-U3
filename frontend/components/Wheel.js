import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise } from '../state/action-creators'
import { useDispatch } from 'react-redux'

const aC = {
      moveClockwise,
    }
  
export function Wheel(props) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch({type: 'MOVE_CLOCKWISE'});
    //if ( e.target.id === props.wheel ) { console.log(e.target) }
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div id={0} className="cog active" style={{ "--i": 0 }}>B</div>
        <div id={1} className="cog" style={{ "--i": 1 }}></div>
        <div id={2} className="cog" style={{ "--i": 2 }}></div>
        <div id={3} className="cog" style={{ "--i": 3 }}></div>
        <div id={4} className="cog" style={{ "--i": 4 }}></div>
        <div id={5} className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={() => handleClick()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, aC)(Wheel)
