// Array to store user objects
var userArray = [];

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  // Create user object
  var user = {
    name: nameInput.value,
    email: emailInput.value,
  };

  // Add user object to the array
  userArray.push(user);

  // Clear form inputs
  nameInput.value = "";
  emailInput.value = "";

  console.log(userArray); // Display the array in the console (for testing)
}

// Add event listener to the form
var form = document.getElementById("userDataForm");
form.addEventListener("submit", handleSubmit);
