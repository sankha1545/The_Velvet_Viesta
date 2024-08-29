function compareDates() {
    // Get the date values from the input fields
    var bday = new Date(document.getElementById('bday').value);
    var bday1 = new Date(document.getElementById('bday1').value);
    var result = document.getElementById('result');

    // Clear previous result
    result.innerHTML = '';

function openHTMLFile() {
    let newloc = "https://www.geeksforgeeks.org/";
            window.location.replace(newloc);
}
    // Check if the dates are valid
   /* if (!bday.getTime() || !bday1.getTime()) {
        alert('enter valid dates');
        return;
    
    }
    // Compare the dates
    else if (bday >= bday1) {
       alert('errorrrrrr');
       return;
    }
    else  {
       result.openHTMLFile();
      return;
    }*/
   if (!bday.getTime() || !bday1.getTime()){
    alert('iinvalid');
   }
}