document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.appointment-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
        
        window.open(`confirmation.html?${queryString}`, '_blank');
    });
});
