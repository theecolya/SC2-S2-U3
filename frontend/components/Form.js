import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { postQuiz } from '../state/action-creators'

const actionCreators = {
  postQuiz,
}

function Form(props) {
  const dispatch = useDispatch()

  const onChange = evt => {
    dispatch({ type: 'INPUT_CHANGE', payload: {newQuestion: evt.target.form[0].value,
    newTrueAnswer: evt.target.form[1].value,
  newFalseAnswer: evt.target.form[2].value }})
  }

  const onSubmit = evt => {
    evt.preventDefault();
    const newForm = { "question_text": props.form.newQuestion,
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
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
