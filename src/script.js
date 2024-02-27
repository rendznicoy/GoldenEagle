function redirectToSignup() {
    // Set the URL of your signup page
    var signupPageUrl = "signup.html"; // Replace with the actual path

    // Redirect to the signup page
    window.location.href = signupPageUrl;
    console.log("Tim eroy");
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