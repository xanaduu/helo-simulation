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

// AUTHORIZATION //
app.post('/api/auth/login', (req, res) => {
  const db = app.get('db'),
        { auth0Id } = req.body,
        auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${auth0Id}`
  
  axios.get(auth0Url, {
    headers: {
      Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN
    }
  })
  .then(r => {
    const authId = r.data.user_id
    return db.findUserByAuth0([authId])
    .then(users => {
      if(users.length) {
        db.createUser([authId, null, null, null, null,  null, null, null, null, null])
      } else {
        req.session.user = {
          auth0_id: authId
        }
      }
      res.json( req.session.user )
    })
    .catch(err => console.error(err))
  })
  .catch(err => console.error(err))
}) 


app.get('/api/auth/authenticated', (req, res) => {
  res.json({ user: req.session.user })
})

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy();
  res.send();
});
// -----------//


// req.session.user = {
//   auth0_id: authId
// }
// res.json({ user: req.session.user })

// FRIEND //
// app.get('/api/friend/list')
// app.post('/api/friend/add')
// app.post('/api/friend/remove')
// ---------- //

// USER //
// app.patch('/api/user/patch/:id')
// app.get('/api/user/list')
// app.get('/api/user/search')
// --------- //

// RECOMMENDED //
// app.post('/api/recommended')
// app.post('/api/recommended/add')

app.listen(PORT, () => console.log('You are on Port: ' + PORT))