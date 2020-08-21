module.exports =  (req, res, next) => {

	let { a, b, o } = req.body

	let result = 0
	
	try {
		a = parseInt(a)
		b = parseInt(b)

		switch(o) {
			case '+':
				result = a + b
				break
			case '-':
				result = a - b
				break
			default:
				result = '0, since Operator is not known, please use + or -,'
				break
	
		}

	} catch(err) {
	        result = "Please enter a number"
		
	} finally {
		res.send(`result: ${result}`)
		next()	
	}
}

