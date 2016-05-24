var arr = [];

function getVals() {
  var median, mean = null, mode; //null does not do anything!
  document.getElementById('answerdiv').innerHTML = "";
  arr = prompt("Enter your numbers").split(",");
  arr.sort(function(a,b){return a - b});
  document.getElementById('answerdiv').innerHTML += 'Sorted Array: ' + arr;
  if(arr.length % 2 == 0) {
    median = arr[parseInt(arr.length/2 - 1, 10)];
  } else median = arr[parseInt(arr.length/2, 10)];
  mode = getMode(arr);
  mean = getMean(arr); //I don't understand the problem- always sets to 30.75
  getDetails(mode, median, mean);
}

function getMean(arr) { //anything wrong?
  var total = 0;
  for(var i = 0; i < arr.length; i++) {
    total += parseInt(arr[i], 10);
  }
  return total / arr.length;
}

function getDetails(mode, median, mean) { //tried getting rid of global variables
  document.getElementById('answerdiv').innerHTML += '<br> Mode: ' + mode;
  document.getElementById('answerdiv').innerHTML += '<br> Median: ' + median + '     **Note: takes closest if even length';
  document.getElementById('answerdiv').innerHTML += '<br> Mean: ' + mean;
}

function getMode(arr) {
  var numMapping = {};
  var greatestFreq = 0;
  var mode;
  arr.forEach(function findMode(number) {
      numMapping[number] = (numMapping[number] || 0) + 1;
      if (greatestFreq < numMapping[number]) {
          greatestFreq = numMapping[number];
          mode = number;
      }
  });
  return +mode;
}
