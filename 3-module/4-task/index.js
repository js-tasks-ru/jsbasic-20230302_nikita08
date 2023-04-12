function showSalary(users, age) {
  let str = '';
  for (let elem of users) {
	if (elem['age'] <= age) {
	  str += `${elem['name']}, ${elem['balance']}\n`;
	}
  }

  let filteredUsers = str.slice(0, -1);

  return filteredUsers;
}
