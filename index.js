const express = require('express')

const app = express()
 
app.use(express.urlencoded({ extended: false }))

app.use('/simple-maths', (req, res, next) => {

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
})

app.get('/', (req, res) => {
	res.send('In postman, key in a, b and o as the first and second parameter. o for the operator [+, -], respectively')
})

app.listen(process.env.port || 3000, () => {
	console.log('Server running on port 3000')
})

