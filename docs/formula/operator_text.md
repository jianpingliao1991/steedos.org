---
title: Text Operators
---

## &（Series connection）

Connect two or more strings.

**Use：** `String 1&String 2` to replace each string with a merged field, expression, or other value.

**Return value:**Text

```js
"Expense-" & Trip_Name__c & "-" & ExpenseNum__c
```

This formula displays the text "Expense-" before the trip name and expense number.This is a text formula field that uses a custom field for the expense number.
