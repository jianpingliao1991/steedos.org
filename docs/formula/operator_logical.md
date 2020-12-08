---
title: Logical Operators
---

## = and = = (equal to)

Calculates whether two values are equal. = and = = operators are interchangeable.

**Use:** `expression 1 = expression 2 or expression 1 = = expression 2`to replace each expression with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
ExpiringDate = CreatedDate + 5
```

Returns true if the due date is equal to the sum of the record's creation date and five days.

```js
IF(Probability = 1, ROUND(Amount*0.02, 2), 0)
```

This formula is used to calculate the commission amount, and the Commission is calculated as 2% for business opportunities with 100% probability. The Commission value for all other opportunities is zero.

Opportunities with a 90% probability will not receive commission.

Opportunities with 100% probability and $100000 amount will receive a commission of $2000.

:::note note
Do not use this function for null comparisons, such as MyDateTime__c == null.Instead, use `ISBLANK`. <!-- Instead, use [ISBLANK](/help/formula/function_logical#isblank) -->
:::

## <\> And !=（Not equal to）

Calculates whether two values are not equal.

**Use:** `expression 1 <> expression 2` or `expression 1 != expression 2`to replace each expression with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
IF(Maint_Amount__c + Services_Amount__c <> Amount,
 "DISCOUNTED", "FULL PRICE")
```

If the sum of the maintenance amount and service amount of the product is not equal to the product amount, this formula will show "DISCOUNTED" (discounted amount) on the product.Otherwise, show "FULL PRICE" (full price).Note that this example uses two custom amount fields for Maint Amount and Services Amount.

:::note note
Do not use this function for null comparisons, such as MyDateTime__c != null.Instead, use `ISBLANK`.<!-- [ISBLANK](/help/formula/function_logical#isblank). -->
:::

## <（less than）

Calculates whether a value is less than the value following this symbol.

**Use:** `Value 1 < Value 2`,Replace each value with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
IF(AnnualRevenue < 1000000, 1, 2)
```

Give a value of "1" to income less than one million and a value of "2" to income greater than one million.

## \>（greater than）

Calculates whether a value is greater than the value following this symbol.

**Use:** `Value 1 > Value 2`,Replace each value with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
IF(commission__c > 1000000, "High Net Worth", "General")
```

Give a commission of more than one million dollars to the High Net Worth value.Note that this is a text formula field using a commission custom field.

## <= (less than or equal)

Calculates whether a value is less than or equal to the value following this symbol.

**Use:** `Value 1 <= Value 2`,Replace each value with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
IF(AnnualRevenue <= 1000000, 1, 2)
```

Give a value of "1" to income less than or equal to one million and a value of "2" to income greater than one million.

## \>=（Greater than or equal to）

Calculates whether a value is greater than or equal to the value following this symbol.

**Use:** `Value 1>= Value 2`,Replace each value with a merged field, expression, or other numeric value.

**Return value:** Boolean

```js
IF(Commission__c >= 1000000, "YES", "NO")
```

Give a commission of more than or equal to one million yuan with the value "YES".Note that this is a text formula field using the Custom Currency Field Commission.

## &&（And）

Evaluates whether both values or expressions are true. Use this operator as an alternative to the logical function and.

**Use：** `（logic 11）&&（logic 22）`, and replace logic 1 and logic 2 with the value or expression you want to evaluate.

**Return value:** Boolean

```js
IF((Price<100 && Quantity<5),“Small”, null)
```

If the price is less than 100 and the quantity is less than five, the formula displays "small". Otherwise, this field is empty.

## ||（Or）

Evaluates whether at least one of multiple values or expressions is true. Use this operator as an alternative to the logical function or.

Replace any number of logical references with the value or expression you want to evaluate.

**Return value:** Boolean

```js
IF(Priority = "High" || Status = "New", ROUND(NOW()-CreatedDate, 0), null)
```

If the Status of the case is "new" or the Priority is "High", the formula returns the number of days the case has not been processed. If the case is open today, the field displays zero.

```js
(Discount_Rate__c < 0) || (Discount_Rate__c > 0.40)
```

When the value of the custom field discount rate is not between 0 and 40%, the validation rule formula displays the following error message: "discount rate cannot exceed 40%.". )