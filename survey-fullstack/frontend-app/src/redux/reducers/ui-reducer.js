import {
    ACTIVATE_STEP,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    STOP_LOADING_UI
} from '../types'

const initialState = {
    step:0,
    loading: false,
    errors: {
        email: false,
        ans: [],
        count: 0
    }
};

export default function (state = initialState, {type, payload}) { 
    switch (type) {
        case ACTIVATE_STEP:
            return {
                ...state,
                step: payload
            }
        
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: {
                    email: false,
                    ans: [],
                    count: 0
                }
            }
        
        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        
        case STOP_LOADING_UI:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}
