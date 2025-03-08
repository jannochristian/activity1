function calculate() {
    let wallet = parseFloat(document.getElementById('wallet').value);
    let riceQty = parseInt(document.getElementById('rice').value);
    let waterQty = parseInt(document.getElementById('water').value);
    let cokeQty = parseInt(document.getElementById('coke').value);
    
    let riceCost = riceQty * 1000;
    let waterCost = waterQty * 100;
    let cokeCost = cokeQty * 12.5;
    let groceryTotal = riceCost + waterCost + cokeCost;
    let remainingWallet = wallet - groceryTotal;
    
    document.getElementById('walletAmount').innerText = wallet;
    document.getElementById('groceryTotal').innerText = groceryTotal;

    if (remainingWallet < 0) {
        document.getElementById('remainingWallet').innerText = "Insufficient Funds";
    } else {
        document.getElementById('remainingWallet').innerText = remainingWallet;
    }
}