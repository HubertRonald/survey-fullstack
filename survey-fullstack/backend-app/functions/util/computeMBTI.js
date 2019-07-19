'use strict'

const computeMBTI = (dim, dir, ans) => {
    const dimUnique = [...new Set(dim)]
    let partial = dir.map((d, k) => {
        const mark = ans[k]
        return mark < 4 ? (-8 + mark) * d : (mark === 4 ? -4 : mark * d)
    })

    /**
     * Create object
     * { EI: 0, SN: 0, TF: 0, JP: 0 }
     */
    let partialResult = dimUnique.reduce((acc, elem) => {
        acc[elem] = 0
        return acc
    }, {})
    
    // sum by dimension
    dim.map((key,id)=>{
        partialResult[key] = partialResult[key] + partial[id]
    })

    // Determine where a user falls in one of the particular dimensions
    const result = Object.keys(partialResult).map(k =>
        partialResult[k] <= 0 ? [...k][0] : [...k][1]
    );
      
    return result.join("")          
}

module.exports = computeMBTI;


/**
 * Data Schema
 * const dim = ["EI", "SN", "TF", "EI", "SN", "JP", "TF", "JP", "EI", "JP"]
 * const dir = [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]
 * const ans = [4, 3, 1, 6, 7, 3, 5, 3, 6, 6]
 */


// Run this code and test
/* 
const dim = ["EI", "SN", "TF", "EI", "SN", "JP", "TF", "JP", "EI", "JP"]
const dir = [1, -1, 1, -1, 1, 1, -1, -1, -1, 1]

const testCases = {
  test:{
    "Test Case A":[4, 3, 1, 6, 7, 3, 5, 3, 6, 6],
    "Test Case B":[1, 5, 4, 6, 5, 2, 6, 3, 3, 2],
    "Test Case D":[3, 2, 6, 1, 7, 3, 2, 5, 2, 7],
    "Test Case E":[3, 4, 7, 1, 2, 5, 4, 3, 2, 6],
    "Test Case F":[4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    "Test Case G":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    "Test Case H":[7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  },
  result: {
    "Test Case A": "ENTP",
    "Test Case B": "ESTJ",
    "Test Case D": "INFP",
    "Test Case E": "ISFP",
    "Test Case F": "ESTJ",
    "Test Case G": "ISTJ",
    "Test Case H": "ESTP"
  }
}

Object.keys(testCases.test).map(k=>{
  const t = computeMBTI(dim, dir, testCases.test[k])
  console.log([testCases.result[k],t,testCases.result[k]===t])
  
})
 */

/**
 * OUPUT PRINT
    [ 'ENTP', 'ENTP', true ]
    [ 'ESTJ', 'ESTJ', true ]
    [ 'INFP', 'INFJ', false ] (+) Read Comment
    [ 'ISFP', 'ISFP', true ]
    [ 'ESTJ', 'ESTJ', true ]
    [ 'ISTJ', 'ISTJ', true ]
    [ 'ESTP', 'ESTP', true ]
 */


 //(+)
 /**
  * Test Case D
	            Dimension	Direccion	    Mark	Meaning     Score	Lean	Lean
    Question 6	    JP	        1	        3	    P	        -5	    J	    Left
    Question 8	    JP	        -1	        5	    J	        -5	    J	    Left
    Question 10	    JP	        1	        7	    P	        7	    P	    Right
	            -1(J) P(1)			               Total	    -3	    J	    Right
	            Left Right						
							
							
    If person doesn’t lean by JP – Judging (J) so leans Perceiving (P) scales like a mirror							
    
    direction	Scales						      Weight
        1	        -7	-6	-5	-4	 5	 6	 7    Right -->  1 (Percieving P)
        -1      	 7	 6	 5	-4	-5	-6	-7    Left  --> -1 (Judging J)

    User Choose      1   2   3   4   5   6   7

    negative result is left dimension (Judging)							
    postive result is right dimension (Perceiving)							
  * 
  */