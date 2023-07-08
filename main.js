document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected item and quantity
    var item = document.getElementById('item-select').value;
    var quantity = document.getElementById('item-quantity').value;
    var quantity = document.getElementById('item-load-amount').value;

    // Calculate total amount based on fixed price per item
    var pricePerItem = 10; // Change this to your desired fixed price per item
    var totalAmount =  quantity * load-amount;

    // Display total amount in the input field
    document.getElementById('total-amount').value = '$' + totalAmount.toFixed(2);
});
