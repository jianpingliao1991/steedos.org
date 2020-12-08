---
title: Roll-Up Summary Field
---

The Roll-Up summary field automatically calculates the value in the related record. You can create a Roll-Up summary field so that its value is based on the summary of the field value of a detail object in the `Master Detail` relationship, and display the summary result in the master object's record. The detail object's records must be directly related to the master object's record through the `Master Detail` field. For example, you want to display the total invoice amount of all related invoice custom object records in the customer's invoice related list. You can define this summary information in a custom amount field called "Total Invoice Amount".

You can use Roll-Up summary fields to perform different types of summary calculations. For example, you can calculate the number of detail object's records related to the master object's record, and you can also calculate the sum, minimum, or maximum of the fields in the detail object's records.

![Summary field](/assets/formula/summary.png)

## Create Roll-Up summary field

Define the Roll-Up summary field on the object (located on the master side of the `Master Detail`).

If the relationship does not already exist, first create a `Master Detail` relationship between the master object and the detail object on the detail side to indicate the relationship between the value of the record being summarized and the record being summarized.

Create a new field on the object where you want to display the value of the Roll-Up summary field. The summary field summarizes the values in the records on the related object, so the object (the field you created above) should be on the master side of the master object/detail object relationship. <!-- For instructions on creating custom fields, please refer to[Create custom fields](url). -->

![Edit object field](/assets/formula/summary_field.png)

- **Object：**That is, the master object in the `Master Detail` relationship.
- **Label：**The name you want this summary field to display.
- **Field Name：**The unique api name of this field.
- **Type:** Please select "Roll-Up Summary".
- **Default Value：**Because the field value is calculated, the default value is invalid here.
- **Group：**Which group do you want the field to be displayed on.
- **Precision：**The precision of the numeric field.
- **Scale：**The number of decimal places that you want this summary result to retain.
- **Object to Summarize：**Select the object on the detail side in the `Master Detail` relationship, which contains the records you want to summarize.
- **Roll-Up Type：**
  - ■ ***COUNT：*** Summarize the total number of records in the detail object, and return the total number of records.
  - ■ ***SUM：*** Accumulate and summarize the values of the fields selected in the "Fields to Aggregate" option. Only number, amount, and percentage field types are available.
  - ■ ***MIN：*** Compare the values of the fields selected in the "Fields to Aggregate" option and get the minimum value. Only number, amount, percentage, date and datetime fields are available.
  - ■ ***MAX：*** Compare the values of the fields selected in the "Fields to Aggregate" option and get the maximum value. Only number, amount, percentage, date and datetime fields are available.
- **Field to Aggregate：**Please select a field on the detail object. This field is the field to be aggregated for SUM/MIN/MAX. For other summary types except COUNT, this item is required, otherwise, this field is not required.
- **Filter Criteria:** If you want to include only a specific record group in the summary calculation, please enter the filter criteria in the filter criteria, for example, only summarize the records created before 8 AM on January 1, 2021.
- **Others:** Check the function switches that need to be enabled, and click Save to end the operation.

## Filter conditions during aggregation

If you want to include only specific record groups in the summary calculation, you can enter the corresponding filter conditions in the filter conditions.

![Summary filter](/assets/formula/summary_filters.png)

- These filter conditions filter detail object's records instead of master object's records.
- Listed in the field input box are the field names available for filtering in the detail object for selection.
- The operator input box lists the filter condition operators supported by the field type based on the field selected on the left. For example, the character type field has the "contains" operator, but the amount type does not.
- The value is a plain text input box. When the type of the left field is different, please input text characters according to different input specifications:

  - **Number, Currency, Percent：** Please enter a valid number value, such as 1.2, 3000.
  - **Boolean:** Please enter `"true", "True", "TRUE", "1"` for true, or `"false", "False", "FALSE", "0"` for false .
  - **Date:** Please enter a value similar to `2020-02-12`, the value it represents is `2020-02-12T00:00:00.000Z`, which is converted to a time value of 0 o’clock in UTC To filter.
  - **Datetime：** Please enter a value similar to `2020-02-12 12:00`, which means the value is `2020-02-12T04:00:00.000Z`, which means it will be converted according to the current time zone Filter for the time value in the UTC time zone.
  - **Lookup：** Please enter the recorded _id value, such as`rbNxQ3mK6CFs8LWbr`Indicates the ID value of the record to be referenced.
  - **Master Detail：** Same as `Lookup`.
  - **Others：** Will be filtered as text value.

- You can enter multiple filter conditions, and finally output these conditions according to AND logic connection, does not support OR or more complex logic filtering.

:::note prompt

The low code of Huayan Cube supports richer filter condition settings, such as filtering by OR logic, supporting multiple OR or AND nesting. For details, please refer to：[Filter condition](/developer/object_filter)

:::

## Batch recalculate summary value

For existing historical data, the Roll-Up summary field value will not be recalculated in many cases. In this case, you should select the "Batch recalculation summary value" button on the background detailed configuration page of the Roll-Up summary field to manually recalculate the value. These situations include but are not limited to the following situations:

