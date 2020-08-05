const express = require('express');

const app = express();


// app.get('/', (req,res) => {
//   const user = {
//     name: 'Sally',
//     hobby: 'soccer'
//   }
//   res.send(user);
// })
//there is also app.get, app.delete, app.post, app.put

//go to localhost:3000/profile to see this
// app.get('/profile', (req,res) => {
//   res.send("getting profile");
// })

//MIDDLEWARE VIDEO
//recieves request before routes, modifies it and passes it along to keep it going
app.use((req, res, next) => {
  console.log('<h1>Hello</h1>');
  next(); //won't move on unless you have a next() call
})

app.get('/', (req,res) => {
  res.send('test');
})


//POST REQUESTS
// look up POSTMAN -- API recommendation for development
  //used to test server before connecting to front end
app.use(express.urlencoded({extended: false})); //included in express 4.16 and higher
app.use(express.json());


app.post('/profile', (req, res) => {
  console.log(req.body); //need middleware to access body
  const user = {
    name: 'Sally',
    hobby: 'soccer'
  }
  res.send(user);
});

app.listen(3000);
