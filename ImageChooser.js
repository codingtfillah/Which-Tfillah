import {idDict} from "./IdDict.js"

const randint = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

const choicesCount = 4

let choices = []
for (let i = 0; i < choicesCount; i++) {
    const dictLength = Object.keys(idDict).length
    if (i < dictLength) {
        let nextChoice = `id-${randint(1, dictLength)}`
        while (choices.includes(nextChoice)) {
            nextChoice = `id-${randint(1, dictLength)}`
        }
        choices.push(nextChoice)
    }
}

const correctAnswer = choices[randint(0, choices.length-1)]

export const getChoices = () => {
    return [correctAnswer, choices]
}
