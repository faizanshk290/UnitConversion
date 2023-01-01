const convertBtnEl = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function lengthToFeet()
{
    return (Number(inputEl.value) * 3.281).toFixed(3)
}
function feetToLength()
{
    return (Number(inputEl.value)/3.281).toFixed(3)
}
function litersToGallons()
{
    return (Number(inputEl.value) * 0.264).toFixed(3)
}
function gallonsToLiters()
{
    return (Number(inputEl.value)/0.264).toFixed(3)
}
function kilosToPounds()
{
    return (Number(inputEl.value) * 2.204).toFixed(3)
}
function poundsToKilos()
{
    return (Number(inputEl.value)/2.204).toFixed(3)
}

convertBtnEl.addEventListener("click",()=>{
    lengthEl.textContent = `${inputEl.value} meters = ${lengthToFeet()} feet | ${inputEl.value} feet = ${feetToLength()} meters`
    volumeEl.textContent = `${inputEl.value} liters = ${litersToGallons()} gallons | ${inputEl.value} gallons = ${gallonsToLiters()} liters`
    massEl.textContent = `${inputEl.value} kilos = ${kilosToPounds()} pounds | ${inputEl.value} pounds = ${poundsToKilos()} kilos`
})
