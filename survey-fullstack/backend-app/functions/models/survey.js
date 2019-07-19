'use strict'

const SurveySchema = (data) => { 
    let newSurvey = {}
    let surveyData = []
    let dimension = []
    let direction = []

    surveyData = data.map(q => {
        dimension.push(String(q.Dimension))            // String
        direction.push(Number(q.Direction))             // Number
        return {
            Question: String(q.Question),               // String
            Dimension: String(q.Dimension),             // String
            Direction: Number(q.Direction),             // Number
            Meaning: String(q.Meaning)                  // String
            }
    })
    
    newSurvey.surveyData = surveyData
    newSurvey.dimension = dimension
    newSurvey.direction = direction

    return newSurvey
}

module.exports = SurveySchema;
