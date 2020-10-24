window.onload = function cdate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById('cdate').value = today;
}

function result() {

    //birtdate info

    let bdate = document.getElementById('bdate').value;
    bdate = new Date(bdate);

    let dd = bdate.getDate();
    let mm = bdate.getMonth() + 1; //January is 0!
    let yyyy = bdate.getFullYear();
    //currentdate info
    let cdate = document.getElementById('cdate').value;
    cdate = new Date(cdate);
    let dd1 = cdate.getDate();
    let mm1 = cdate.getMonth() + 1; //January is 0!
    let yyyy1 = cdate.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let nd = dd,
        nm = mm;
    if (mm1 > mm) {
        nm = mm + 12;
    }
    if (dd1 > dd) {
        nd = dd + months[mm1 - 1];
    }
    if (mm == mm1) {
        if(dd<dd1){
        	nm=mm+11;
        }
    }

    if(mm>mm1){
    	nm=mm-1;
    }

    let rd = nd - dd1;
    let rm = nm - mm1;
    if(rd===0&&rm===0){
    	rm=12;
    }

    //calculating total days.
    let y = yyyy1 - yyyy - 1;
    let c = 0;
    //leap year count
    for (let i = (yyyy + 1); i < yyyy1; i++) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0))

            c++;
    }

    let m = y * 7 * 31; // calculate number days of month which 31 days
    let m1 = y * 4 * 30; // calculate number days of month which 30 days
    let m2 = (c * 29) + (y - c) * 28; // calculate number days of month which is feb
    let days = m + m1 + m2; // number of days without current year and birth year
    c = 0;
    if (((yyyy % 4 == 0) && (yyyy % 100 != 0)) || (yyyy % 400 == 0)) c++;
    if (((yyyy1 % 4 == 0) && (yyyy1 % 100 != 0)) || (yyyy1 % 400 == 0)) c++;


    for (let i = mm; i < 12; i++) {
        days += months[i];
    }

    days += months[mm - 1] - dd;
    for (let i = 0; i < mm1 - 1; i++) {
        days += months[i];
    }
    days += dd1 + c;
    //
    if (dd > dd1) {
        dd1 = dd1 + months[mm - 1];
        mm1 = mm1 - 1;
    }
    if (mm > mm1) {
        mm1 = mm1 + 12;
        yyyy1 -= 1;
    }
    let formatter = new Intl.NumberFormat('en');
    let calculted_date = dd1 - dd;
    let calculted_month = mm1 - mm;
    let calculted_year = yyyy1 - yyyy;
    let result = "Your Age is " + calculted_year + " Years " + calculted_month + " months " + calculted_date + " days";
    let total_month = (calculted_year * 12) + calculted_month;

    let total_weeks = Math.floor(days / 7);
    let day_left_afterWeeks = days - (total_weeks * 7);
    let total_hrs = days * 24;
    let total_mins = total_hrs * 60;
    let total_secs = total_mins * 60;
    total_weeks = formatter.format(total_weeks);
    total_hrs = formatter.format(total_hrs);
    total_mins = formatter.format(total_mins);
    total_secs = formatter.format(total_secs);
    days = formatter.format(days);

    let message = "Right Now I am " + calculted_year + " Years old or " + total_secs + " to be more Precise!";
    let months_name = ["January", "February", "March", "April", "May", "June", "July", "Agaust", "September", "october", "November", "December"];

    // find out the day of birth
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    let birth_day = new Date(bdate);
    birth_day = birth_day.getDay();
    birth_day = day[birth_day];

    message += " I was born in " + yyyy + " on a fine " + birth_day + " of " + months_name[mm - 1] + ". My next Birtday is " + rm + " months and " + rd + " days latter.";

    //summary of life
    document.getElementById('year').textContent = calculted_year;
    document.getElementById('month').textContent = total_month;
    document.getElementById('week').textContent = total_weeks;
    document.getElementById('days').textContent = days;
    document.getElementById('hrs').textContent = total_hrs;
    document.getElementById('mins').textContent = total_mins;
    document.getElementById('secs').textContent = total_secs;
    document.getElementById('result').textContent = result;
    document.querySelector('.message').textContent = message;
    //Upcoming Birthdays
    let date1;
    if (mm1 <= mm) {
        if (dd1 < dd) {
            date1 = yyyy1 + "-" + mm + "-" + dd;
        } else{
            date1 = (++yyyy1) + "-" + mm + "-" + dd;
            yyyy1++;
        }
    } else {
        yyyy1 += 1;
        date1 = (yyyy1) + "-" + mm + "-" + dd;
        yyyy1++;
    }
    let date2 = (yyyy1++) + "-" + mm + "-" + dd;
    let date3 = (yyyy1++) + "-" + mm + "-" + dd;
    let date4 = (yyyy1++) + "-" + mm + "-" + dd;
    let date5 = (yyyy1++) + "-" + mm + "-" + dd;
    let date6 = (yyyy1++) + "-" + mm + "-" + dd;
    

    let day1 = new Date(date1);
    day1 = day1.getDay();
    day1 = day[day1];

    let day2 = new Date(date2);
    day2 = day2.getDay();
    day2 = day[day2];

    let day3 = new Date(date3);
    day3 = day3.getDay();
    day3 = day[day3];

    let day4 = new Date(date4);
    day4 = day4.getDay();
    day4 = day[day4];

    let day5 = new Date(date5);
    day5 = day5.getDay();
    day5 = day[day5];

    let day6 = new Date(date6);
    day6 = day6.getDay();
    day6 = day[day6];

    

    document.getElementById('date1').textContent = date1;
    document.getElementById('day1').textContent = day1;

    document.getElementById('date2').textContent = date2;
    document.getElementById('day2').textContent = day2;

    document.getElementById('date3').textContent = date3;
    document.getElementById('day3').textContent = day3;

    document.getElementById('date4').textContent = date4;
    document.getElementById('day4').textContent = day4;

    document.getElementById('date5').textContent = date5;
    document.getElementById('day5').textContent = day5;

    document.getElementById('date6').textContent = date6;
    document.getElementById('day6').textContent = day6;

   

    /*console.log(date1);
    console.log(date2);
    console.log(date3);
    console.log(date4);
    console.log(date5);
    console.log(date6);
    console.log(date7);

    console.log(day1);
    console.log(day2);
    console.log(day3);
    console.log(day4);
    console.log(day5);
    console.log(day6);
    console.log(day7);*/
    document.querySelector(".info").style.display="flex";
    document.querySelector(".result").style.display="block";

}