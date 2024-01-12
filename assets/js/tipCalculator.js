const billDom = document.getElementById("bill");
const selectServiceDom = document.getElementById("serviceRating");
const tipAmountDom = document.getElementById("tipAmount");
const totalCostDom = document.getElementById("totalCost");

const services = [
    { name: "0% Don't Leave", value: 0 },
    { name: "5% Good Enough", value: 5 },
    { name: "10% Good", value: 10 },
    { name: "15% Very Good", value: 15 },
];

initTipCalculate();

function initTipCalculate() {
    const dynamicHTML = getSelectServicesDoms();

    selectServiceDom.innerHTML = dynamicHTML;
}

function getSelectServicesDoms() {
    let dynamicHTML = "";

    for (const service of services) {
        dynamicHTML += `<option value="${service.value}">${service.name}</option>;`;
    }

    return dynamicHTML;
}

function totalCalculation() {
    const billValue = billDom.value;
    const rateServiceValue = selectServiceDom.value;

    if (!billValue) {
        alert("You need to provide bill value!");
    }
    if (billValue <= 0) {
        alert("Bill value needs to be bigger value when 0!");
    }

    const tipValue = tipCalculate(billValue, rateServiceValue);

    tipAmountDom.innerText = tipValue.toFixed(2);
    totalCostDom.innerText = (tipValue + parseFloat(billValue)).toFixed(2);
}

function tipCalculate(bill, percantage) {
    return bill * (percantage / 100);
}
