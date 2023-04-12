function makeDiagonalRed(table) {
    let trs = table.rows;
	for (let i = 0; i < trs.length; i++) {
		trs[i].cells[i].style.background = 'red';
	}
}
