const generateNumbersBtn = document.getElementById('generateNumbers');
const numbersList = document.getElementById('numbersList');
const filterBtn = document.getElementById('filter');
const filterResult = document.getElementById('filteredNumbers');
filterResult.classList.add('result');

function generateRandomNumbers() {
	const randomNumbers = [];
	const numbersLength = Math.floor(Math.random() * 50) + 50;
	for(let i = 0; i < numbersLength; i++) {
		randomNumbers.push(Math.floor(Math.random() * 100) + 100);
	}
	return randomNumbers;
}

function displayResult(message, result) {
	return `${message}: ${result}`;
}

document.addEventListener('DOMContentLoaded', function() {
	let generatedNumbers = [];

	generateNumbersBtn.addEventListener('click', function() {
		generatedNumbers = generateRandomNumbers();
		numbersList.innerHTML = displayResult('Generated Numbers', generatedNumbers.join(", "))
	});

	filterBtn.addEventListener('click', function() {
		const result = typeof segregateNumbers !== 'undefined' ? (generatedNumbers.length === 0 ? {
			oddNumbers: [0],
			evenNumbers: [1]
		} : segregateNumbers(generatedNumbers)): {
	oddNumbers: [0],
	evenNumbers: [1]
};
		const {
			oddNumbers,
			evenNumbers
		} = result;
		const oddNumbersDisplay = displayResult("Odd numbers", oddNumbers.join(", "));
		const evenNumbersDisplay = displayResult("Even numbers", evenNumbers.join(", "))
		filterResult.innerHTML = `<p>${oddNumbersDisplay}</p><p>${evenNumbersDisplay}</p>`;
	});
});