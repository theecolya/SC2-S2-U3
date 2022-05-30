// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'

const urlGET = 'http://localhost:9000/api/quiz/next'
const urlPOSTans = 'http://localhost:9000/api/quiz/answer'

export function moveClockwise() {
  return({ type: types.MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return({ type: types.MOVE_COUNTERCLOCKWISE })
}

export function selectAnswer(target) {
  return({ type: types.SET_SELECTED_ANSWER , payload: target})
}

export function setMessage() { }

export function setQuiz() {
  return({ type: types.SET_QUIZ_INTO_STATE })
}

export function inputChange(form) {
  return({ type: types.INPUT_CHANGE , payload: form})
}

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: null })
    // On successful GET:
    axios.get(urlGET)
        .then((res) => {dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.data})})
        //dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: response.data })})
        .catch(err => console.log(err))
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(selectedAnswer) {
  return function (dispatch) {
    axios.post(urlPOSTans, selectedAnswer)
      .then((res) => {dispatch({ type: types.SET_SELECTED_ANSWER, payload: null });
                   dispatch({ type: types.SET_INFO_MESSAGE, payload: res.data.message });
                   dispatch(fetchQuiz())})
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
