function Calculate(){
    var billedAmout = document.getElementById('txtBilledAmout').value;
    var percAmout = document.getElementById('txtPerc').value;
    var tipAmount = billedAmout * percAmout /100;
    alert(tipAmount);
}