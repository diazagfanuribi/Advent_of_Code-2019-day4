let start = 138241
let end = 674034
let total = 0

function isDecrease(input) {
	let output = true
	for (let index = 1; index < input.length; index++) {
		if (input[index - 1] > input[index]) {
			output = false
			break
		}
	}
	return output
}

function findSameNumber(input) {
	let output = false
	for (let index = 1; index < input.length; index++) {
		if (input[index - 1] === input[index]) {
			output = true
			break
		}
	}
	return output
}

while (start <= end) {
	let stringNum = String(start)
	if (findSameNumber(stringNum) && isDecrease(stringNum)) {
		total++
	}
	start++
}

console.log(total)
