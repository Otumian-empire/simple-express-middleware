const express = require('express')
const middleware = require('./middleware')

const app = express()
 
app.use(express.urlencoded({ extended: false }))
app.use('/simple-maths', middleware)

app.get('/', (req, res) => {
	res.send('In postman, key in a, b and o as the first and second parameter. o for the operator [+, -], respectively')
})

app.listen(process.env.port || 3000, () => {
	console.log('Server running on port 3000')
})

