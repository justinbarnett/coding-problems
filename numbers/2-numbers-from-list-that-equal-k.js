// This problem was recently asked by Google.
//
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//
// Bonus: Can you do this in one pass?

const whichTwoEqualK = (list, k) => {
	
	list = list.sort((a, b) => a - b);

	let i = 0,
		j = list.length - 1; // first and last indices
	while (i < j) {
		let sum = list[i] + list[j];

		if (sum < k) {
			i++;
			continue;
		}

		if (sum > k) {
			j--;
			continue;
		}

		return [list[i], list[j]];
	}

	return false;
}

const log = console.log

log(whichTwoEqualK([10, 15, 3, 7], 17));

log(whichTwoEqualK([2, 3, 8, 12, 15], 27));
