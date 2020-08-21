const express = require('express')

const app = express()
 
app.use(express.urlencoded({ extended: false }))

/*
app.use('/api', (req, res, next) => {
	console.log('I am only logged when the request is made to ' + req.url)	
	res.send('I am the api middleware')
	next()
})
*/

app.use((req, res, next) => {
	// changing the request body
	req.user = {
		id: 1,
		username: 'Admin',
		email: 'admin@weebr.ai'
	}
	next()	
})

app.get('/', (req, res) => {
	//return res.json({ 'message': 'This is the index page' })
	const { id, username, email } = req.user
	res.send('The user is ' + username + ' with ID: ' + id + ' and email, ' + email)
})

app.listen(process.env.port || 3000, () => {
	console.log('Server running on port 3000')
})
