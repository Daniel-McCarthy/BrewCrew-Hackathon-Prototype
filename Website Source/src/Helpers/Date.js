let currentDate = new Date();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let daysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

currentMonth = () => {
    let monthNum = currentDate.getMonth();
    return months[monthNum];
}

currentDayNumber = () => {
    return currentDate.getDate();
}

getWeekDayLabels = () => {
    return daysLabels;
}

getNumberDaysInSpecificMonth = (monthNum, yearNum) => {
    return new Date(yearNum, monthNum, 0).getDate();
}

getDateFromLastDayOfCurrentMonth = () => {
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
}

getDateFromFirstDayOfCurrentMonth = () => {
    let lastDayOfPreviousMonth = new Date(currentDate.getUTCFullYear(), currentDate.getMonth());
    return lastDayOfPreviousMonth;
}

// Returns a day label from Sunday to Saturday from a number 0-6 (can be retrieved from a Date via getDate())
dayLabelFromDayNumber = (aDate) => {
    return daysLabels[aDate.getDay()]
}

isDaySunday = (aDate) => {
    return dayLabelFromDayNumber(aDate) === 'Sun';
}

isDaySaturday = (aDate) => {
    return dayLabelFromDayNumber(aDate) === 'Sat';
}

setDateOfDayPrior = (aDate) => {
    aDate.setDate(aDate.getDate() - 1);
    return aDate;
}

setDateOfDayAfter = (aDate) => {
    aDate.setDate(aDate.getDate() + 1);
    return aDate;
}

// Get the first Sunday of the calendar. (This can be one the final days of the previous month)
getDateOfFirstDayOnCalendar = () => {
    let startOfCurrentMonthDate = getDateFromFirstDayOfCurrentMonth();

    if (isDaySunday(startOfCurrentMonthDate))
        return startOfCurrentMonthDate;

    let dayBefore = setDateOfDayPrior(startOfCurrentMonthDate);
    while (isDaySunday(dayBefore) === false) {
        dayBefore = setDateOfDayPrior(dayBefore);
    }
    return dayBefore;
}

// Get the final Saturday of the calendar. (This can be one the first days of the next month)
getDateOfLastDayOnCalendar = () => {
    let endOfCurrentMonthDate = getDateFromLastDayOfCurrentMonth();

    if (isDaySaturday(endOfCurrentMonthDate))
        return endOfCurrentMonthDate;

    let dayAfter = setDateOfDayAfter(endOfCurrentMonthDate);
    while (isDaySaturday(dayAfter) === false) {
        dayAfter = setDateOfDayAfter(dayAfter);
    }
    return dayAfter;
}

getCalendarDaysForCurrentMonth = () => {
    // This can be the first day of the month, or the most recent Sunday from the month prior.
    let firstCalendarDay = getDateOfFirstDayOnCalendar();
    // This can be the last day of the month, or the earliest Saturday of the next month.
    let finalCalendarDay = getDateOfLastDayOnCalendar();
    let calendarDates = [];

    let day = new Date(firstCalendarDay.getTime());
    while (day.getTime() <= finalCalendarDay.getTime()) {
        let dayCopy = new Date(day.getTime());
        calendarDates.push(dayCopy);
        day.setDate(day.getDate()+1);
    }

    // console.log(firstCalendarDay);
    // console.log(finalCalendarDay);
    // console.log('------------------\nCalendar Dates:\n');
    // for (let i = 0; i < calendarDates.length; i++) {
    //     console.log(calendarDates[i]);
    // }
    return calendarDates;
}