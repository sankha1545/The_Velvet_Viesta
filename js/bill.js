function calculateBill() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const rate = parseFloat(localStorage.getItem('selectedRoomPrice'));
    const number = document.getElementById('number').value;
    if (startDate >= endDate) {
        alert('End date must be after the start date.');
        return;
    }

    const timeDiff = endDate - startDate;
    const days = timeDiff / (1000 * 3600 * 24);
    const GST=0.1;
    const bill=(days * rate)*GST;
    const totalBill = (days * rate)+bill;

    document.getElementById('displayName').innerText = `${firstName} ${lastName}`;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayphonenumber').innerText=number;
    document.getElementById('displayStartDate').innerText = startDate.toLocaleDateString();
    document.getElementById('displayEndDate').innerText = endDate.toLocaleDateString();
    document.getElementById('displayRate').innerText = rate.toFixed(2);
    document.getElementById('displaybill').innerText = bill.toFixed(2);
    document.getElementById('displayDays').innerText = days;
    document.getElementById('displayTotalBill').innerText = totalBill.toFixed(2);

    document.getElementById('pay2').classList.remove('hidden');

   
}

function printBill() {
    const printContents = document.getElementById('pay2').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

