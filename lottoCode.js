/**
	LottoSim, Copyright Ole Dahle 2012.
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

function MultiDimArray(columns, rows) {
	var ar = new Array(columns);
	for (var i = 0; i < columns; i++) {
		ar[i] = new Array (rows);
	}
	return ar;
}

function getPrices(lines, correctNumbers, extraNumbers) {
    var i = 0;
	var line8Prices = MultiDimArray(8,4);
	line8Prices [7] [1] = {n1: 1, n2: 0, n3: 7, n4: 0, n5: 0};
	line8Prices[7][0] = {n1: 1, n2: 0, n3: 0, n4: 0, n5: 0};
	line8Prices[6][2] = {n1: 1, n2: 0, n3: 7, n4: 0, n5: 0};
	
	
	switch(cupon.length)
	{
	case 7:
	return {n1: 1, n2: 0, n3: 0, n4: 0, n5: 0};
	break;
	case 8:
	return line8Prices[correctNumbers, extraNumbers];
	break;
	case 9:
	
	break;
	case 10:
	
	break;
	case 11:
	
	break;
	case 12:
	
	break;
	default:
	return {n1: 0, n2: 0, n3: 0, n4: 0, n5: 0};
	}
}

var cupon = new Array();
var numLines = 0;
var weekPrice = 0;
var winning;
var extra;
var corrects = 0;
var correctsExtra = 0;
	
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
//alert(number);
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
	$("#resultInfo").html("Ukens vinnertall: " + winning.toString() + "<br>" +
		  "Ekstratall: " + extra.toString() + "<br>" +
		  "Du fikk " + corrects + " vinnertall og " + correctsExtra + " ekstratall riktig.");
    var prices = getPrices(numLines, corrects, correctsExtra);
	alert(prices.toString());
}