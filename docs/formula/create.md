---
title: Build a Formula Field
---

## How to build formula fields

![How_to_build_formula_fields](/assets/formula/field.png)
 
- Start building a formula field in the same way as creating a custom field, and select the formula for the field type.
- Select the data type of the formula. Select the appropriate data type for your formula based on the calculated output value.
- Select the number of decimal places for the numeric, amount, or percentage data type. The length of the number is up to 18 digits.
- If your formula references any number, amount, or percentage fields, you should select an option to handle blank fields.
- You can refer to the "Related Table" or "Main Table/Sub Table" field on the current object in the formula to implement cross-object formulas.
- You can enter _id in the formula to refer to the id value of the current record.
- You can enter the $user variable in the formula to refer to the relevant information of the currently logged in user.
- You can also enter the formula field description in the description box, and click Save to complete the operation.

## Recalculate formula value

For the existing historical data, the formula field value will not be recalculated in many cases. In this case, you should select the "Recalculate Formula Value" button on the detailed configuration page of the formula field background to manually recalculate the value. These situations include but are not limited to the following situations:

- Change the definition of formula fields (such as decimal places, formula content, data type, blank field handling, etc.).
- Change the related attributes of the referenced field in the formula content, such as changing its field type, decimal places, and changing the data type, formula expression or other attributes of its formula field.

:::note prompt

In a formal environment, please be careful to modify certain field properties of the object, such as field type, field formula expression, drop-down selection box option list, etc., because the existing historical data may not trigger the recalculation of the field value again. For formula field values, historical data can only be corrected by manually operating the "recalculate formula value" button here.

:::

## Tips for using date and datetime formula fields

