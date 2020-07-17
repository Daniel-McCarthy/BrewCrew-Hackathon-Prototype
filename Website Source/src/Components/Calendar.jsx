import * as React from "react";
import '../Styles/Calendar.css';

import '../Helpers/Date.js';

export class Calendar extends React.Component {
    constructor(props) {
        super(props)

        let calendarDaysForMonth = getCalendarDaysForCurrentMonth();

        this.state = {
            date: new Date(),
            month: currentMonth(),
            dayNumber: currentDayNumber(),
            calendarDates: calendarDaysForMonth
        }
    }

    datesToWeekArrays = () => {
        let weeks = [];
        for (let weekIndex = 0; weekIndex < this.state.calendarDates.length; weekIndex += 7) {
            let currentWeek = [];
            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
                currentWeek.push(this.state.calendarDates[weekIndex + dayIndex]);
            }
            weeks.push(currentWeek);
        }
        return weeks;
    }

    isEventDay = (dayNum, weekNum) => {
        // This is chosen arbitrarily for now, but we can adjust this for our future schedule.
        // For now, it's every next Sunday (just not the first week of the month)

        if (dayNum === 0 && (weekNum % 2 == 0 && weekNum != 0))
            return true;

        return false;
    }

    renderDatesTable = () => {
        let datesInWeeks = this.datesToWeekArrays();
        return (
            <div className='tableContainer'>
                {datesInWeeks.map(
                    (weekArray, weekIndex) => {
                        return (
                            <div
                                key={'week'+weekIndex}
                                className='calendarWeek'
                            >
                                {weekArray.map(
                                    (date, weekDayNum) => {
                                        let dateIndex           = (weekIndex*7) + weekDayNum;
                                        const isDateInThisMonth = date.getMonth() === this.state.date.getMonth();
                                        const currentMonthClass = isDateInThisMonth ? 'currentMonth' : 'differentMonth';
                                        const isDateThisDay     = date.getDate() === this.state.date.getDate();
                                        const currentDayClass   = isDateThisDay ? ' currentDay' : '';
                                        const eventDayClass     = this.isEventDay(weekDayNum, weekIndex) ? ' eventDay' : '';
                                        return (
                                            <div
                                                key={'Date'+dateIndex}
                                                className={'calendarDay ' + currentMonthClass + eventDayClass + currentDayClass}
                                            >
                                                <p>
                                                    {date.getDate()}
                                                </p>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        )
                    }
                )}
            </div>
        )
    }

    render() {
        return (
            <div className={"calendar"}>
                <div className='calendarHeader'>
                    <p className='headerMonth'>
                        {this.state.month}
                    </p>
                    <p className='headerDay'>
                        {this.state.dayNumber}
                    </p>
                </div>
                <div className='calendarDayContainer'>
                    <div className='dayHeaderContainer'>
                        {/* Sat Mon Tue Wed Thu Fri Sun */}
                        {getWeekDayLabels().map( 
                            (day, column) => {
                                return (
                                    <div key={column} className='dayHeader'>
                                        <p>
                                            {day}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className='daysTable'>
                        {this.renderDatesTable()}
                    </div>
                </div>
            </div>
        )
    }
}
