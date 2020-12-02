---
title: Math Operators
---

## +（plus）

Calculate the sum of the two values.

**use：** `value 1 + value 2`, and replace each value with a merged field, expression, or other value.

**Return value：** value

```js
Amount + Maint_Amount__c + Services_Amount__c
```

This formula calculates the sum of product Amount, maintenance amount and service fee. Note that Maint amount and Service fees are custom amount fields.

```js
Monday_Hours__c +
Tuesday_Hours__c +
Wednesday_Hours__c +
Thursday_Hours__c +
Friday_Hours__c > 40
```

Using the formula in the above validation rule, the following error message can be displayed when the total working hours entered for each working day is more than 40: "the total working time cannot exceed 40 hours". This example requires five custom fields on a custom object, one for each weekday.

## -（minus）

Calculate the difference between the two values.

**use：** `value 1 + value 2`, and replace each value with a merged field, expression, or other value.

**Return value：**numerical value

```js
Amount - Discount_Amount__c
```

This formula calculates the product Amount minus the Discount Amount. Note that Discount Amount is a custom amount field.

## *（multiply）

Multiply by its value

**use：** `value 1 + value 2`, and replace each value with a merged field, expression, or other value.

**Return value：** numerical value

```js
Consulting_Days__c * 1200
```

This formula calculates the number of consultation days multiplied by 1200, assuming that the formula field is of currency data type and the consultation is charged at the price of $1200 per day. Note that Consulting Days is a custom field.

## /（divide）

Divide by its value

**use：** `value 1 + value 2`, and replace each value with a merged field, expression, or other value.

**Return value：** numerical value

```js
AnnualRevenue/ NumberOfEmployees
```

此公式使用金额字段计算每个员工的收入金额。

```js
IF(NumberOfOpportunities > 0,
  NumberOfWonOpportunities / NumberOfOpportunities, null)
```

This formula calculates the customer winning rate of the business opportunity in the marketing activity.

## ^（power）

To make a number a power of a specified number.

**use：** `number^Integer` to replace a number with a merged field, expression, or other numeric value, and an integer with a merged field, expression, or any integer that contains an integer.

**Return value：** numerical value

```js
NumberOfEmployees^4
```

Calculate the fourth power of the number of employees.

:::note Tips
Avoid negative integers
:::

## ()（Left and right brackets）

Specifies that the expressions in the left and right brackets are evaluated first. All other expressions are evaluated using standard operator precedence.

**Use:**`(expression1) expression2...`, replacing each expression with a merged field, expression, or other numeric value.

```js
(Unit_Value__c - Old_Value__c) / New_Value__c
```

Calculate the difference between the old value and the new value and divide by the new value.
