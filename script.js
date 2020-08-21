// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //initialise array for character types
  const char_types = ["lowercase", "uppercase", "numeric", "special_chars"];
  //initialise empty array to be injected with user selected options from the options above
  const user_char = [];
  //initialise a variable to check if the user input for character input
  var num_char_check = 0;
  //Loop until valid number of characters is entered
  while (num_char_check === 0) {

    var num_char = prompt("Please, enter the number of characters for your password. That should be an integer between 8 and 128 ")
    //Validate user input is between 8 and 128 characters and is an integer
    if (Number.isInteger(parseInt(num_char)) && parseInt(num_char) > 7 && parseInt(num_char) < 129) {
      num_char = parseInt(num_char);
      num_char_check++
    }
    else {
      alert("Sorry, the entry doesn't match the criteria. Please Try again.")
    }
  }

  //loop to validate at least one character type has been selected 
  while (user_char.length < 1) {
    //Ask user for what types of characters to include  
    for (type of char_types) {
      confirm("Do you want to include " + type + " ?") ? user_char.push(type) : user_char;
    }
    user_char.length < 1 ? alert("Sorry, you need to select at least one character type for your password") : user_char
  }
  //defining arrays for uppercase, lowercase, numerics (0-9) and special characters
  const uppercase = [];
  const lowercase = [];
  const numerics = [];
  //special characters initialisation
  const special_chars = ["!", "@", "$", "%", "&", "*", "_"];

  //upper and lower case initialisation
  for (let i = 0; i < 26; i++) {
    uppercase.push(String.fromCharCode(65 + i))
    lowercase.push(uppercase[i].toLowerCase())
  }
  //numerics initialisation
  for (let i = 0; i < 10; i++) {
    numerics.push(i);
  }
  //Create object 
  const types = {
    "lowercase": lowercase,
    "uppercase": uppercase,
    "numeric": numerics,
    "special_chars": special_chars
  }
  //generate random element given its type
  function generate_random(type) {
    let index = Math.floor(Math.random() * types[type].length)
    return types[type][index]
  }


  var user_char_check = []
  //using uderscore js library
  while (_.isEqual(user_char, user_char_check) == false) { //check that all user selected types have been included in the generated password
    var password = "";
    user_char_check = []
    for (let i = 0; i < num_char; i++) {
      let index = Math.floor(Math.random() * user_char.length) //check randomly from user selected types
      password = password + generate_random(user_char[index]) //generate random chracter of the type picked in the line above
      user_char_check[index] = user_char[index] //inject the type into a user_check to ensure all user selected types have been included 
    }
    console.log(user_char)
    console.log(user_char_check)
  }

  return password
}


