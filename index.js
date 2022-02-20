
// Phone increasing button
document.getElementById('phone-increasing-button').addEventListener('click', function () {
    const phoneNumber = document.getElementById('phone-number');
    let phoneIncreasingQuantity = phoneNumber.value;
    phoneIncreasingQuantity = parseInt(phoneIncreasingQuantity) + 1;
    phoneNumber.value = phoneIncreasingQuantity;
    // phone price set
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneIncreasingQuantity * 1220;
    calculateTotal()
});
// remove phone quantity and price
document.getElementById('remove-phone-quantity').addEventListener('click', function () {
    const removeQuantity = document.getElementById('phone-number');
    removeQuantity.value = removeQuantity;
    removeQuantity.value = 0;
    const removePrice = document.getElementById('phone-price');
    removePrice.innerText = removePrice;
    removePrice.innerText = 0;
    const removeSubtotalPrice = document.getElementById('sub-total');
    removeSubtotalPrice.innerText = removeSubtotalPrice;
    removeSubtotalPrice.innerText = 0;
    const removeTaxAmount = document.getElementById('tax-amount');
    removeTaxAmount.innerText = removeTaxAmount;
    removeTaxAmount.innerText = 0;
    const removeTotalPrice = document.getElementById('total-price');
    removeTotalPrice.innerText = removeTotalPrice;
    removeTotalPrice.innerText = 0;
});
// phone decreasing button
document.getElementById('phone-decreasing-button').addEventListener('click', function () {
    const phoneNumber = document.getElementById('phone-number');
    let phoneDecreasingQuantity = phoneNumber.value;
    if (phoneDecreasingQuantity > 0) {
        phoneDecreasingQuantity = parseInt(phoneDecreasingQuantity) - 1;
    }
    phoneNumber.value = phoneDecreasingQuantity;
    // phone price set
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneDecreasingQuantity * 1220;
    calculateTotal()
});
// Casing increasing button
document.getElementById('casing-increasing-button').addEventListener('click', function () {
    const casingNumber = document.getElementById('casing-number');
    let casingIncreasingQuantity = casingNumber.value;
    casingIncreasingQuantity = parseInt(casingIncreasingQuantity) + 1;
    casingNumber.value = casingIncreasingQuantity;
    // casing Price increasing
    const casingPrice = document.getElementById('casing-price');
    casingPrice.innerText = casingIncreasingQuantity * 60;
    calculateTotal()
});
// casing decreasing button
document.getElementById('casing-decreasing-button').addEventListener('click', function () {
    const casingNumber = document.getElementById('casing-number');
    let casingDecreasingQuantity = casingNumber.value;
    if (casingDecreasingQuantity > 0) {
        casingDecreasingQuantity = parseInt(casingDecreasingQuantity) - 1;
    }
    casingNumber.value = casingDecreasingQuantity;
    // casing Price decreasing
    const casingPrice = document.getElementById('casing-price');
    casingPrice.innerText = casingDecreasingQuantity * 60;
    calculateTotal()
});
// remove casing quantity and price
document.getElementById('remove-casing-quantity').addEventListener('click', function () {
    const removeQuantity = document.getElementById('casing-number');
    removeQuantity.value = removeQuantity;
    removeQuantity.value = 0;
    const removePrice = document.getElementById('casing-price');
    removePrice.innerText = removePrice;
    removePrice.innerText = 0;
    const removeSubtotalPrice = document.getElementById('sub-total');
    removeSubtotalPrice.innerText = removeSubtotalPrice;
    removeSubtotalPrice.innerText = 0;
    const removeTaxAmount = document.getElementById('tax-amount');
    removeTaxAmount.innerText = removeTaxAmount;
    removeTaxAmount.innerText = 0;
    const removeTotalPrice = document.getElementById('total-price');
    removeTotalPrice.innerText = removeTotalPrice;
    removeTotalPrice.innerText = 0;
});
// Calculate subtotal, tax and total
function calculateTotal() {
    const phoneInput = document.getElementById('phone-number');
    const phoneQuantity = parseInt(phoneInput.value);
    const totalPhone = phoneQuantity * 1220;
    const casingInput = document.getElementById('casing-number');
    const casingQuantity = parseInt(casingInput.value);
    const totalCasing = casingQuantity * 60;
    const subtotal = totalPhone + totalCasing;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
