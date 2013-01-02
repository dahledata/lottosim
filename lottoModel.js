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
 * Represents the time in the model, week based.
 */
function Time() {
    this.curYear = 0;
    this.curWeek = 0;
    
   
    /**
     * Calculate week number for a given year, month, day.
     * Thanks to Tommy Skaue
     * http://www.codeproject.com/Articles/4044/Javascript-to-find-the-weeknumber-Gregorian-Calend
     * @param year
     * @param month JavaScript month (0-11).
     * @param day
     * @returns week number of the year, 1 - 53.
     */
   if (typeof(this.getWeekNumber)=='undefined') {
        Time.prototype.getWeekNumber = function(year,month,day) {
            //lets calc weeknumber the cruel and hard way :D
            //Find JulianDay 
            month += 1; //use 1-12
            var a = Math.floor((14-(month))/12);
            var y = year+4800-a;
            var m = (month)+(12*a)-3;
            var jd = day + Math.floor(((153*m)+2)/5) + 
            (365*y) + Math.floor(y/4) - Math.floor(y/100) + 
            Math.floor(y/400) - 32045;      // (gregorian calendar)
            //var jd = (day+1)+Math.Round(((153*m)+2)/5)+(365+y) + 
            //                 Math.round(y/4)-32083;    // (julian calendar)

            //now calc weeknumber according to JD
            var d4 = (jd+31741-(jd%7))%146097%36524%1461;
            var L = Math.floor(d4/1460);
            var d1 = ((d4-L)%365)+L;
            NumberOfWeek = Math.floor(d1/7) + 1;
            return NumberOfWeek;        
        };
    };
    
   if (typeof(this.getYear)=='undefined') {
      Time.prototype.getYear = function() {
          return this.curYear;
      };
    };
    
   if (typeof(this.getWeek)=='undefined') {
      Time.prototype.getWeek = function() {
          return this.curWeek;
      };
    }

    
    /**
     * Move to next week.
     */
   if (typeof(this.increaseWeek)=='undefined') {
        Time.prototype.increaseWeek = function() {
            if (this.curWeek == 52) {
                if (extraWeekThisYear(this.curYear)) {
                    this.curWeek++;
                } else {
                    this.curWeek = 1;
                    this.curYear++;
                }
            }
            else {
                this.curWeek++;
            }
        };
    };
    
   if (typeof(this.extraWeek)=='undefined') {
        Time.prototype.extraWeek = function(year) {
            // Check if Dec. 31 is in week 53 this year.
            return (this.getWeekNumber(year, 11, 31)) == 53;
        };
    };
    
   if (typeof(this.reset)=='undefined') {
        Time.prototype.reset = function() {
            var now = new Date();
            this.curYear = now.getFullYear();
            var cWeek = this.getWeekNumber(this.curYear, now.getMonth(), now.getDay());
            this.curWeek = cWeek;
        };
    };
};

/**
 * Player object, keeps the lotto cupon and the result of the gambling.
 */
function Player() {
    this.saldo = -1;
    this.cupon = [];

   if (typeof(this.reset)=='undefined') {
        Player.prototype.reset =  function() {
            this.saldo = 0;
            this.cupon = [];
        };
    };
}

/**
 * The model keeps the state of the world.
 */
function Model() {
    this.player = null;
    this.time = null;
    
   if (typeof(this.reset)=='undefined') {
        Model.prototype.reset =  function() {
            this.player = new Player();
            this.time = new Time();
            this.time.reset();
            this.player.reset();
        };
    };
};
