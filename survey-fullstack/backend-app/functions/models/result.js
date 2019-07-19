'use strict'

const ResultSchema = (data) => { 
    let newResult = { }
    newResult.resultId = String(data.resultId)    // String
    newResult.surveyId = String(data.surveyId)        // String
    newResult.user = String(data.user)            // String
    newResult.date = new Date().toISOString()     // String Date
    newResult.dimension = [...data.dimension]     // Array
    newResult.direction = [...data.direction]     // Array
    newResult.ans = [...data.ans]                 // Array
    newResult.result = ""                         // String

    return newResult
}

module.exports = ResultSchema;