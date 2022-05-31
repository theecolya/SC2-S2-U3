// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as type from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case type.MOVE_CLOCKWISE:
      return state < 5 ? state + 1 : initialWheelState
    case type.MOVE_COUNTERCLOCKWISE:
      return state > -5 ? state - 1 : initialWheelState
    default:
    return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case type.SET_QUIZ_INTO_STATE:
      return action.payload
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case type.SET_SELECTED_ANSWER:
      return action.payload
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case type.SET_INFO_MESSAGE:
      return action.payload
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case type.INPUT_CHANGE:
      return action.payload
    case type.RESET_FORM:
      return initialFormState
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