- Date and datetime fields cannot be used interchangeably. The name itself cannot indicate whether a field is a date or a datetime. For example, the creation date and the last modification date are date time fields, and the last activity date is a date field. Use the DATEVALUE function to convert a datetime field to a date field.
- Use addition and subtraction operators in conjunction with date or datetime fields to calculate duration. For example, subtract one date from another date to calculate the number of days between the two. Similarly, you can subtract one date and time from another date and time to get the number of days between the two in numbers.For recommended usage, see[NOW](/docs/formula/function_date#now) OR [TODAY](/docs/formula/function_date#today).
- Combine addition and subtraction operators with numbers to return other dates or datetimes. E.g,`CreatedDate + 5` Calculate the date and time five days after the creation date of the record. Note that the data type returned by the expression is the same as the given data type; the date field plus or minus a number will return the date, and the date time field plus or minus a number will return the date and time. 
- When using decimals to calculate dates, the formula ignores all numbers after the decimal point. E.g:

- ** formula`TEXT(TODAY())`Will return today's date string, such as2020-09-30, TODAY is to get the date according to utc time, which is the same as TODAY().*
- ** The formula `TODAY() + 1` will return the date value of today's date + 1 day, that is, you can directly use the + sign to run the calculation.*
- ** The formula `TODAY() + 0.7` will return today’s date value instead of +1 day’s date value, because the decimal part will be ignored during date calculation and only the integer part will be taken. The formula `TODAY() + 1.2` will return today’s date +1 day date value.*
- ** The formula `TODAY() + 1.5 + 0.5` or `TODAY() + 0.5 + 1.5` will return the current day's date + 1 day instead of +2 days of the date value, because all decimals will be ignored when calculating the date. Will accumulate. The correct way to write is to use parentheses to calculate the value first: `TODAY() + (1.5 + 0.5)`.*
- ** The formula `NOW() + 1.1` will return the time value after the current time is increased by 1.1 days, that is, 1 day, 2 hours and 24 minutes (1 day 0.1). In other words, the time type supports decimal point calculation, and the unit is day.*
- ** The formula `T1-T2`, if the difference between the above two date and time field values is 5.52, it means that the two values are separated by 5 days, 12 hours (0.5 for 1 day) and 28 minutes (0.02 for 1 day).*

- To calculate the value of two decimals first, you should use parentheses to group them together. E.g:

- ** `TODAY() + 0.5 + 0.5` is the same as `TODAY() + 0 + 0`, which is today’s date.*
- ** `TODAY() + (0.5+0.5)` is the same as `TODAY() + 1` ,which is tomorrow’s date.*

- For time zone, please refer to[Use date, datetime, and time values in formulas](/help/formula/date#Use date, datetime, and time values in formulas)

## Tips for using numeric formula fields

- When using a percentage field in a formula, use the decimal form of the percentage. E.g,`IF(Probability =1...)` Means 100% probability,`IF(Probability =0.9...)`Means 90% probability.
- Reference the auto-number field as a text field in the formula.
- The output value of your formula must be less than 18 digits.
- The formula can contain a mixture of numbers, percentages and currencies:`AnnualRevenue / NumberOfEmployees`.
- When the formula is calculated, other fields referenced by the formula are passed in as variables and when the formula field is displayed on the Huayan Cube interface, the decimal places set on the field will be recognized and the formula field value will be processed by the rounding rule. For example, 12.345 becomes 12.35 and −12.345 becomes -12.35. But the output value of the formula field itself is not affected by the number of decimal places set here, so it should be used in the formula.
- ROUND function to deal with the number of decimal places of the calculation result.
- To treat any blank field as a zero value, select Treat blank fields as zero. To leave these fields blank, please choose to treat blank fields as blanks.In the low code of Huayan Cube, this attribute defaults to "blank fields as zero".

## Tips for using text formula fields

- To insert text in the formula field, enclose the text in quotation marks. For example, to display "CASE: 123", use this formula `“CASE: “& CaseNumber__c.`
- Use the backslash (\) character before the quotation mark or backslash to insert it as a literal value in your output value. For example, `"Trouble\ \Case \"Ticket\": ”` in the formula will display `Trouble\Case “Ticket”:` on the detailed information page (not currently supported, that is, it is currently not possible to write quoted or reverse Slashed string)

## Tips on cross-object formulas

- A cross-object formula is a formula that spans two related objects and references merge fields on these objects. If the object is on the side of the child table of the "main table/child table", the cross-object formula can reference the merge field from the main ("parent") object. Cross-object formulas can also be used with "related tables".
- Cross-object formulas can be used wherever formulas are used.
- The formula cannot include objects as reference fields. To refer to an object, refer to the _id field of the object or another field on the object. For example, `account.owner` is invalid because it directly refers to the object. `account.owner.name` or `account.owner._id` are valid references for formulas.
- Cross-object formulas can only start from a certain field of the object where the formula is located, that is, they cannot reference unrelated object fields.
- Please use dot notation to connect each object field to form a reference chain. Theoretically, unlimited levels of references are supported, but for performance reasons, please avoid too many reference levels.
You can enter the `$user` variable in the formula to refer to the relevant information of the currently logged in user. As a cross-object formula, you should also use dot notation to extend the reference chain. `$user` points to `space_users `table instead of `users` table, so you can only extend its reference chain from related fields in the [space_users](/developer/standard_objects#Employee-space_users) table, such as `$user.organization.owner.name`,Please refer to the <!-- extended attributes [space_users object source code](https://github.com/steedos/steedos-platform/blob/master/packages/standard-objects/space_users.object.yml)-->.

## Tips about formula cascade trigger 

- In the case that a formula field A is referenced by another formula field B, when the update recalculation of field A is triggered for some reason, the cascade triggers the update recalculation of formula field B.
- When there are multiple cascading references between multiple formula fields, if one of the fields is triggered to update and recalculate, the cascading update and recalculation will be triggered layer by layer.
- If the cumulative summary field summarizes a formula field, when the formula field value changes, the summary field will be triggered to re-summarize the updated value.
- If the cumulative summary field is referenced by a formula field, then when the summary field is updated, it will also trigger the formula field update recalculation.

:::note prompt
If there are circular references between formula fields, Huayan Cube can intelligently identify and prevent relevant field configurations from taking effect.
:::
