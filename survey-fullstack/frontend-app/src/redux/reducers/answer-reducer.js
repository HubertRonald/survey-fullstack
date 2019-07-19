import {
    UPDATE_ANS,
    UPDATE_USER,

    CLEAR_ANS,
    SET_ANS,
    SET_DIRECTION,
    SET_DIMENSION,
    SET_SURVEY_ID,

    UPDATE_RESULT_ID,

    GET_RESULT
} from '../types'

const initialState = {
        resultId: "",
        surveyId: "",                                                   
        user: "",                                                    
        dimension: [],
        direction: [],                            
        ans: [],
        result: ""
}


export default function surveyReducer(state=initialState , {type, payload}) {
    
    switch (type) { 
        case UPDATE_ANS:
            return {
                ...state,
                ans: payload
            }
        
        case UPDATE_USER:
            return {
                ...state,
                user: payload
            }
        
        case CLEAR_ANS:
            return initialState
        
        case SET_ANS:
            return {
                ...state,
                ans: payload
            }
        
        case SET_DIRECTION:
            return {
                ...state,
                direction: payload
            }
        
        case SET_DIMENSION:
            return {
                ...state,
                dimension: payload
            }
        
        case SET_SURVEY_ID:
            return {
                ...state,
                surveyId: payload
            }
        
        case UPDATE_RESULT_ID:
            return {
                ...state,
                resultId: payload
            }
        
        case GET_RESULT:
            return {
                ...state,
                result: payload
            }
        
        default:
            return state
    }
    
}



