function padIt(str,n){
	let i = 0
	while (i < n) {
		i%2?str += '*':str = '*' + str
		i++
	}
	return str

}

padIt('a',1)