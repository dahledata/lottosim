/**
    LottoSim, Copyright Ole Dahle 2012-2016.
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**			 
* Returns a random integer between 1 and 34
 * Using Math.round() will give you a non-uniform distribution!
 */
function lottoNumber() {
	return Math.floor(Math.random() * (34)) + 1;
}

/**
 * http://www.protonfish.com/random.shtml
*/
function rnd_snd() {
    return (Math.random()*2-1)+(Math.random()*2-1)+(Math.random()*2-1);
}

function rnd(mean, stdev) {
    return Math.round(rnd_snd()*stdev+mean);
}

function positiveRandom(mean, stdev) {
    return Math.max(0, rnd(mean, stdev));
}

function MultiDimArray(columns, rows) {
	var ar = new Array(columns);
	for (var i = 0; i < columns; i++) {
		ar[i] = new Array (rows);
	}
	return ar;
}

function getPriceMoney() {
	return [
	    positiveRandom(4286606, 2801355),
	    positiveRandom(95200, 6206),
	    positiveRandom(6206, 1124),
	    positiveRandom(201, 20),
	    positiveRandom(47, 4)
	];
}

function getPrices(lines, correctNumbers, extraNumbers) {
	var line8Prices = MultiDimArray(8,4);
	var line9Prices = MultiDimArray(8,4);
	var line10Prices = MultiDimArray(8,4);
	var line11Prices = MultiDimArray(8,4);
	var line12Prices = MultiDimArray(8,4);
	
	line8Prices[7][1] = [1, 0, 7, 0, 0];
	line8Prices[7][0] = [1, 0, 0, 0, 0];
	line8Prices[6][2] = [0, 2, 0, 6, 0];
    line8Prices[6][1] = [0, 1, 1, 6, 0];
    line8Prices[6][0] = [0, 0, 2, 6, 0];
    line8Prices[5][3] = [0, 0, 0, 3, 5];
    line8Prices[5][2] = [0, 0, 0, 3, 5];
    line8Prices[5][1] = [0, 0, 0, 3, 5];
    line8Prices[5][0] = [0, 0, 0, 3, 0];
    line8Prices[4][3] = [0, 0, 0, 0, 4];
    line8Prices[4][2] = [0, 0, 0, 0, 4];
    line8Prices[4][1] = [0, 0, 0, 0, 3];
    line8Prices[4][0] = [0, 0, 0, 0, 0];

    line9Prices[7][2] = [1, 14, 0, 21, 0];
    line9Prices[7][1] = [1, 7, 7, 21, 0];
    line9Prices[7][0] = [1, 0, 14, 21, 0];
    line9Prices[6][3] = [0, 3, 0, 18, 15];
    line9Prices[6][2] = [0, 2, 1, 18, 15];
    line9Prices[6][1] = [0, 1, 2, 18, 15];
    line9Prices[6][0] = [0, 0, 3, 18, 0];
    line9Prices[5][3] = [0, 0, 0, 6, 20];
    line9Prices[5][2] = [0, 0, 0, 6, 20];
    line9Prices[5][1] = [0, 0, 0, 6, 15];
    line9Prices[5][0] = [0, 0, 0, 6, 0];
    line9Prices[4][3] = [0, 0, 0, 0, 10];
    line9Prices[4][2] = [0, 0, 0, 0, 9];
    line9Prices[4][1] = [0, 0, 0, 0, 6];
    line9Prices[4][0] = [0, 0, 0, 0, 0];
  
    line10Prices[7][3] = [1, 21, 0, 63, 35];
    line10Prices[7][2] = [1, 14, 7, 63, 35];
    line10Prices[7][1] = [1, 7, 14, 63, 35];
    line10Prices[7][0] = [1, 0, 21, 63, 0];
    line10Prices[6][3] = [0, 3, 1, 36, 60];
    line10Prices[6][2] = [0, 2, 2, 36, 60];
    line10Prices[6][1] = [0, 1, 3, 36, 60];
    line10Prices[6][0] = [0, 0, 4, 36, 0];
    line10Prices[5][3] = [0, 0, 0, 10, 50];
    line10Prices[5][2] = [0, 0, 0, 10, 45];
    line10Prices[5][1] = [0, 0, 0, 10, 30];
    line10Prices[5][0] = [0, 0, 0, 10, 0];
    line10Prices[4][3] = [0, 0, 0, 0, 19];
    line10Prices[4][2] = [0, 0, 0, 0, 16];
    line10Prices[4][1] = [0, 0, 0, 0, 10];
    line10Prices[4][0] = [0, 0, 0, 0, 0];
 
    line11Prices[7][3] = [1, 21, 7, 126, 140];
    line11Prices[7][2] = [1, 14, 14, 126, 140];
    line11Prices[7][1] = [1, 7, 21, 126, 105];
    line11Prices[7][0] = [1, 0, 28, 126, 0];
    line11Prices[6][3] = [0, 3, 2, 60, 150];
    line11Prices[6][2] = [0, 2, 3, 60, 135];
    line11Prices[6][1] = [0, 1, 4, 60, 90];
    line11Prices[6][0] = [0, 0, 5, 50, 0];
    line11Prices[5][3] = [0, 0, 0, 15, 95];
    line11Prices[5][2] = [0, 0, 0, 15, 80];
    line11Prices[5][1] = [0, 0, 0, 15, 50];
    line11Prices[5][0] = [0, 0, 0, 15, 0];
    line11Prices[4][3] = [0, 0, 0, 0, 31];
    line11Prices[4][2] = [0, 0, 0, 0, 25];
    line11Prices[4][1] = [0, 0, 0, 0, 15];
    line11Prices[4][0] = [0, 0, 0, 0, 0];
   
    line12Prices[7][3] = [1, 21, 14, 210, 350];
    line12Prices[7][2] = [1, 14, 21, 21, 315];
    line12Prices[7][1] = [1, 7, 28, 210, 210];
    line12Prices[7][0] = [1, 0, 35, 210, 0];
    line12Prices[6][3] = [0, 3, 3, 90, 285];
    line12Prices[6][2] = [0, 2, 4, 90, 240];
    line12Prices[6][1] = [0, 1, 5, 90, 150];
    line12Prices[6][0] = [0, 0, 6, 90, 0];
    line12Prices[5][3] = [0, 0, 0, 21, 155];
    line12Prices[5][2] = [0, 0, 0, 21, 125];
    line12Prices[5][1] = [0, 0, 0, 21, 75];
    line12Prices[5][0] = [0, 0, 0, 21, 0];
    line12Prices[4][3] = [0, 0, 0, 0, 46];
    line12Prices[4][2] = [0, 0, 0, 0, 36];
    line12Prices[4][1] = [0, 0, 0, 0, 21];
    line12Prices[4][0] = [0, 0, 0, 0, 0];
   
	switch(cupon.length)
	{
	case 7:
	    return [1, 0, 0, 0, 0];
	break;
	case 8:
	    return line8Prices[correctNumbers][extraNumbers];
	break;
	case 9:
	    return line9Prices[correctNumbers][extraNumbers];
	break;
	case 10:
	    return line10Prices[correctNumbers][extraNumbers];
	break;
	case 11:
	    return line11Prices[correctNumbers][extraNumbers];
	break;
	case 12:
	    return line12Prices[correctNumbers][extraNumbers];
	break;
	default:
	return [0, 0, 0, 0, 0];
	}
}

