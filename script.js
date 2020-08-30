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
  const char_types = ["lowercase", "uppercase", "numeric", "special characters"];

  //defining arrays for uppercase, lowercase, numerics (0-9) and special characters
  const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
  const uppercase = lowercase.toUpperCase();
  const numeric = '0123456789';
  const special_chars = '!@#$%^&*()';
  const charset = [lowercase, uppercase, numeric, special_chars]
  let newString = ""
  let password = ""
  let num_char_check = 0;




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
  while (newString.length < 1) {
    //Ask user for what types of characters to include  
    for (let i = 0; i < char_types.length; i++) {
      if (confirm("Do you want to include " + char_types[i] + " ?")) {
        newString = newString + charset[i] //make a new conctenated string of all possible charcters of the user selected character types
        password = password + charset[i][Math.floor(Math.random() * charset[i].length)]//add random character from the selected type
      }
    }
    newString.length < 1 ? alert("Sorry, you need to select at least one character type for your password") : newString
  }


  for (let i = password.length; i < num_char; i++) {
    password = password + newString[Math.floor(Math.random() * newString.length)] //add to the password string a new random character from newString
  }
  //Shuffle the password to confirm characters are at random positions
  password = Array.from(password).sort(() => { return .5 - Math.random() }).join("")


  return password
}


