var database = [
  {
    username: "Sarah",
    password: "password"
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


function signIn(user,pass) {
  if(user === database[0].username
    && pass === database[0].password){
      console.log(newsFeed);
  }else{
    alert("Sorry, wrong username and password");
  }
}
