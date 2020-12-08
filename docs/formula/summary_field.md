---
title: Roll-Up Summary Field
---

The cumulative summary field automatically calculates the value in the related record. You can create a cumulative summary field so that its value is based on the summary of the field value of a sub-table in the main table/sub-table relationship, and display the summary result in the main record. The sub-table record must be directly related to the main record through the main table/sub-table. For example, you want to display the total invoice amount of all related invoice custom object records in the customer's invoice related list. You can define this summary information in a custom amount field called "Total Invoice Amount".

You can use cumulative summary fields to perform different types of summary calculations. For example, you can calculate the number of sub-records related to the main record, and you can also calculate the sum, minimum, or maximum of the fields in the sub-records.

![Summary field](/assets/formula/summary.png)

## Create cumulative summary field

Define the cumulative summary field on the object (located on the main side of the main table/sub-table).

If the relationship does not already exist, first create a main table/sub-table relationship between the main object and the sub-object on the sub-table side to indicate the relationship between the value of the record being summarized and the record being summarized.

Create a new field on the object where you want to display the value of the cumulative summary field. The summary field summarizes the values in the records on the related object, so the object (the field you created above) should be on the main side of the main table/child table relationship. <!-- For instructions on creating custom fields, please refer to[Create custom fields](url). -->

![Edit object field](/assets/formula/object.png)

- **Belonging to：**That is, the main object in the main table/sub-table relationship.
- **Name to display：**The name you want this summary field to display.
- **Field name：**The unique api name of this field.
- **Field type:** Please select "Cumulative Summary".
- **Default value：**Because the field value is calculated, the default value is invalid here.
- **Field grouping：**Which group do you want the field to be displayed on.
- **Precision：**The precision of the numeric field.
- **Decimal places：**The number of decimal places that you want this summary result to retain.
- **Object to be summarized：**Select the object on the sub-table in the main table/sub-table relationship, which contains the records you want to summarize.
- **Summary type：**
  - ■ ***COUNT：*** Summarize the total number of records in the sub-table, and return the total number of records.
  - ■ ***SUM：***Accumulate and summarize the values of the fields selected in the "Fields to Aggregate" option. Only number, amount, and percentage field types are available.
  - ■ ***MIN：***Compare the values of the fields selected in the "Fields to Aggregate" option and get the minimum value. Only number, amount, percentage, date and datetime fields are available.
  - ■ ***MAX：***Compare the values of the fields selected in the "Fields to Aggregate" option and get the maximum value. Only number, amount, percentage, date and datetime fields are available.
- **Field to be aggregated：**Please select a field on the sub-table. This field is the field to be aggregated for SUM/MIN/MAX. For other summary types except COUNT, this item is required, otherwise, this field is not required.
- **Filter criteria:** If you want to include only a specific record group in the summary calculation, please enter the filter criteria in the filter criteria, for example, only summarize the records created before 8 AM on January 1, 2021.
- **Others:** Check the function switches that need to be enabled, and click Save to end the operation.

## Filter conditions during aggregation

If you want to include only specific record groups in the summary calculation, you can enter the corresponding filter conditions in the filter conditions.

![Summary filter](/assets/formula/filter.png)

- These filter conditions filter sub-table records instead of main table records.
- Listed in the field input box are the field names available for filtering in the sub-table object for selection.
- The operator input box lists the filter condition operators supported by the field type based on the field selected on the left. For example, the character type field has the "contains" operator, but the amount type does not.
- The value is a plain text input box. When the type of the left field is different, please input text characters according to different input specifications:

  - **Value, amount, percentage：**Please enter a legal value, such as 1.2, 3000.
  - **Boolean:** Please enter `"true", "True", "TRUE", "1"` for true, or `"false", "False", "FALSE", "0"` for false .
  - **Date:** Please enter a value similar to `2020-02-12`, the value it represents is `2020-02-12T00:00:00.000Z`, which is converted to a time value of 0 o’clock in UTC To filter.
  - **Date time：**Please enter a value similar to `2020-02-12 12:00`, which means the value is `2020-02-12T04:00:00.000Z`, which means it will be converted according to the current time zone Filter for the time value in the UTC time zone.
  - **Related table：**Please enter the recorded _id value, such as`rbNxQ3mK6CFs8LWbr`Indicates the ID value of the record to be referenced.
  - **Main table/sub table：**Same as related table.
  - **Others：**Filter by text value.

- You can enter multiple filter conditions, and finally output these conditions according to AND logic connection, does not support OR or more complex logic filtering.

:::note prompt

The low code of Huayan Cube supports richer filter condition settings, such as filtering by OR logic, supporting multiple OR or AND nesting. For details, please refer to：[Filter condition](/developer/object_filter)

:::

## Batch recalculate summary value

For existing historical data, the cumulative summary field value will not be recalculated in many cases. In this case, you should select the "Batch recalculation summary value" button on the background detailed configuration page of the cumulative summary field to manually recalculate the value. These situations include but are not limited to the following situations:

