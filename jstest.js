var arr = [];
var median, mean, mode;
function getVals() {
  arr = prompt("Enter your numbers").split(",");
  arr = arr.sort();
  var median = parseInt(arr[arr.length/2]);
  document.getElementById('middiv').innerHTML += ' ' + arr;
}

function getDetails() {
  setMode();
  setMean();
  document.getElementById('middiv').innerHTML += '<br> Mode: ' + mode;
  document.getElementById('middiv').innerHTML += '<br> Median: ' + median;
  document.getElementById('middiv').innerHTML += '<br> Mode: ' + mean;
}

function getMode() {
  
}

function getMean() {

}
