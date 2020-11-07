/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
 
const week = new Array(7).fill(0);
// parameters
// leap year
let Months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
}
let firstSundays = 0
const firstSundaysArr = [];
let leapCounter = 0
let weekday = 0
//years
for(let y = 0;y < 100; y++){
    firstSundaysArr.push([])
    if(leapCounter === 4){
        leapCounter = 0
        Months['February'] = 29
    }else {
        Months['February'] = 28
    }
    //months
    for(let m in Months){
        for(let d = 1;d <= Months[m];d++){
            if(weekday >= 7){
                weekday = 0
            }
            if(d === 1 && weekday === 6){
                firstSundays++
                firstSundaysArr[y].push(`19${y} ${m}`)
            }
            weekday++
        }
    }
    leapCounter += 1
}
console.log(firstSundays-1)
