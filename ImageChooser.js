import {idDict} from "./idDict.js"

const randint = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

choicesCount = 4

choices = []
for (let i = 0; i < choicesCount; i++) {
    dictLength = Object.keys(myDict).length
    if (i < dictLength) {
        nextChoice = `id-${randint(1, dictLength)}`
        while (choices.includes(nextChoice)) {
            nextChoice = `id-${randint(1, dictLength)}`
        }
        choices.push(nextChoice)
    }
}

correct_answer = choices[randint(0, choices.length-1)]
