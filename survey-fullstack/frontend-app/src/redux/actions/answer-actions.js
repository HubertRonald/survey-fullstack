import {
    UPDATE_ANS,
    UPDATE_USER,

    GET_RESULT,

    SET_ERRORS,
    CLEAR_ERRORS,

    UPDATE_RESULT_ID,

    LOADING_UI,
    STOP_LOADING_UI,

    ACTIVATE_STEP
} from '../types'

import uniqid from 'uniqid';
import axios from 'axios';
import proxy from '../../utils/proxy'
import { isEmpty, isEmail } from '../../utils/validators'


export const updateAnswer = (updateAns) => (dispatch) => {
    dispatch({
        type: UPDATE_ANS,
        payload: updateAns
    })
};


export const updateUser = (updateEmail) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: updateEmail
    })
};

export const updateResultId = (resultId) => (dispatch) => {
    dispatch({
        type: UPDATE_RESULT_ID,
        payload: resultId
    })
};


export const postAnswer = (newAnswer) => (dispatch) => {
    
    dispatch({ type: CLEAR_ERRORS })

    const errors = checkErrors(newAnswer.user, newAnswer.ans)

    if (errors.count === 0) {
        dispatch({ type: LOADING_UI })

        // Create resultId
        newAnswer.resultId = uniqid(`${newAnswer.user}_`)
        dispatch(updateResultId(newAnswer.resultId))

        axios
            .post(`${proxy}/result`, newAnswer)
            .then(res => {
                dispatch({
                    type: GET_RESULT,
                    payload: res.data.result
                })

                dispatch({ type: STOP_LOADING_UI })

                dispatch({
                    type: ACTIVATE_STEP,
                    payload: 1
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: STOP_LOADING_UI })
            })
    }
    else {
        dispatch({
            type: SET_ERRORS,
            payload: errors
        })
    }
};


// Helper Function
const checkErrors = (email, ans) => {
    const errorEmail = isEmpty(email) && !isEmail(email)
    const errorAns = ans.map(v => isEmpty(v))
    const errorCount = errorEmail + errorAns.reduce((a, b) => a + b)

    return {
        email: errorEmail,
        ans: errorAns,
        count: errorCount
    }
};
