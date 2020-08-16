const app = require('http')
  .createServer((req, res) => res.send('oh hi there!'));


//environment variables to change port
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


//from bash terminal: write PORT=3000 node server2.js


//can also use this technique with somethig like DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}, DATABASE_URL is ${DATABASE_URL}`);
});


//this is useful for secrets such as API keys and database passwords
//so that it is more secure -- pass through terminal instead of having
// it in your code
