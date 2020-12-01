---
title: Using Date, DateTime, and Time Values in Formulas
sidebar_label: Date, DateTime, and Time Values
---

The name date to display uses two data types: date and datetime. Data type time does not include date values, such as working hours. Most of the values used when processing dates are date data types that store year, month, and day. Some fields, such as CreatedDate, are date time fields, meaning that they store not only date values, but also time values (stored in GMT, but displayed in the user's time zone). When viewed on the record details page, the date, date time, and time fields are formatted with the user's locale. The precision of the time value is in milliseconds. The precision of the datetime value is in seconds.

You can use add and subtract operators on dates, datetimes, and time values to calculate future dates or past times between two dates or times. For example, if you subtract one date from another, the resulting value will be the difference (days) between the two initial values (numeric data type). The same operation between two datetime values returns a decimal value, representing the difference in days, hours, and minutes. The same operation of two time values returns milliseconds.

For example, if the difference between two date time values is 5.52, this means that the two values are separated by 5 days, 12 hours (0.5 of a day), and 28 minutes (0.02 of a day). You can also add numeric values to the date and date time. For example, the action `TODAY() + 3` returns three days after today's date. For details and examples of using dates, please refer to [sample date formula](url)

Throughout the example, variable dates and datetimes are used in place of actual date and datetime fields or values.

## TODAY()、NOW() and TIMENOW()

- The TODAY() function returns the current day, month, and year as a date data category. This function is useful for formulas that want to know the number of days in the past, in some days in the future, or just want to display the current date.

- The NOW() function returns the date time value of the current time. This can be very useful when you are concerned about a specific time and date of the day.

- The TIMENOW() function returns the value of GMT and represents the current time without a date. If you need the current hour, minute, second, or millisecond, use this function instead of the NOW() function. This value is useful for tracking time(such as shift or elapsed time)

For more information about how to convert between date and datetime values,please refer to [convert between date time and date](#convert-between-date-time-and-date)

## The DATE（）function

The date() function returns a date value, given the year, month, and day. The numeric Y / M / D values and the year(), month(), and day() functions are valid arguments for date(). For example, `DATE( 2013, 6, 1 )`returns June 1, 2013. Similarly,`DATE( YEAR( TODAY() ), MONTH( TODAY() ) + 3, 1)` returns the date value of the first day of three months from today in the current year, assuming that the date is valid (for example, months between 1 and 12).

If the Y / M / D value entered results in an invalid date, the DATE() function will not report an error, but will return a possible error value. For example, the DATE (2021,2,29) of non leap year will return 2021-03-01, and DATE (2021121,29) will return 2031-01-29. Therefore, error checking is an important part of using date values. You can read about handling invalid dates in the sample date format.

## Convert between date time and date

Date and datetime are non exchangeable data types, so when you perform operations between date and datetime values, you need to convert them so that they have the same type. Some functions, such as`YEAR()`、`MONTH()` and `DAY()`, also apply to date values only, so you must first convert date time values.

Use the `DATEVALUE( date/time )` function to return the date value of the date time. For example, to get the year from a datetime, use `YEAR( DATEVALUE( date/time ) )`

You can use the `DATETIMEVALUE( TEXT(date) )` function to convert a date value to a date time in GMT time zone. The time will be set to Greenwich mean time (GMT) and then displayed in all user time zones. For Beijing time, `DATETIMEVALUE( TEXT(TODAY()) )` will return to the utc0 of the day, and the Huayan Rubik's cube interface will display 8:00 a.m. of that day instead of 00:00 of the same day. For more information, please refer to [notes about date time and time zone](#notes-about-date-time-and-time-zone)

## Convert between date time and time

The time data type value returned by function TIMEVALUE() is converted between date time and time. The format of the value is `“HH:MM:SS.MS”(hours:minutes:seconds.milliseconds)` value in 24-hour format and functions H/M/S/MS, HOUR(), MINUTE(),SECOND() and MILLISECOND() are valid parameters of TIMEVALUE().

Use the TIMEVALUE(text) function to convert a text value, text type merge field or expression to a time type. For example, use `TIMEVALUE(LPAD(TEXT(HOUR(ClosedDate)), 2, "0") & ":" & LPAD(TEXT(MINUTE(ClosedDate)), 2, "0") & ":" & LPAD(TEXT(SECOND(ClosedDate)), 2, "0") & "." & LPAD(TEXT(MILLISECOND(ClosedDate)), 3, "0"))` to extract the time from the ClosedDate datetime value.

## Convert between date and text

If you want to include the date as part of the string, include the date value in the text() function to convert to text. For example, if you want to convert today's date to text, use:
`"Today's date is " & TEXT( TODAY() )`

his returns the date in the format "YYYY-MM-DD" rather than the locale dependent format. You can change the formula by extracting the day, month, and year from the date, and then combining them according to the required format. For example:
`"Today's date is " & TEXT( MONTH( date ) ) & "/" & TEXT( DAY( date ) ) & "/" & TEXT( YEAR( date ) )`

You can also convert text to dates to use string values with your other date fields and formulas. You will want the text to have the format "YYYY-MM-DD". Use this formula to return a date value:
`DATEVALUE( "YYYY-MM-DD" )`

## Convert between date time and text

You can use the TEXT() function to include a date time value in a string, but be careful with the time zone. For example, consider this formula:
`"The current date and time is " & TEXT( NOW() )`

In this formula, NOW() is offset to GMT. Normally, NOW() will be converted to the user's time zone at view time, but because it is converted to text, the conversion does not occur. Therefore, if you execute this formula at 6:00 p.m. Beijing time (GMT-10) on August 1, the result is “The current date and time is 2021-08-01 10:00:00Z”.

When the date time is converted to text, a "Z" is included at the end to represent GMT. If the field is empty, TEXT (date / time) will report an error. Therefore, if the datetime value you are using may be empty, check before converting to text:

```js
IF(
   ISBLANK( date/time ),
   "",
   TEXT( date/time )
   )
   ```

To convert a string to a datetime value, use DATETIMEVALUE() to transfer the string in "YYYY-MM-DD HH:MM:SS"format. This method returns the date time value of GMT.

## Convert between date time and text

If you want to include time as part of a string, encapsulate the time value in the TEXT() function to convert it to text. For example, if you want to return the current time as text, use:
`"The time is " & TEXT( TIMENOW() )`
This function returns the time in the format "HH:MM:SS.MS"

You can also convert text to a time data type to use string values with other time fields and formulas. Format the text as "HH:MM:SS.MS" in a 24-hour format. Use the timevalue() function:
`TIMEVALUE("17:30:45.125")`

## Notes about date time and time zone

The date and date time values are stored in GMT. After the record is saved, the field value is stored as the value in GMT time zone, and then displayed in the viewer's time zone when the record details page is displayed. There is no problem with date conversion, because converting date time to date yields the same date value.

However, when the date time value is used, the conversion is always done in GMT rather than in the user's time zone. If you compare before two date time fields, there is no time zone problem because both fields are in the same time zone. However, when a value in the calculation is converted from a text or date value to a datetime value, the result will be different.

Let's assume that Beijing users enter a value of 9:00 on August 2, 2020 in the custom date time field named Date_Time_c. The value is stored as 2020-08-02 01:00:00z because of the time zone difference of GMT + 8. At 21:00, August 2, Beijing time, the following formula fields are run when users edit records:
`Date_Time_c - NOW()`
In the calculation, NOW() is 2020-08-02 13:00:00Z, and then subtracted from 2020-08-02 01:00:00Z to return the expected result of - 0.5 (- 12 hours).

Assuming that NOW() is not used, the formula will convert the string "2020-08-02 21:00:00" to the date time value:
`Date_Time_c - DATETIMEVALUE( "2020-08-02 21:00:00")`
In this case, DATETIMEVALUE( "2020-08-02 21:00:00") is 2020-08-02 21:00:00Z, and the final result will return - 0.8333333333333334 (- 20 hours), which is different from the previous - 12 hours.

Assuming that the current time is still 21:00 Beijing time on November 10, 2020, i.e. 2020-11-10T13:00:00Z, replace the above now with the date function today:
`TODAY() - DATEVALUE("2020-11-10T19:00:00Z")`
The result of calculation is 0, because both sides of the minus sign are Beijing time on November 10, 2020. However, if the current time is 7:00 a.m. Beijing time on November 10, 2020, because the difference between Beijing time and time zone is 8 hours, TODAY() will output 2020-11-09, and subtracting the two will get - 1 (- 24 hours).

Unable to determine the user's time zone in the formula. If all your users are in the same time zone, you can adjust the time zone difference to your converted value by adding or subtracting the time difference between the user's time zone and GMT. However, because time zones are affected by daylight saving time and DST start and end dates are different each year, it is difficult to manage them in formulas.
