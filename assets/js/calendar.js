var calender = document.getElementById('calen'),
    month = document.getElementById('month'),
    day = document.getElementById('day'),
    year = document.getElementById('year'),
    date = new Date(),
    yearNumber = date.getFullYear(),
    monthNumber = date.getMonth(),
    activeMonth = date.getMonth(),
    activeYear = date.getFullYear(),
    dayNumber = date.getDay(),
    monthOfYear = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
    days = ['SUNDAY', 'MONDAY', 'THUSDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'MONDAY'],
    dayCount = document.getElementById('dayCount'),
    firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
    dayInMonth = date.getDate(),
    i = 1,
    x = 1,
    z = 1,
    l = 1,
    k = 1,
    dayCountNumber,
    emptyBlock,
    monthStart = new Date(yearNumber, monthNumber, 1);
year.innerHTML = yearNumber;
month.innerHTML = monthOfYear[monthNumber];
console.log(dayNumber);
$('.dayCount .box').eq(6).addClass('active');
if (monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11) {
    dayCountNumber = 31;
} else if (monthNumber === 1) {
    if (yearNumber % 4 === 0) {
        dayCountNumber = 29;
    } else {
        dayCountNumber = 28;
    }
} else {
    dayCountNumber = 30;
}
for (i; i < firstDay + 1; i++) {
    $('.dayCount').append('<p class="box" id="dayBox">' + '<p>');
}
for (x; x < dayCountNumber + 1; x++) {
    $('.dayCount').append('<p class="box" id="dayBox">' + '<span>' + x + '</span>' + '<p>');
}
emptyBlock = 42 - (dayCountNumber + firstDay);
for (z; z < emptyBlock; z++) {
    $('.dayCount').append('<p class="box empty" id="dayBox"/>');
}
$('.dayCount .box').eq(firstDay + dayInMonth - 1).addClass('activeParent');
$('.dayCount .activeParent').append('<div class="active"/>');
$('.dayCount .activeParent').css({
    color: '#000'
});
$('.left').click(function () {
    if (monthNumber > 0) {
        $(this).each(function () {
            monthNumber = monthNumber - 1;
            month.innerHTML = monthOfYear[monthNumber];
        });
    } else {
        monthNumber = 11;
        yearNumber = yearNumber - 1;
        year.innerHTML = yearNumber;
        month.innerHTML = monthOfYear[monthNumber];
    }
    $('.dayCount').empty();
    i = 1;
    x = 1;
    z = 1;
    firstDay = new Date(yearNumber, monthNumber, 1).getDay();
    emptyBlock = 35 - (dayCountNumber + firstDay)
    if (monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11) {
        dayCountNumber = 31;
    } else if (monthNumber === 1) {
        if (yearNumber % 4 === 0) {
            dayCountNumber = 29;
        } else {
            dayCountNumber = 28;
        }
    } else {
        dayCountNumber = 30;
    }
    for (i; i < firstDay + 1; i++) {
        $('.dayCount').append('<p class="box" id="dayBox">' + '<p>');
    }
    for (x; x < dayCountNumber + 1; x++) {
        $('.dayCount').append('<p class="box" id="dayBox">' + '<span>' + x + '</span>' + '<p>');
    }
    emptyBlock = 42 - (dayCountNumber + firstDay);
    for (z; z < emptyBlock; z++) {
        $('.dayCount').append('<p class="box" id="dayBox"><p>');
    }
    if (activeMonth === monthNumber && activeYear == yearNumber) {
        $('.dayCount .box').eq(firstDay + dayInMonth - 1).addClass('activeParent');
        $('.dayCount .activeParent').append('<div class="active"/>');
        $('.dayCount .activeParent').css({
            color: '#fff'
        });
    }
});
$('document').on('click',() => {
  alert('hello')
})
$('.right').click(function () {
    // alert('right')
    if (monthNumber < 11) {
        $(this).each(function () {
            monthNumber = monthNumber + 1;
            month.innerHTML = monthOfYear[monthNumber];
        });
    } else {
        monthNumber = 0;
        yearNumber = yearNumber + 1;
        year.innerHTML = yearNumber;
        month.innerHTML = monthOfYear[monthNumber];
    }
    $('.dayCount').empty();
    i = 1;
    x = 1;
    z = 1;
    firstDay = new Date(yearNumber, monthNumber, 1).getDay();
    emptyBlock = 35 - (dayCountNumber + firstDay)
    if (monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11) {
        dayCountNumber = 31;
    } else if (monthNumber === 1) {
        if (yearNumber % 4 === 0) {
            dayCountNumber = 29;
        } else {
            dayCountNumber = 28;
        }
    } else {
        dayCountNumber = 30;
    }
    for (i; i < firstDay + 1; i++) {
        $('.dayCount').append('<p class="box" id="dayBox">' + '<p>');
    }
    for (x; x < dayCountNumber + 1; x++) {
        $('.dayCount').append('<p class="box" id="dayBox">' + '<span>' + x + '</span>' + '<p>');
    }
    emptyBlock = 42 - (dayCountNumber + firstDay);
    for (z; z < emptyBlock; z++) {
        $('.dayCount').append('<p class="box" id="dayBox"><p>');
    }
    if (activeMonth === monthNumber && activeYear == yearNumber) {
        $('.dayCount .box').eq(firstDay + dayInMonth - 1).addClass('activeParent');
        $('.dayCount .activeParent').append('<div class="active"/>');
        $('.dayCount .activeParent').css({
            color: '#fff'
        });
    }
});
