function redirectToSignup() {
    // Set the URL of your signup page
    var signupPageUrl = "signup.html"; // Replace with the actual path

    // Redirect to the signup page
    window.location.href = signupPageUrl;
    console.log("Sucessfuly redirected to signup page");
  }

function redirectToHome() {
    var signupPageUrl = "index.html";

    window.location.href = signupPageUrl;
    console.log("Suceessfuly redirected to home page");
  }

function redirectToLogin() {
    var signupPageUrl = "login.html";

    window.location.href = signupPageUrl;
    console.log("Suceessfuly redirected to login page");
  }


//Open file dialog
function openFileDialog() {
  // Trigger the click event on the hidden file input
  document.getElementById('fileInput').click();
}
document.getElementById('fileInput').addEventListener('change', handleFileSelection);

function handleFileSelection() {
  // Access the selected file(s) using the files property
  const selectedFile = document.getElementById('fileInput').files[0];
  
  if (!selectedFile) {
      console.log('No file selected.');
      return;
  }
  console.log('Selected file:', selectedFile.name);
}