function calculate(){
    var billedAmount = document.getElementById("txtBilledAmount").value;
    var percAmount = document.getElementById("txtPerc").value;
    var tipAmount = billedAmount * percAmount /100;
    alert(tipAmount);
}