var cupon = new Array();
var numLines = 0;
var weekPrice = 0;
var winning;
var extra;
var corrects = 0;
var correctsExtra = 0;
var model;

/**
 * Check for support in browser.
 * @return true if WebWorkers are supported
 */
function webWorkersSupported() {
    if( window.Worker ) {
        return true;
    }
   return false;
}
	
function drawNumbers() {
	winning = new Array();
	extra = new Array();
	while(winning.length < 7) {
		var num = lottoNumber();
		if (winning.indexOf(num) == -1) {
			winning[winning.length] = num;
			var li = document.createElement("li");
			li.innerHTML = num;
			$("#result").prepend(li);
		}
	}
	while(extra.length < 3) {
		var num = lottoNumber();
		if (winning.indexOf(num) == -1 && extra.indexOf(num) == -1) {
			extra[extra.length] = num;
		}
	}
	winning.sort(function(a,b){return a-b});
	extra.sort(function(a,b){return a-b});
}

function mockDrawNumbers() {
	winning = [1,2,3,4,5,6,7];
	extra = [9,10,11];
}

function checkCupon() {
	corrects = correctsExtra = 0;
	var i = 0;
	for (i=0; i < cupon.length; i++) {
		if (winning.indexOf(cupon[i]) != -1) { corrects++;}
		if (extra.indexOf(cupon[i]) != -1) { correctsExtra++;}
	}
}

