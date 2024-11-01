document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const selectedMethod = document.querySelector('input[name="contact-method"]:checked');
        
        if (selectedMethod) {
            alert(`You have selected: ${selectedMethod.value}`);
            // Here you can handle the form data as needed
            // For example, send it to a server or display it somewhere on the page
        } else {
            alert('Please select a contact method before submitting.');
        }
    });
});
