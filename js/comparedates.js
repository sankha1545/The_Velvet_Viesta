document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("checkButton").addEventListener("click", checkInputs);
});

function checkInputs() {
    // Get the values of Date A, Date B, and number of guests from the input fields
    const dateAInput = document.getElementById("dateA").value;
    const dateBInput = document.getElementById("dateB").value;
    const guestsInput = document.getElementById("guests").value;
  /*  const FirstName = document.getElementById("fname").value;
    const Lastname = document.getElementById("lname").value;
    const PhoneNumber = document.getElementById("phone-number").value;
    const Email = document.getElementById("Email").value;*/

    // Check if inputs are not empty
    if (!dateAInput || !dateBInput || !guestsInput) {
        alert("Enter valid dates and number of guests");
        return;
    }

    // Convert input strings to Date objects
    const dateA = new Date(dateAInput);
    const dateB = new Date(dateBInput);
    const numberOfGuests = parseInt(guestsInput, 10);

    // Check if the dates are valid
    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime()) || isNaN(numberOfGuests)) {
        alert("Enter valid dates and number of guests");
        return;
    }

    // Compare the dates and check the number of guests
    if (dateA.getTime() === dateB.getTime()) {
        alert("Invalid dates: Date A and Date B are equal");
    } else if (dateA.getTime() > dateB.getTime()) {
        alert("Invalid dates: Date A is greater than Date B");
    } else if (dateB.getTime() > dateA.getTime() && numberOfGuests > 0) {
        // If Date B is greater than Date A and number of guests is more than 0, redirect to new HTML page
        window.location.href = 'booknow(after).html';
    } else {
        alert("Invalid input: Check the dates and number of guests");
    }
    const timeDiff = dateB - dateA;
    const days = timeDiff / (1000 * 3600 * 24);
    

    document.getElementById('displayStartDate').innerText = dateA.toLocaleDateString();
    document.getElementById('displayEndDate').innerText = dateB.toLocaleDateString();

   
    document.getElementById('displayDays').innerText = days;
    

    document.getElementById('pay2').classList.remove('hidden');
}
function printBill() {
    const printContents = document.getElementById('pay2').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
z