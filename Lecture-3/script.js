// Get form and output elements
const form = document.getElementById('userForm');
const output = document.getElementById('output');

// Add event listener for form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get input values
  const name = document.getElementById('username').value;
  const age = document.getElementById('age').value;

  // Display the result
  output.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                      <p><strong>Age:</strong> ${age}</p>`;
});
