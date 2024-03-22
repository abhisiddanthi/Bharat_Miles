// Get references to the button and the dialog box
const toggleButton = document.getElementById('toggleButton');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.querySelector('.close');
const loadingDiv = document.getElementById('loadingDiv');
const myDiv = document.getElementById('myDiv');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
  dialogBox.classList.toggle('hidden'); // Toggle the visibility of the dialog box
  loadingDiv.style.display = 'block';
  setTimeout(function() {
      loadingDiv.style.display = 'none';
      myDiv.style.display = 'block'; // Display the div after 1 second
  }, 1000);
});

// Add click event listener to the close button
closeButton.addEventListener('click', function() {
  dialogBox.classList.add('hidden'); // Hide the dialog box when close button is clicked
});


// Get references to the button and the dialog box
const toggleButton2 = document.getElementById('toggleButton2');
const dialogBox2 = document.getElementById('dialogBox2');
const closeButton2 = document.querySelector('.close2');
const loadingDiv2 = document.getElementById('loadingDiv2');
const myDiv2 = document.getElementById('myDiv2');

// Add click event listener to the button
toggleButton2.addEventListener('click', function() {
  dialogBox2.classList.toggle('hidden'); // Toggle the visibility of the dialog box
  loadingDiv2.style.display = 'block';
  setTimeout(function() {
      loadingDiv2.style.display = 'none';
      myDiv2.style.display = 'block'; // Display the div after 1 second
  }, 1000);
});

// Add click event listener to the close button
closeButton2.addEventListener('click', function() {
  dialogBox2.classList.add('hidden'); // Hide the dialog box when close button is clicked
});
