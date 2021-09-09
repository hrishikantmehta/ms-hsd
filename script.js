//Input fields
const petrolRate = document.querySelector(".petrol-rate");
const dieselRate = document.querySelector(".diesel-rate");

const petrol1Start = document.querySelector(".petrol1-start");
const diesel1Start = document.querySelector(".diesel1-start");
const diesel2Start = document.querySelector(".diesel2-start");
const diesel3Start = document.querySelector(".diesel3-start");
const diesel4Start = document.querySelector(".diesel4-start");
const petrol1End = document.querySelector(".petrol1-end");
const diesel1End = document.querySelector(".diesel1-end");
const diesel2End = document.querySelector(".diesel2-end");
const diesel3End = document.querySelector(".diesel3-end");
const diesel4End = document.querySelector(".diesel4-end");
const tutiPieces = document.querySelector(".tuti-piece");

//output fields
const petrol1Liter = document.querySelector(".petrol1-liter");
const diesel1Liter = document.querySelector(".diesel1-liter");
const diesel2Liter = document.querySelector(".diesel2-liter");
const diesel3Liter = document.querySelector(".diesel3-liter");
const diesel4Liter = document.querySelector(".diesel4-liter");

const petrol1Amount = document.querySelector(".petrol1-amount");
const diesel1Amount = document.querySelector(".diesel1-amount");
const diesel2Amount = document.querySelector(".diesel2-amount");
const diesel3Amount = document.querySelector(".diesel3-amount");
const diesel4Amount = document.querySelector(".diesel4-amount");

const tutiAmount = document.querySelector(".tuti-amount");

const totalDieselLiter = document.querySelector(".total-diesel-liter");
const totalAmount = document.querySelector(".total-amount");

const total = document.querySelector(".total");
const extra = document.querySelector(".extra");

//buttons
const clearButton = document.querySelector(".clear");
const calculateButton = document.querySelector(".calculate");
const changeButton = document.querySelector(".change");
const saveButton = document.querySelector(".save");

const addButton = document.querySelectorAll(".add");
const totalButton = document.querySelector(".addAll");

var totalAmt;

//local storage
if (localStorage.getItem('petrolRate') && localStorage.getItem('dieselRate')) {
    petrolRate.value = localStorage.getItem("petrolRate");
    dieselRate.value = localStorage.getItem("dieselRate");
} else {
    localStorage.setItem('petrolRate', '');
    localStorage.setItem('dieselRate', '');
    petrolRate.value = localStorage.getItem("petrolRate");
    dieselRate.value = localStorage.getItem("dieselRate");
}

calculateButton.addEventListener("click", () => {
    const pr = Number(petrolRate.value);
    const dr = Number(dieselRate.value);
    const tr = 7;

    const p1s = Number(petrol1Start.value);
    const d1s = Number(diesel1Start.value);
    const d2s = Number(diesel2Start.value);
    const d3s = Number(diesel3Start.value);
    const d4s = Number(diesel4Start.value);

    const p1e = Number(petrol1End.value);
    const d1e = Number(diesel1End.value);
    const d2e = Number(diesel2End.value);
    const d3e = Number(diesel3End.value);
    const d4e = Number(diesel4End.value);

    const tuti = Number(tutiPieces.value);

    const p1l = p1e - p1s;
    const d1l = d1e - d1s;
    const d2l = d2e - d2s;
    const d3l = d3e - d3s;
    const d4l = d4e - d4s;

    const tdl = d1l + d2l + d3l + d4l;
    const tda = tdl * dr;
    const tpa = p1l * pr;
    const tutiA = tuti * tr;
    const ta = tda + tpa + tutiA;

    petrol1Liter.innerHTML = p1l.toFixed(2);
    diesel1Liter.innerHTML = d1l.toFixed(2);
    diesel2Liter.innerHTML = d2l.toFixed(2);
    diesel3Liter.innerHTML = d3l.toFixed(2);
    diesel4Liter.innerHTML = d4l.toFixed(2);

    petrol1Amount.innerHTML = p1l + " x " + pr + " = " + (p1l * pr).toFixed(2);
    diesel1Amount.innerHTML = d1l + " x " + dr + " = " + (d1l * dr).toFixed(2);
    diesel2Amount.innerHTML = d2l + " x " + dr + " = " + (d2l * dr).toFixed(2);
    diesel3Amount.innerHTML = d3l + " x " + dr + " = " + (d3l * dr).toFixed(2);
    diesel4Amount.innerHTML = d4l + " x " + dr + " = " + (d4l * dr).toFixed(2);

    tutiAmount.innerHTML = tuti + " x " + tr + " = " + tutiA.toFixed(2);

    totalDieselLiter.innerHTML = tdl.toFixed(2);
    totalAmount.innerHTML = ta.toFixed(2);

    totalAmt = ta;
});

