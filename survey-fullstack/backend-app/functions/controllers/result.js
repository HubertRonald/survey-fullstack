
const { db } = require('../util/admin')
const computeMBTI = require('../util/computeMBTI')
const ResultSchema = require('../models/result')


// Add data to Cloud Firestore
// https://firebase.google.com/docs/firestore/manage-data/add-data
exports.postResult = (req, res) => { 
    if (JSON.stringify(req.body) === '') return res.status(400).json({ body: 'Answer must not empty' })
    
    let newResult = ResultSchema(req.body)
    const { dimension, direction, ans, resultId } = newResult
    newResult.result = computeMBTI(dimension, direction, ans)
    
    db
        .collection("results")
        .doc(resultId)
        .set(newResult)
        .then(() => res.status(200).json(newResult))
        .catch(err => {
            console.log(500, err)
            res.status(500).json({error:`something went error: ${err}`})
        })
    
}


exports.getResults = (req, res) => { 
    db
        .collection("results")
        .get()
        .then(querySnapshot => { 
            let results = [];
            querySnapshot.forEach(doc => { 
                results.push({...doc.data()})
            })
            return res.status(200).json(results)
        })
        .catch(err => {
            console.log(500, err)
            res.status(500).json({ error: err.code })
        })

}


exports.getResultUser = (req, res) => { 
    let resultUser = {}

    db
        .doc(`/results/${req.params.resultId}`)
        .get()
        .then(doc => {
            if (!doc.exists) return res.status(404).json({ error: 'Result not found' })
            resultUser = doc.data()
            return res.status(200).json(resultUser.result)
        })
        .catch(err => {
            console.log(500, err)
            res.status(500).json({ error: err.code })
        })

}