let numbers = [325, 405, 410, 489, 324, 806, 807, 1000, 311, 312, 517, 518, 519, 520, 521, 522, 309, 317, 320, 321, 322, 323, 324, 808]

function segregateNumbers(){
    let evenNumbers = [];
    let oddNumbers = [];

    for(let number of numbers) {
        if(number % 2 === 0){
            evenNumbers.push(number)
        } else {
            oddNumbers.push(number)
        }
    }

    return {
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
    }
}

// Don't change the next line
if(typeof module !== "undefined") {
	module.exports = {
		segregateNumbers
	}
}