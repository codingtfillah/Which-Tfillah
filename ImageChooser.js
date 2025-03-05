import {idDict} from "./IdDict.js"

const choicesCount = 4

export const getChoices = () => {
    const randint = (start, end) => {
        return Math.floor(Math.random() * (end - start + 1) + start)
    }
    
    let choices = []
    for (let i = 0; i < choicesCount; i++) {
        const dictLength = Object.keys(idDict).length
        if (i < dictLength) {
            let nextChoice = idDict[randint(0, dictLength - 1)]
            while (choices.includes(nextChoice)) {
                nextChoice = idDict[randint(0, dictLength - 1)]
            }
            choices.push(nextChoice)
        }
    }
    
    const correctAnswer = choices[randint(0, choices.length-1)]

    return [correctAnswer, choices]
}
