require('dotenv').config()
const express = require('express'), 
      bodyParser = require('body-parser'),
      massive = require('massive'), 
      session = require('express-session')
      PORT = process.env.SERVER_PORT || 3035,
      axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.error(err))

app.post('/api/auth/login', (req, res) => {
  const db = app.get('db'),
        { userId } = req.body,
        auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`
  
  axios.get(auth0Url, {
    headers: {
      Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
    }
  })
  .then(r => {
    const userData = r.data
    
    req.session.user = { 
      name: userData.name, 
      email: userData.email, 
      auth0_id: userData.user_id,
      pictureUrl: userData.picture  
    }
    res.json({ user: req.session.user })
    db.getUser([userData.user_id])
    .then(users => {
      if(users.length) db.createUser([userData.user_id, userData.email, userData.picture, userData.name])
      .then(() => console.log('added to database'))
      .catch(err => console.error(err))
    })
  })
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'You failed.' })
  })
}) 

app.get('/api/auth/authenticated', (req, res) => {
  res.json({ user: req.session.user })
})

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy();
  res.send();
});

app.listen(PORT, () => console.log('You are on Port: ' + PORT))