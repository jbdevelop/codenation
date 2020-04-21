'use strict'

const fibonacci = () => {
    const sequence = [0, 1]
    while (sequence[sequence.length-1] <= 350) {
        const lastTerm = sequence[sequence.length-1] + sequence[sequence.length-2]        
        sequence.push(lastTerm)         
    }
    return sequence
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}