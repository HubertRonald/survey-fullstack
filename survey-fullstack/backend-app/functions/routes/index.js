'use strict'

const express = require('express')
const surveyCtrl = require('../controllers/survey')
const resultCtrl = require('../controllers/result')
const api = express.Router()


api.post('/survey', surveyCtrl.postSurvey)
api.get('/surveys', surveyCtrl.getSurveys)
api.get('/survey/:surveyId', surveyCtrl.getSurvey)


api.post('/result', resultCtrl.postResult)
api.get('/results', resultCtrl.getResults)
api.get('/result/:resultId', resultCtrl.getResultUser)


module.exports = api