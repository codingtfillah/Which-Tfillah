import {idDict} from "./IdDict.js"

const choicesCount = 4

export const getChoices = () => {
    const randint = (start, end) => {
        return Math.floor(Math.random() * (end - start + 1) + start)
    }
    
    let choices = []
    for (let i = 0; i < choicesCount; i++) {
        const dictKeys = Object.keys(idDict)
        if (i < dictKeys.length) {
            let nextChoice = dictKeys[randint(0, dictKeys.length - 1)]
            while (choices.includes(nextChoice)) {
                nextChoice = dictKeys[randint(0, dictKeys.length - 1)]
            }
            choices.push(nextChoice)
        }
    }
    
    const correctAnswer = choices[randint(0, choices.length-1)]
    const image = idDict[correctAnswer]

    return [correctAnswer, choices, image]
}
