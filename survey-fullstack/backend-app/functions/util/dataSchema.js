
Questions = {
    "surveyData":[
    {
      "Question": "You find it takes effort to introduce yourself to other people.",
      "Dimension": "EI",
      "Direction": 1,
      "Meaning": "I"
    },
    {
      "Question": "You consider yourself more practical than creative.",
      "Dimension": "SN",
      "Direction": -1,
      "Meaning": "S"
    },
    {
      "Question": "Winning a debate matters less to you than making sure no one gets upset.",
      "Dimension": "TF",
      "Direction": 1,
      "Meaning": "F"
    },
    {
      "Question": "You get energized going to social events that involve many interactions.",
      "Dimension": "EI",
      "Direction": -1,
      "Meaning": "E"
    },
    {
      "Question": "You often spend time exploring unrealistic and impractical yet intriguing ideas.",
      "Dimension": "SN",
      "Direction": 1,
      "Meaning": "N"
    },
    {
      "Question": "Deadlines seem to you to be of relative rather than absolute importance.",
      "Dimension": "JP",
      "Direction": 1,
      "Meaning": "P"
    },
    {
      "Question": "Logic is usually more important than heart when it comes to making important decisions.",
      "Dimension": "TF",
      "Direction": -1,
      "Meaning": "T"
    },
    {
      "Question": "Your home and work environments are quite tidy.",
      "Dimension": "JP",
      "Direction": -1,
      "Meaning": "J"
    },
    {
      "Question": "You do not mind being at the center of attention.",
      "Dimension": "EI",
      "Direction": -1,
      "Meaning": "E"
    },
    {
      "Question": "Keeping your options open is more important than having a to-do list.",
      "Dimension": "JP",
      "Direction": 1,
      "Meaning": "P"
    }
  ],
  "surveyId": "surveymbti2019jul"
}


// fronend
Answer = {
        "resultId": "1",                                                                // Req
        "surveyId": "surveymbti2019jul",                                                    // Req
        "user": "me@email.com",                                                         // Req
        "dimension": ["EI", "SN", "TF", "EI", "SN", "JP", "TF", "JP", "EI", "JP"],      // Req
        "direction": [1, -1, 1, -1, 1, 1, -1, -1, -1, 1],                               // Req
        "ans": [4, 3, 1, 6, 7, 3, 5, 3, 6, 6],                                          // Req
}


// backend
Answer = {
        "resultId": "1",                                                                // Req
        "surveyId": "surveymbti2019jul",                                                    // Req
        "user": "me@email.com",                                                         // Req
        
        "date": "2019-07-17T21:44:26.584Z",                                             // Server
        
        "dimension": ["EI", "SN", "TF", "EI", "SN", "JP", "TF", "JP", "EI", "JP"],      // Req
        "direction": [1, -1, 1, -1, 1, 1, -1, -1, -1, 1],                               // Req
        "ans": [4, 3, 1, 6, 7, 3, 5, 3, 6, 6],                                          // Req
        
        result: "ENTP"                                                                  // Server
}


// test computeMBTI
testCases = {
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