- Change the Roll-Up summary definition (such as objects, fields to be aggregated, summary types, filter conditions, etc.).
- Change the related attributes of the referenced field in the Roll-Up summary field "fields to be aggregated", such as changing its field type, changing the expression of its formula field, etc.

:::note prompt

In a formal environment, please be careful to modify certain field properties of the object, such as field type, field formula expression, drop-down selection box option list, etc., because the existing historical data may not trigger the recalculation of the field value again. The accumulated summary field value can only be corrected by manually operating the "Batch recalculation summary value" button here.

:::

## Implementation tips

- Roll-Up summary fields can be created on all primary side objects with primary / detail object relationships, regardless of whether the objects on both sides are standard or custom objects.
- When a Roll-Up summary field cannot be created on an object, first create a master / child table relationship on the child tables of the object.
- The types of fields that can be calculated in a Roll-Up summary field depend on the type of summary and the field type of the field to aggregate. For example:
  - When sum is selected as the accumulation type, the number, amount, and percentage fields are available.
  - When min or max is selected as the accumulation type, the number, amount, percentage, date, and date time fields are available.
  - When count is selected as the Roll-Up type, the total number of records in the detail object will be summarized directly, which is independent of the fields of the detail object. There is no need to select "fields to aggregate".
- Sometimes, you cannot change the field type of the field you refer to in the Roll-Up summary field. This is because the field type that can be calculated in the Roll-Up summary field depends on the field type of the field to be aggregated. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily.
- After the Roll-Up summary field is created on the object, the field type of the master object / detail object type field in the detail object object on which the summary field depends cannot be changed to the related table or other field types. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily.
- The Roll-Up summary field can refer to the formula field, that is, "field to aggregate" can select the field of formula field type. When the formula value changes, the Roll-Up summary field will be triggered to summarize and calculate again and update the field value.
- Roll-Up summary field can also be referenced in formula field. When the value of Roll-Up summary field changes, it will trigger relevant formula field to recalculate its field value.
- For now, cross object field references or functions (such as now or In today's formula field, Huayan Rubik's cube is treated in the way of ordinary formula, and is not treated differently. However, you should not configure it in this way. This is not only that there should not be such logic in actual demand, but also because this configuration will bring great loss in performance.
- Currently, formula calculations in workflow rules, validation rules, or other automatic rules that reference the summary field will not be triggered again when the Roll-Up summary field value changes.
- In the formal environment, please be careful to modify some field properties of the object, such as field type, field formula expression, because field value recalculation may not be triggered again for existing historical record data. Please refer to [Batch recalculation summary value](#batch-recalculate-summary-value) for details.
- Depending on the number of records affected and other factors, it may take 30 minutes or less to calculate the Roll-Up summary field value.
- If the Roll-Up summary field is referenced in the validation rule, the validation rule will not be triggered when the summary field value changes. For example, the master object has a validation rule, and the Roll-Up summary field value must be less than 100. If the user will input more than 100 values to change the related detail object's record, the user is expected to be unable to save the detail object's record. In fact, when the detail object's record changes, the verification rule of the master object's record will not be triggered. To achieve this requirement, the usual way is to configure the validation rule in the detail object instead of the master object, similar to: `lookup_mater_object_field.summary_value + current_value >= 100。`

## Best practices

- If you do not want users to see the calculated value of the Roll-Up summary field, you can set the field as a hidden field. The fields on the detailed record that cannot be seen by the user are still calculated in the Roll-Up summary field.
- If you have validation rules, consider how they affect the Roll-Up summary field. When the value in the detail object record changes, the value of the Roll-Up summary field of the master object record will also change. Therefore, a verification error will be displayed when saving the master object / detail object record. Please refer to the last item of [Implementation tips](#implementation-tips)
- Please note that there is a difference between referring to the master object Roll-Up summary field from the detail object field and referring to its own Roll-Up summary field from the master object field. Roll-Up summary fields referenced from child records may have obsolete values because the parent record was not updated when the child record was saved. However, if the Roll-Up summary field is referenced from the parent record, although the Roll-Up summary field will always have the latest update value, the verification rule of the master object's record will not be triggered when the child record is changed. Please refer to the last item of [Implementation tips](#implementation-tips)
- Before creating a Roll-Up summary field, plan its implementation. Once created, you cannot change the selected detail object or delete any fields referenced in the Roll-Up summary definition.
- Before you create the Roll-Up total value, please implement the plan in batch. Especially in the production environment, once the valuable historical data is generated and some field attributes of the object are modified, such as field type, field formula expression, it is necessary to manually execute [Batch recalculation of aggregate value](#batch-recalculate-summary-value) to correct the historical data, which will increase the risk of non confirmation.
- Auto derived fields, such as current date or current user, are not allowed in Roll-Up summary fields. Disallows formula fields that contain functions that dynamically derive values, such as (DATEVALUE、NOW and TODAY). The Roll-Up summary field is also not allowed to contain formula fields of related object consolidation fields.