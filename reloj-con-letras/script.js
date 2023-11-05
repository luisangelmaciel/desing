// Modified Number to Word function:
// https://jesusjzp.github.io/blog/2014/03/06/javascript-number-word-conversion/
// Redesing by https://luisangelmaciel.vercel.app/


var singleNumber = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

var tenPlus = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];

var tens = ['veinti', 'treinta y', 'cuarenta y', 'cincuenta y'];

function num2word(str) {
    str = str.toString().replace(/[\, ]/g, '');

    if (str != parseFloat(str)) {
        return 'not a number';
    }

    var strLength = str.indexOf('.');
    if (strLength == -1) {
        strLength = str.length;
    }

    var n = str.split('');
    var result = '';
    var skip = 0;
    for (var i = 0; i < strLength; i++) {

        if ((strLength - i) % 3 == 2) {
            if (n[i] == '1') {
                result += tenPlus[Number(n[i + 1])] + ' ';
                i++;
                skip = 1;
            } else if (n[i] != 0) {
                result += tens[n[i] - 2] + ' ';
                skip = 1;
            }
        } else if (n[i] != 0) {
            result += singleNumber[n[i]] + ' ';
        }
    }

    return result.replace(/\s+/g, ' ');
}

/*
Color Helper Functions, via:
http://stackoverflow.com/questions/4726344/how-do-i-change-text-color-determined-by-the-background-color
*/
function idealTextColor(bgColor) {

   var nThreshold = 105;
   var components = getRGBComponents(bgColor);
   var bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

   return ((255 - bgDelta) < nThreshold) ? "#333333" : "#ffffff";
}

function getRGBComponents(color) {       

    var r = color.substring(1, 3);
    var g = color.substring(3, 5);
    var b = color.substring(5, 7);

    return {
       R: parseInt(r, 16),
       G: parseInt(g, 16),
       B: parseInt(b, 16)
    };
}

/* 
Selectors 
*/
var hour = document.getElementsByClassName('hour'),
    min = document.getElementsByClassName('min'),
    sec = document.getElementsByClassName('sec'),
    ampm = document.getElementsByClassName('ampm'),
    cover = document.getElementsByClassName('cover');

var firstTime = true;

/*
Updated the clock 
*/
function updateClock(d) {
  var hours = ((d.getHours() + 11) % 12 + 1),
      minutes = d.getMinutes(),
      seconds = d.getSeconds(),
      period = (d.getHours() < 12) ? "am" : "pm";
  
  console.log(hours);
   
  hour[0].innerHTML = num2word(hours);
  min[0].innerHTML = num2word(minutes);
  sec[0].innerHTML = num2word(seconds);
  ampm[0].innerHTML = period;
  
}

/*
Update bg cover width & color
*/
function updateCover(d) {
  
  var seconds = d.getSeconds(),
      color = '#'+Math.floor(Math.random()*16777215).toString(16),
      whiteOrBlack = idealTextColor(color);
  
  if (seconds === 0 || firstTime) {
    cover[0].style.backgroundColor = color;
    cover[0].style.color = whiteOrBlack;
    firstTime = false;
  }
  
  cover[0].style.left = ((seconds * 100) / 60) + "%";
  
}

/*
Run updateClock every second 
*/
setInterval(function() {
  var d = new Date();
  updateClock(d);
  updateCover(d);
}, 1000);