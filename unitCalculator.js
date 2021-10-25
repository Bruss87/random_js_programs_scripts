const prompt = require('prompt-sync')();


const arrayOfUnits = ['m', 'inch', 'kg', 'lbs', 'km', 'mi']
const mToInch = (value) => value * 39.37
const kmToMiles = (value) => value/1.609
const kgToPounds = (value) => value * 2.205

let initialUnitInput = prompt('insert initial unit: ')
let resultUnitInput = prompt('insert result unit: ')
let valueInput = prompt('insert value which you want to calculate: ')
valueInput = Number(valueInput);


const unitConversion = (initialUnit, resultUnit, value) => {

    const isValidUnit = arrayOfUnits.some(unit => (initialUnit || resultUnit) !== unit);
    const hasValues = initialUnit === '' || resultUnit === '' || value === 0;

    if(isValidUnit) { throw 'You must provide valid unit represantion' };
    if(hasValues) { throw 'You must provide details for your calculation' }; 

    if(initialUnit === 'kg' && resultUnit === 'lbs') {
        return kgToPounds(value)
    };
    if(initialUnit === 'km' && resultUnit === 'mi') {
        return kmToMiles(value)
    };
    if(initialUnit === 'm' && resultUnit === 'inch') {
        return mToInch(value)
    };
return
}
console.log(unitConversion(initialUnitInput, resultUnitInput, valueInput)) 
