document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(this);
      const action = this.action;

      fetch(action, {
         method: 'POST',
         body: formData,
         headers: {
            Accept: 'application/json',
         },
      })
         .then(response => {
            if (response.ok) {
               document.getElementById('confirmationMessage').style.display = 'block';
               this.reset(); // Clear the form
            } else {
               alert('There was an error submitting the form. Please try again.');
            }
         })
         .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
         });
   });
