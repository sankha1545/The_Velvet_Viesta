document.getElementById('billForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    const timeDifference = endDate - startDate;
    const daysStayed = timeDifference / (1000 * 3600 * 24);
    const costPerDay = 100; // Set your cost per day
    const totalBill = daysStayed * costPerDay;

    const billDetails = `
        Name: ${firstName} ${lastName} <br>
        Email: ${email} <br>
        Phone Number: ${phoneNumber} <br>
        Stay Duration: ${daysStayed} days <br>
        Total Bill: $${totalBill.toFixed(2)}
    `;

    document.getElementById('billDetails').innerHTML = billDetails;
    document.getElementById('billSection').style.display = 'block';

    // Send data to the server
    fetch('/saveBill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            daysStayed,
            totalBill
        })
    });

    document.getElementById('printButton').addEventListener('click', function() {
        window.print();
    });
});
