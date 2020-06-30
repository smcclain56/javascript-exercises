var database = [
  {
    username: "Sarah",
    password: "password"
  },
  {
    username: "Megan",
    password: "1234"
  },
  {
    username: "Maeve",
    password: "password123"
  }
];

var newsFeed = [
  {
    username: "Kelsie",
    timeline: "I love art!"
  },
  {
    username: "Zac",
    timeline: "Listening to some NPR"
  }
];

var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

signIn(userNamePrompt, passwordPrompt);

/*
Function to check if the user exists in the database
with the correct password
*/
function isUserValid(username, password){
  for(var i =0; i<database.length; i++){
    if(username === database[i].username
      && password === database[i].password){
        return true;
    }
  }
  return false;
}

/*
Function to "sign in" user and print newsFeed if user
exists in the database
*/
function signIn(username, password) {
  if(isUserValid(username, password)){
    console.log(newsFeed);
  }else{
    alert("Sorry, wrong username and password");
  }
}
