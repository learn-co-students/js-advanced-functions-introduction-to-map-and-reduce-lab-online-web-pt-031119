function mapToNegativize(numbers) {
	let newNumbers = [] 
	for (let i = 0; i < numbers.length; i++) {
		newNumbers.push(numbers[i] * -1)
	}
	return newNumbers
}

function mapToNoChange(some_values) {
	return some_values
}

function mapToDouble(numbers) {
	let newNumbers = [] 
	for (let i = 0; i < numbers.length; i++) {
		newNumbers.push(numbers[i] * 2)
	}
	return newNumbers
}

function mapToSquare(numbers) {
	let newNumbers = [] 
	for (let i = 0; i < numbers.length; i++) {
		newNumbers.push(numbers[i] * numbers[i])
	}
	return newNumbers
}

function reduceToTotal(numbers, startingPoint=0) {
	let sum = 0
	for (let i = 0; i < numbers.length; i++) {
		sum = sum + numbers[i]
	}
	return sum + startingPoint
}

function reduceToAllTrue(values) {
	for (let i = 0; i < values.length; i++) {
		if (values[i] === false) {
			return false
		}
	}
	return true
}

function reduceToAnyTrue(values) {
	for (let i = 0; i < values.length; i++) {
		if (values[i] === true) {
			return true
		}
	}
	return false
}