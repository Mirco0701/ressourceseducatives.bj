document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = document.getElementById('message').value;

    const whatsappMessage = `Bonjour, je souhaite passer une commande. \n\nDétails de la commande: ${message}`;

    const whatsappURL = `https://wa.me/22997173149?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
});
