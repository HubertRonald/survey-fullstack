import {
    GET_SURVEY,
    ACTIVATE_STEP,

    CLEAR_ANS,
    SET_ANS,
    SET_DIRECTION,
    SET_DIMENSION,
    SET_SURVEY_ID,

    CLEAR_ERRORS,
    SET_ERRORS,

    LOADING_UI,
    STOP_LOADING_UI

} from '../types';

import axios from 'axios';
import proxy from '../../utils/proxy'


export const getSurvey = (surveyId) => (dispatch) => { 
    dispatch({ type: CLEAR_ANS })
    dispatch({ type: CLEAR_ERRORS })
    dispatch({ type: LOADING_UI})
    axios
        .get(`${proxy}/survey/${surveyId}`)
        .then(res => {
            const { surveyData, dimension, direction } = res.data
            
            // Survey
            dispatch({
                type: GET_SURVEY,
                payload: surveyData
            })

            // Answer
            dispatch({
                type: SET_ANS,
                payload: Array(surveyData.length).fill("")
            })

            dispatch({
                type: SET_DIRECTION,
                payload: direction
            })

            dispatch({
                type: SET_DIMENSION,
                payload: dimension
            })

            dispatch({
                type: SET_SURVEY_ID,
                payload: surveyId
            })

            // Errors - empty data answer
            dispatch({
                type: SET_ERRORS,
                payload: {
                    email: false,
                    ans: Array(surveyData.length).fill(false)
                }
            })

            dispatch({ type: STOP_LOADING_UI })

        })
        .catch(err => {
            dispatch({
                type: GET_SURVEY,
                payload: []
            })
            console.log(err)
            dispatch({ type: STOP_LOADING_UI })
        })

}


export const activateStep = (nextStep) => (dispatch) => { 
    dispatch({
        type: ACTIVATE_STEP,
        payload: nextStep
    })
}
