var arr = [];
var median, mean, mode;
function getVals() {
  arr = prompt("Enter your numbers").split(",");
  arr = arr.sort();
  var median = parseInt(arr[arr.length/2]);
  document.getElementById('middiv').innerHTML += ' ' + arr;
  getDetails();
}

function getDetails() {
  setMode();
  setMean();
  document.getElementById('middiv').innerHTML += '<br> Mode: ' + mode;
  document.getElementById('middiv').innerHTML += '<br> Median: ' + median;
  document.getElementById('middiv').innerHTML += '<br> Mode: ' + mean;
}

function setMode() {
  var mode = {};
  var max = 0, count = 0;
  arr.forEach(function(e) {
    if (mode[e]) {
      mode[e]++; 
    } else { 
      mode[e] = 1;
    }
    if (count < mode[e]) { 
      max = e;
      count = mode[e];
    }
  });
  mode = max;
}

function setMean() {
  var sum = 0;
  for( var i = 0; i < arr.length; i++ ){
    sum += parseInt( arr[i], 10 );
  }
  var avg = sum/arr.length;
  mean = avg;
}
