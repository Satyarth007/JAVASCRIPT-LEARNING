// GENERAL DATE OBJECT :- 
let satya=new Date();
console.log(satya);   //Tue Oct 04 2022 22:07:59 GMT+0530 (India Standard Time)

//DATE OBJECT METHODS:- 
//-------------------

// satya.getDate() :- Returns the day of the month (1–31) for the specified date according to local time.
   console.log(satya.getDate());

// satya.getDay() :- Returns the day of the week (0–6) for the specified date according to local time.
   console.log(satya.getDay());

// satya.getFullYear() :- Returns the year (4 digits for 4-digit years) of the specified date according to local time.
   console.log(satya.getFullYear());

// satya.getHours() :- Returns the hour (0–23) in the specified date according to local time.
   console.log(satya.getHours());

// satya.getMilliseconds() :- Returns the milliseconds (0–999) in the specified date according to local time.
   console.log(satya.getMilliseconds());

// satya.getMinutes():- Returns the minutes (0–59) in the specified date according to local time.
   console.log(satya.getMinutes());

// satya.getMonth() :- Returns the month (0–11) in the specified date according to local time.
   console.log(satya.getMonth());

// satya.getSeconds() :- Returns the seconds (0–59) in the specified date according to local time.
   console.log(satya.getSeconds());

// satya.getTime() :- Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
   console.log(satya.getTime());

// satya.getTimezoneOffset() :- Returns the time-zone offset in minutes for the current locale.
   console.log(satya.getTimezoneOffset());

// satya.setDate() :- Sets the day of the month for a specified date according to local time.
    satya.setDate(2);
    console.log(satya);
   
// satya.setFullYear() :- Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
    satya.setFullYear(2012);
    console.log(satya);

// satya.setHours() :- Sets the hours for a specified date according to local time.
    satya.setHours(5);
    console.log(satya);

// satya.setMilliseconds() :- Sets the milliseconds for a specified date according to local time.
    satya.setMilliseconds(55);
    console.log(satya);

// satya.setMinutes() :- Sets the minutes for a specified date according to local time.
    satya.setMinutes(23);
    console.log(satya);

//satya.setMonth() :- Sets the month for a specified date according to local time.
    satya.setMonth(7);
    console.log(satya);

//satya.setSeconds() :- Sets the seconds for a specified date according to local time.
    satya.setSeconds(45);
    console.log(satya);

//satya.setTime() :- Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.   
    satya.setTime(100000004646700);
    console.log(satya);

// and many more functions :-    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date 
