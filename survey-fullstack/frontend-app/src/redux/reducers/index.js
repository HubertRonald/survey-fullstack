
import { combineReducers } from 'redux';

import surveyReducer from './survey-reducer';
import answerReducer from './answer-reducer';
import uiReducer from './ui-reducer';


const allReducers = combineReducers({
    survey: surveyReducer,
    answer: answerReducer,
    UI: uiReducer
})


export default allReducers