clearButton.addEventListener("click", () => {
    petrol1Start.value = "";
    petrol1End.value = "";
    petrol1Amount.innerHTML = "";
    petrol1Liter.innerHTML = "";

    diesel1Start.value = "";
    diesel1End.value = "";
    diesel1Amount.innerHTML = "";
    diesel1Liter.innerHTML = "";

    diesel2Start.value = "";
    diesel2End.value = "";
    diesel2Amount.innerHTML = "";
    diesel2Liter.innerHTML = "";

    diesel3Start.value = "";
    diesel3End.value = "";
    diesel3Amount.innerHTML = "";
    diesel3Liter.innerHTML = "";

    diesel4Start.value = "";
    diesel4End.value = "";
    diesel4Amount.innerHTML = "";
    diesel4Liter.innerHTML = "";

    tutiPieces.value = "";
    tutiAmount.innerHTML = "";
    totalDieselLiter.innerHTML = "";
    totalAmount.innerHTML = "";

    totalAmt = 0;

    const cash = document.querySelectorAll(".cash .amt");
    let n = cash.length;
    for (let i = 1; i < n; i++)
        cash[i].remove();
    cash[0].value = "";

    const phonePe = document.querySelectorAll(".phonePe .amt");
    n = phonePe.length;
    for (let i = 1; i < n; i++)
        phonePe[i].remove();
    phonePe[0].value = "";

    const sbiPos = document.querySelectorAll(".sbiPos .amt");
    n = sbiPos.length;
    for (let i = 1; i < n; i++)
        sbiPos[i].remove();
    sbiPos[0].value = "";

    const sbi = document.querySelectorAll(".sbi .amt");
    n = sbi.length;
    for (let i = 1; i < n; i++)
        sbi[i].remove();
    sbi[0].value = "";

    const others = document.querySelectorAll(".others .amt");
    n = others.length;
    for (let i = 1; i < n; i++)
        others[i].remove();
    others[0].value = "";

    total.innerHTML = "";
    extra.innerHTML = "";
});

saveButton.addEventListener("click", () => {
    petrolRate.disabled = true;
    dieselRate.disabled = true;

    localStorage.setItem('petrolRate', petrolRate.value);
    localStorage.setItem('dieselRate', dieselRate.value);
});

changeButton.addEventListener("click", () => {
    petrolRate.disabled = false;
    dieselRate.disabled = false;

    petrolRate.value = "";
    dieselRate.value = "";
});

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", () => {
        let parent = addButton[i].parentElement;
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "number");
        newInput.setAttribute("class", "amt");
        parent.appendChild(newInput);
    })
}

totalButton.addEventListener("click", () => {
    const amt = document.getElementsByClassName("amt");

    let sum = 0;
    for (let i = 0; i < amt.length; i++)
        sum += Number(amt[i].value);

    total.innerHTML = sum.toFixed(2);
    let extraAmt = sum - totalAmt;

    extra.innerHTML = extraAmt.toFixed(2);
})