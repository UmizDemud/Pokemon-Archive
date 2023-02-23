const getBranch = (obj, fields) => {
	let x = obj[fields[0]];
	let i = 1;

	while (i < fields.length) {
		if (!x) {
			return null;
		}

		x = x[fields[i]];
		i++;
	}

	return x;
}

const helper = (a, b, field, isReversed) => {
  const fieldOfA = getBranch(a, field);
  const fieldOfB = getBranch(b, field);
	
	const typ = typeof fieldOfA;

	switch (typ) {
    case 'string':
      return !isReversed
				? fieldOfA.localeCompare(fieldOfB)
				: fieldOfB.localeCompare(fieldOfA);
    case 'number':
      return !isReversed
				? fieldOfB - fieldOfA
				:	fieldOfA - fieldOfB;
    default:
      return !isReversed
				? String(fieldOfA).localeCompare(String(fieldOfB))
				: String(fieldOfB).localeCompare(String(fieldOfA));
	}
}

export const sorter = (array, fields = [0], reverseList) => {
	if (fields.length === 0) {
		return array.sort((a, b) => a[0] - b[0]);
	}

	let i;

	return array.sort((a, b) => {
		let lv = helper(a, b, fields[0], reverseList[fields[0]]);
		
		i = 1;

		while (lv === 0) {
			if (i >= fields.length) {
				return 0;
			}
			lv = helper(a, b, fields[i], reverseList[fields[i]]);
			i++;
		}
		
		if (lv > 0) {
			return 1;
		} else {
			return -1;
		}
	});
} 