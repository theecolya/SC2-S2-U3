import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise } from '../state/action-creators'
import { useDispatch } from 'react-redux'

//action creators
const aC = {
      moveClockwise,
    }


export function Wheel(props) {
  const dispatch = useDispatch()
  function handleClick(e) {
    if(e.target.id === 'clockwiseBtn') {
    dispatch({type: 'MOVE_CLOCKWISE'})
    } else if (e.target.id === 'counterClockwiseBtn') {
      dispatch({type: 'MOVE_COUNTERCLOCKWISE'})
    };
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : ''}</div>
        <div className={props.wheel === 1 || props.wheel === -5 ? "cog active" : "cog"} style={{ "--i": 1 }}>{props.wheel === 1 || props.wheel === -5 ? 'B' : ''}</div>
        <div className={props.wheel === 2 || props.wheel === -4 ? "cog active" : "cog"} style={{ "--i": 2 }}>{props.wheel === 2 || props.wheel === -4 ? 'B' : ''}</div>
        <div className={props.wheel === 3 || props.wheel === -3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{props.wheel === 3 || props.wheel === -3 ? 'B' : ''}</div>
        <div className={props.wheel === 4 || props.wheel === -2 ? "cog active" : "cog"} style={{ "--i": 4 }}>{props.wheel === 4 || props.wheel === -2 ? 'B' : ''}</div>
        <div className={props.wheel === 5 || props.wheel === -1 ? "cog active" : "cog"} style={{ "--i": 5 }}>{props.wheel === 5 || props.wheel === -1 ? 'B' : ''}</div>
      </div>
      <div id="keypad">
        <button onClick={(e) => handleClick(e)} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={(e) => handleClick(e)} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, aC)(Wheel)
