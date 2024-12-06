// Function to handle the "Order Now" button click
function orderItem(item) {
    alert("Thank you for ordering " + item + "!");
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    alert('Thank you for contacting us!');
    form.reset(); // Clear the form
});
