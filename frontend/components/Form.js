import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { postQuiz } from '../state/action-creators'

const actionCreators = {
  postQuiz,
}

function Form(props) {
  const dispatch = useDispatch()

  const onChange = evt => {
    if (evt.target.id === 'newQuestion') {
      dispatch({ type: 'INPUT_CHANGE', payload: {...props.form, newQuestion: evt.target.value}})
    } else if (evt.target.id === 'newTrueAnswer') {
      dispatch({ type: 'INPUT_CHANGE', payload: {...props.form, newTrueAnswer: evt.target.value}})
    } else if (evt.target.id === 'newFalseAnswer') {
      dispatch({ type: 'INPUT_CHANGE', payload: {...props.form, newFalseAnswer: evt.target.value}})
    };
  }

  const onSubmit = evt => {
    evt.preventDefault();
    const newForm = 
      { "question_text": props.form.newQuestion,
        "true_answer_text": props.form.newTrueAnswer,
        "false_answer_text": props.form.newFalseAnswer}
    dispatch(postQuiz(newForm))
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder='Enter question' value={props.form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.form.newFalseAnswer}/>
      <button disabled={props.form.newQuestion.trim().length > 1 && props.form.newTrueAnswer.trim().length > 1 && props.form.newFalseAnswer.trim().length > 1 ? false : true} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
