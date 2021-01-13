---
title: Formula Best Practices
---

In Steedos, if you need to build more complex formulas, please refer to the following tips to help you plan the formula logic and more easily troubleshoot errors.

## Formula field restrictions and constraints

Before you create a formula field, understand its limitations.

- You cannot delete fields referenced in formulas. Remove the field from the formula before deleting it.
- Formula fields are read-only, which is not only read-only to users on the interface, but also cannot be changed by background automatic operation, including but not limited to workflow rules and field update operations in the approval process.
- Including formulas referenced across objects, two formula fields cannot refer to each other. For example, if formula field A refers to formula field B, formula field B can no longer refer to formula field A.
- Recurring references cannot occur between multiple formula fields, including formulas referenced across objects. For example, A references B and B references C. If C references A again, it will cause a circular reference, which is not supported.
- Before you create a formula field, plan its implementation.Especially in production environments, once valuable historical data is generated and some field properties of the object are modified, such as field type and field formula expression, manual execution of [Recalculate Formula Value](/docs/formula/create#recalculate-formula-value)  is required to correct historical data, which increases the risk of uncertainty.

## Place each function on a separate line

Easily develop the habit of keeping the entire formula on one line, especially when it is small.Placing each function on its own line will make the formula easier to read and troubleshoot.These examples show the same formula, one without a line break and the other with each function on a separate line.

```js
IF(AND(ISBLANK(myDate_c),active_c=true),"Missing Date","Not Applicable")
```

```js
IF(
AND(
ISBLANK(myDate_c),
active_c=true
),
"Missing Date",
"Not Applicable"
)
```

## Indentation in parentheses

When formulas involve multiple functions, indentation helps visually isolate each function and makes it easier to find errors, such as misplaced characters.

In this example, by indenting, you will see that most of the formula is in a single IF statement, and the AND statement contains two functions.In the AND statement, the function ISBLANK is enclosed in parentheses.

```js
IF(
  AND(
    ISBLANK(myDate_c),
    active_c=true
  ),
  "Missing Date",
  "Not Applicable"
)
```

Indentation can also help you focus on error resolution.By using a flat layout, it is difficult to find the extra ")" contained after the ISBLANK statement, and there are no visual tips on how to construct the formula.

```js
IF(
AND(
ISBLANK(myDate_c)
),
active_c=true
),
"Missing Date",
"Not Applicable"
)
```

By indenting the layout, you can easily see the structure of the formula.We can quickly find and remove extra characters to properly format the AND statement.

```js
IF(
  AND(
    ISBLANK(myDate_c)
    ),
    active_c=true
  ),
  "Missing Date",
  "Not Applicable"
)
```

## Write statements and function names in uppercase letters

All the examples here use uppercase letters for statement and function names, such as IF, AND, and ISBLANK. Using uppercase letters for these terms clearly distinguishes functions from parameters and makes complex formulas easier to distinguish.
