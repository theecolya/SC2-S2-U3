import React from 'react'
import { connect, useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'

function Form(props) {
  const dispatch = useDispatch()

  const onChange = evt => {
    dispatch({ type: 'INPUT_CHANGE', payload: {newQuestion: evt.target.form[0].value,
    newTrueAnswer: evt.target.form[1].value,
  newFalseAnswer: evt.target.form[2].value }})
  }

  const onSubmit = evt => {

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
