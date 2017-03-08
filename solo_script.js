// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];
var arrayRobert = ["Robert", "26835", "66000", 1];
var arrayMayella = ["Mayella", "89068", "35000", 2];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout, arrayRobert, arrayMayella];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');


//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
//console.log('before loop array' + array);
var calcArray = [];
function newCalFunc() {
for(var i = 0; i < array.length; i++){
	//scott's code FAULT
	//array[i] = calculateSTI(array);
	calcArray.push(calculateSTI(array[i]));
}
return calcArray;
}
var newSetArray = newCalFunc();

//Loop to get the new array shown on the html page
for (var j = 0; j< newSetArray.length; j++) {
 newEl = document.createElement('li');
 newText = document.createTextNode(newSetArray[j]);
 newEl.appendChild(newText);
position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array[0]; // employee name
  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
//Round up decimal data'
	//FAULT - not round the bonus;
	//Scott's code: newArray[1] = Math.round(bonus);
  newArray[1] = bonus; // percentage of STI employee to receive
  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); // adjusted annual compensation
  newArray[3] = Math.round(baseSalary * bonus); //total bonus rounded to nearest dollar
  console.log(newArray[0] + " " + Math.round(newArray[1]) + " " + Math.round(newArray[2]) + " " + Math.round(newArray[3]));
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
	//takeout basePercent -1
	//console.log('base%' + basePercent);
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