function updateCupon() {
 switch(cupon.length)
{
case 7:
  numLines = 1; 
  break;
case 8:
  numLines = 8; 
  break;
 case 9:
  numLines = 36; 
  break;
 case 10:
  numLines = 120; 
  break;
 case 11:
  numLines = 330; 
  break;
 case 12:
  numLines = 792; 
  break;
default:
  numLines = weekPrice = 0;
}
weekPrice = numLines * 4;
	$("#cuponLength").html(cupon.length);
	$("#cuponDisplay").html(cupon.toString());
	var lineString = numLines == 1? "rekke": "rekker"; 
	$("#cuponLines").html(numLines + " " + lineString);
	$("#cuponPrice").html(weekPrice);
}

function toggleNumber(number) {
    $(".number").eq(number-1).toggleClass("selected");
	if (cupon.indexOf(number) >= 0) {
		cupon.splice(cupon.indexOf(number),1);
	} else {
		if (cupon.length >= 12) { return; };
		cupon[cupon.length] = number;
		cupon.sort(function(a,b){return a-b});
	}
	updateCupon();
	//$("#test1").enabled(cupon.length >= 7);
}

function drawAndCheck() {
	//drawNumbers();
	mockDrawNumbers();
	checkCupon();

	var result = 0;
    var prices = getPrices(numLines, corrects, correctsExtra);
    var money = getPriceMoney();
    var infoText = "";
    $("#resultInfo").empty();
    for (var i = 0; i < 5; i++) {
        result += prices[i] * money[i];
    }
    infoText = "Ukens vinnertall: " + winning.toString() + "<br>" +
            "Ekstratall: " + extra.toString() + "<br>" +
            "Du fikk " + corrects + " vinnertall og " + correctsExtra + " ekstratall riktig.<br>";
    
    if (result > 0) {
        infoText += "Du fikk ";
        var first = true;
        if (prices[0] > 0) {
            infoText += "1 førstepremie"; 
            first = false;
        }
        if (prices[1] == 1) {
            if (!first) {infoText += ", ";}
            infoText += "1 andrepremie"; 
        } else if (prices[1] > 1) {
            if (!first) {infoText += ", ";}
            infoText += prices[1] + " andrepremier"; 
        } 
        if (prices[2] == 1) {
            if (!first) {infoText += ", ";}
            infoText += "1 tredjepremie"; 
        } else if (prices[2] > 1) {
            if (!first) {infoText += ", ";}
            infoText += prices[2] + " tredjepremier"; 
        } 
        if (prices[3] == 1) {
            if (!first) {infoText += ", ";}
            infoText += "1 fjerdeepremie"; 
        } else if (prices[3] > 1) {
            if (!first) {infoText += ", ";}
            infoText += prices[2] + " fjerdeepremier"; 
        } 
        if (prices[4] == 1) {
            if (!first) {infoText += ", ";}
            infoText += "1 femteepremie"; 
        } else if (prices[4] > 1) {
            if (!first) {infoText += ", ";}
            infoText += prices[2] + " femteeepremier"; 
        } 
        infoText +=".";
  
        alert("Du vant " + result.toString() + " kr!");
    }
    var couponPrice = $("#couponPrice").html();
    model.player.saldo += (result - couponPrice);
    model.time.increaseWeek();
    $("#resultInfo").html(infoText);
    updateStatus();
}

function updateStatus() {
    $("#weekInfo").html(model.time.getWeek());
    $("#yearInfo").html(model.time.getYear());
    $("#saldo").html(model.player.saldo);
}

$(document).ready( function() {
   if (!webWorkersSupported()) {
      $("#payDirt").remove();
   }
   model = new Model;
   model.reset();
   updateStatus();
});
