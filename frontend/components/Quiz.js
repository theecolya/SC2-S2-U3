import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchQuiz, postAnswer } from '../state/action-creators'

//action creators
const aC = {
  fetchQuiz,
  postAnswer
}

function Quiz(props) {
  const dispatch = useDispatch()
  
  useEffect(() => { 
    dispatch(fetchQuiz()); 
    return () => { props.quiz ? props.quiz : 'Loading next quiz' }}, [])

  function selectAnswer(e) {
    dispatch({type: 'SET_SELECTED_ANSWER', 
              payload: { quiz_id: props.quiz.quiz_id,
                         answer_id: e.target.id === "answers[0]" ?
                        props.quiz.answers[0].answer_id : props.quiz.answers[1].answer_id}})
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postAnswer(props.selectedAnswer));
  } 
  
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={ props.selectedAnswer && props.selectedAnswer.answer_id === props.quiz.answers[0].answer_id ? 'answer selected' : 'answer' }>
                {props.quiz.answers[0].text}
                <button id="answers[0]" onClick={(e) => {selectAnswer(e)}}>
                  { props.selectedAnswer && props.selectedAnswer.answer_id === props.quiz.answers[0].answer_id ? 'SELECTED' : 'Select' }
                </button>
              </div>

              <div className={ props.selectedAnswer && props.selectedAnswer.answer_id === props.quiz.answers[1].answer_id ? 'answer selected' : 'answer' }>
                {props.quiz.answers[1].text}
                <button id="answers[1]" onClick={(e) => {selectAnswer(e)}}>
                { props.selectedAnswer && props.selectedAnswer.answer_id === props.quiz.answers[1].answer_id ? 'SELECTED' : 'Select' }
                </button>
              </div>
            </div>

            <button disabled={ props.selectedAnswer ? false : true } onClick={e => handleSubmit(e)} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, aC)(Quiz)