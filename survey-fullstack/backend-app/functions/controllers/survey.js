const { db } = require('../util/admin')
const SurveySchema = require('../models/survey')

// Add data to Cloud Firestore
// https://firebase.google.com/docs/firestore/manage-data/add-data
exports.postSurvey = (req, res) => { 
    if (JSON.stringify(req.body) === '') return res.status(400).json({ body: 'Survey must not empty' })
    
    let newSurvey = {}
    const {surveyData, dimension, direction } = SurveySchema(req.body.surveyData)
    newSurvey.surveyData = surveyData
    newSurvey.dimension = dimension
    newSurvey.direction = direction

    console.log("hi",JSON.stringify(newSurvey))
  
    db
        .collection("surveys")
        .doc(req.body.surveyId)
        .set(newSurvey)
        .then(doc => { 
            newSurvey.surveyId = doc.id
            
            res.status(200).json(newSurvey)
        })
        .catch(err => {
            console.log(500, err)
            res.status(500).json({error:`something went error: ${err}`})
        })
}


exports.getSurveys = (req, res) => {
   
    db
        .collection("surveys")
        .get()
        .then(querySnapshot => { 
            let surveys = [];
            querySnapshot.forEach(doc => { 
                surveys.push({...doc.data()})
            })
            console.log(surveys)
            return res.status(200).json(surveys)
        })
        .catch(err => {
            console.log(500, err)
            res.status(500).json({ error: err.code })
        })
}


exports.getSurvey = (req, res) => {
    let survey = {}
    db
        .doc(`/surveys/${req.params.surveyId}`)
        .get()
        .then(doc => {
            if (!doc.exists) return res.status(404).json({ error: 'Survey not found' })
            survey = doc.data()
            return res.status(200).json(survey)
        })
        .catch(err => {
            console.log(500, err)
            res.status(500).json({ error: err.code })
        })
}