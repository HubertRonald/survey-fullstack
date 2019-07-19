import { GET_SURVEY } from '../types'

export default function surveyReducer(state=[] , {type, payload}) {
    
    switch (type) { 
        case GET_SURVEY:
            return payload
        default:
            return state
    }
    
}