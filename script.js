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
  const char_types = ["lowercase", "uppercase", "numeric", "special_chars"];
  const user_char = [];
  var num_char_check = 0;
  while (num_char_check === 0) {

    var num_char = prompt("Please, enter the number of characters for your password. That should be an integer between 8 and 128 ")
    if (Number.isInteger(parseInt(num_char)) && parseInt(num_char) > 7 && parseInt(num_char) < 129) {
      num_char = parseInt(num_char);
      num_char_check++
    }
    else {
      alert("Sorry, the entry doesn't match the criteria. Please Try again.")
    }
  }
  while (user_char.length < 1) {
    for (type of char_types) {
      confirm("Do you want to include " + type + " ?") ? user_char.push(type) : user_char;
    }
    user_char.length < 1 ? alert("Sorry, you need to select at least one character type for your password") : user_char
  }
  //defining arrays for uppercase, lowercase, numerics (0-9) and special characters
  const uppercase = [];
  const lowercase = [];
  const numerics = [];
  const special_chars = ["!", "@", "$", "%", "&", "*", "_"];
  for (let i = 0; i < 26; i++) {
    uppercase.push(String.fromCharCode(65 + i))
    lowercase.push(uppercase[i].toLowerCase())
  }
  for (let i = 0; i < 10; i++) {
    numerics.push(i);
  }
  const types = {
    "lowercase": lowercase,
    "uppercase": uppercase,
    "numeric": numerics,
    "special_chars": special_chars
  }
  function generate_random(type) {
    let index = Math.floor(Math.random() * types[type].length)
    return types[type][index]
  }


  var user_char_check = []
  while (_.isEqual(user_char, user_char_check) == false) {
    var password = "";
    for (let i = 0; i < num_char; i++) {
      let index = Math.floor(Math.random() * user_char.length)
      password = password + generate_random(user_char[index])
      user_char_check[index] = user_char[index]
    }
  }

  return password
}


