import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'

const aC = {
  fetchQuiz,
}

function Quiz(props) {
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchQuiz());}, [])
  
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button onClick={(e) => {console.log(e)}}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {props.quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, aC)(Quiz)