function namify(users) {
  let namesArr = [];
	for (let elem of users) {
		namesArr.push(elem['name']);
	}
	return namesArr;
}
