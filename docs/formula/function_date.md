---
title: Date and Time Functions
---

## ADDMONTHS

The date returned is the specified number of months before or after the specified date. If the number of days in the remaining month is less than the starting month, the function returns the last day of the remaining month. Otherwise, the result contains the same day component as the specified date.

**Use：** `ADDMONTHS (date/datetime,number)` ,Replace `date/datetime`and `number` with the start date and the number of months added.

**Parameter：**

- *Date, date time:* `date/datetime`
Date or date time, indicating the start date
- *Number:* `number`
Value, indicating the number of months to increase.

**Return value：** date

```js
ADDMONTHS (StartDate, 5)
```

Add 5 months for the start date. For example, if the start date is September 20, 2017, the result date is February 20, 2018; if the start date is September 30, 2017, the result date is February 28, 2018.

:::note Tip
Parameters of date or date time type are supported, but the return value is always of date type instead of date time ty.
:::

## DATE

Returns a date value from the year, month, and day values you entered. If the date function value in the formula field is an invalid date, an error message is returned.

**Use：** `DATE(Year, Month,Day)` ,Replace the year with a four digit year, the month with a two digit month, and the day with a two digit date.

**Parameter：**

- *Year:* `number`
Four digit year.
- *Month:* `number`
A numeric value that represents the value of the month.
- *Day:* `number`
Represents the value of the day part.

**Return value：** date

```js
DATE(2005, 1, 2)
```

Create a date field on January 2, 2005.

:::note Tip
The number of parameters can only be three, and incoming strings `2005-01-01'are not supported.
:::

:::note Note
When the format of the incoming function parameter is correct, but the value does not conform to the specification, an error will not be reported, but a possible error value will be returned. For example, for non leap year, date (2021,2,29) will return 2021-03-01, and date (2021,121,29) will return 2031-01-29.
:::

## DATEVALUE

Returns a date value for a date, datetime, or text expressi.

**Use：** DATEVALUE(Expression)

**Parameter：** `date/datetime/text`
A combined field or expression for a date, datetime, or text value in date, datetime format.

**Return value：** date

```js
DATEVALUE(ClosedDate)
```

The date value is displayed based on the value of the end date time field. The parameter closeddate can be a date or date time type, or a string type of date or date time format.

```js
DATEVALUE("2005-1-15 12:30")
```

Returns "2005-01-15" as a date value.

:::note 技巧提示

- ■ If the field referenced in the function is not a valid text or date time field, the field in the formula may be displayed as an exception string or error message. For example, data value ("2005-111-15") will return Nan Nan Nan.
- ■ When entering a date, put the date in quotation marks and use the following format: yyyy-mm-dd, that is, four digit year, two digit month and two digit date.
- ■ If the expression is not in a valid date range (for example, mm is not between 01 and 12), the fields in the formula display "Nan Nan Nan".
- ■ The formula will always return the value of UTC (coordinated world time) 0, and  unless the incoming parameter explicitly carries the time zone information, it will always use the user's time zone calculation. For example, DateValue ('2018-12-06:06 ') returns 2018-12-11, while DateValue ('2018-12-12t06:06:06z') returns 2018-12-12.
:::

## DATETIMEVALUE

Returns the year, month, day, and GMT time values.

**Use：** DATETIMEVALUE（expression）

**Parameter：** `text`
Text values, merged fields, or expressions in date / datetime format without TZ characters

**Return value：** Date time

```js
DATETIMEVALUE(TEXT(ClosedDate))
```

The date time value is displayed based on the end date field value. The parameter closeddate must be a date type, not a date time type, because if closeddate is a date time type, text (closeddate) will return a character string with Z such as "2020-11-04 03:45:00z".