- Change the cumulative summary definition (such as objects, fields to be aggregated, summary types, filter conditions, etc.).
- Change the related attributes of the referenced field in the cumulative summary field "fields to be aggregated", such as changing its field type, changing the expression of its formula field, etc.

:::note prompt

In a formal environment, please be careful to modify certain field properties of the object, such as field type, field formula expression, drop-down selection box option list, etc., because the existing historical data may not trigger the recalculation of the field value again. The accumulated summary field value can only be corrected by manually operating the "Batch recalculation summary value" button here.

:::

## Implementation tips

- Cumulative summary fields can be created on all primary side objects with primary / sub table relationships, regardless of whether the objects on both sides are standard or custom objects.
- When a cumulative summary field cannot be created on an object, first create a master / child table relationship on the child tables of the object.
- The types of fields that can be calculated in a cumulative summary field depend on the type of summary and the field type of the field to aggregate. For example:
  - When sum is selected as the accumulation type, the number, amount, and percentage fields are available.
  - When min or max is selected as the accumulation type, the number, amount, percentage, date, and date time fields are available.
  - When count is selected as the cumulative type, the total number of records in the sub table will be summarized directly, which is independent of the fields of the sub table. There is no need to select "fields to aggregate".
- Sometimes, you cannot change the field type of the field you refer to in the cumulative summary field. This is because the field type that can be calculated in the cumulative summary field depends on the field type of the field to be aggregated. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily.
- After the cumulative summary field is created on the object, the field type of the main table / sub table type field in the sub table object on which the summary field depends cannot be changed to the related table or other field types. Huayan Rubik's cube has not handled such logic verification for the time being. Please change the field type in the formal environment carefully and arbitrarily.
- The cumulative summary field can refer to the formula field, that is, "field to aggregate" can select the field of formula field type. When the formula value changes, the cumulative summary field will be triggered to summarize and calculate again and update the field value.
- Cumulative summary field can also be referenced in formula field. When the value of cumulative summary field changes, it will trigger relevant formula field to recalculate its field value.
- For now, cross object field references or functions (such as now or In today's formula field, Huayan Rubik's cube is treated in the way of ordinary formula, and is not treated differently. However, you should not configure it in this way. This is not only that there should not be such logic in actual demand, but also because this configuration will bring great loss in performance.
- Currently, formula calculations in workflow rules, validation rules, or other automatic rules that reference the summary field will not be triggered again when the cumulative summary field value changes.
- In the formal environment, please be careful to modify some field properties of the object, such as field type, field formula expression, because field value recalculation may not be triggered again for existing historical record data. Please refer to [Batch recalculation summary value](#batch-recalculate-summary-value) for details.
- Depending on the number of records affected and other factors, it may take 30 minutes or less to calculate the cumulative summary field value.
- If the cumulative summary field is referenced in the validation rule, the validation rule will not be triggered when the summary field value changes. For example, the master record has a validation rule, and the cumulative summary field value must be less than 100. If the user will input more than 100 values to change the related sub record, the user is expected to be unable to save the sub table record. In fact, when the sub record changes, the verification rule of the master record will not be triggered. To achieve this requirement, the usual way is to configure the validation rule in the sub table instead of the main table, similar to: `lookup_mater_object_field.summary_value + current_value >= 100。`

## Best practices

- If you do not want users to see the calculated value of the cumulative summary field, you can set the field as a hidden field. The fields on the detailed record that cannot be seen by the user are still calculated in the cumulative summary field.
- If you have validation rules, consider how they affect the cumulative summary field. When the value in the sub table record changes, the value of the cumulative summary field of the main table record will also change. Therefore, a verification error will be displayed when saving the main table / sub table record. Please refer to the last item of [Implementation tips](#implementation-tips)
- Please note that there is a difference between referring to the main table cumulative summary field from the sub table field and referring to its own cumulative summary field from the main table field. Cumulative summary fields referenced from child records may have obsolete values because the parent record was not updated when the child record was saved. However, if the cumulative summary field is referenced from the parent record, although the cumulative summary field will always have the latest update value, the verification rule of the master record will not be triggered when the child record is changed. Please refer to the last item of [Implementation tips](#implementation-tips)
- Before creating a cumulative summary field, plan its implementation. Once created, you cannot change the selected detail object or delete any fields referenced in the cumulative summary definition.
- Before you create the cumulative total value, please implement the plan in batch. Especially in the production environment, once the valuable historical data is generated and some field attributes of the object are modified, such as field type, field formula expression, it is necessary to manually execute [Batch recalculation of aggregate value](#batch-recalculate-summary-value) to correct the historical data, which will increase the risk of non confirmation.
- Auto derived fields, such as current date or current user, are not allowed in cumulative summary fields. Disallows formula fields that contain functions that dynamically derive values, such as (DATEVALUE、NOW and TODAY). The cumulative summary field is also not allowed to contain formula fields of related object consolidation fields.