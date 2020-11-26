---
title: Field
---

Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects. This type extends the [Metadata](../metadata) metadata type and inherits its name field.

Specify the full name whenever you create or update a field. For example, a custom field on a custom object:

```js
MyCustomObject__c.MyCustomField__c
```

An example of a custom field on a standard object:

```js
Account.MyAcctCustomField__c
```

An example of a standard field on a standard object:

```js
Account.Phone
```

An example of a custom field on an external object:

```js
MyExternalObject__x.MyCustomField__c
```

<!-- Steedos support a variety of field types, see [Field Types](url) for more information. -->

## Declarative Metadata File Suffix and Directory Location

Custom fields are user-defined fields and are additional part of the custom object or standard object definition. See [Object](summary) for more information. Standard fields are predefined on standard objects.

```sh
my-app
├── steedos-app/main/default
├── ...
│   └── objects
│       └── accounts
// highlight-start
│           └── fields
│               └── rating.field.yml
// highlight-end
├── ...
```

## Fields

Unless otherwise noted, all fields are createable, filterable, and nillable.

### name

The field type is text.

This value cannot be null.

The name of the table field in the data source that contains the data for the object.

Case sensitive. It is recommended to use all lowercase letters

### label

The field type is text.

Label that represents the object field throughout the steedos user interface.

We recommend that you make object field labels unique across all fields of it's object.

The label supports i18n, and if the system detects that the i18n file contains "{objectname}_{fieldname}", the translation will take effect.

### defaultValue

The field type is text.

If specified, represents the default value of the field.

It can be a fixed value, or you can configure the default value formula, such as `NOW()`, `TODAY()`, etc.

### required

The field type is boolean.

Indicates whether the field requires a value.

The add and modify interface in the object record cannot be saved if the current field is not filled in. When the OData API is called to manipulate data, required fields must also be passed in.

### inlineHelpText

The field type is text.

Represents the content of field-level help.

You can configure a description to be displayed when the form is filled to help the business understand the purpose of the field.

When the form is filled out, an Info icon appears to the right of the field name, which can be click to see the help text.

### is_wide

The field type is boolean.

Represents whether the field will always take up two column widths.

For a wide screen, Steedo displays the form as two columns. Wide fields always take up two column widths, and narrow fields take up one column width.

### group

The field type is text.

If specified, represents that in the record display page and edit page, the field are displayed in groups.

Fields with the same group value are grouped into the same group, the group title is the value of the group, and the order of fields within the group is the order in which the fields are defined on the form.

### multiple

The field type is boolean.

Indicates whether the field is an array value to allow the field value to be set to multiple values.

Only certain field types, such as `text`, `select`, `lookup`, `master/detail` etc., support this property.

### seachable

The field type is boolean.

Indicates whether the field value can be searched by the quick search box.

When using a shortcut search for a keyword, only the name field is searched. If this property is configured, the contents of this field will be searched also when the user performs a shortcut search in this object.

### sortable

The field type is boolean.

Indicates whether a ordering rule of this field can be added or removed by clicking on the field column of the list view.

For a sortable field the steedos automatically creates an index for that field.

By default, due to database performance, all fields on the object cannot be sorted.

### index

The field type is boolean.

Indicates if the field is indexed. If true, an index will be created for this field in the database. By default, no index is created.

For most database engines, too many index fields are configured to degrade database performance.It is generally recommended to configure indexes for the following types of fields:

- Fields to search for.
- Fields that need to be filtered in a list view or report.
- The fields of the related table.

### unique

The field type is boolean.

Indicates whether the field is unique. If true, a unique index is created for that field, and the value of that field must be unique for each record in the database.

### hidden

The field type is boolean.

Indicates whether the field is hidden throughout the steedos user interface. If true, this field is not shown in lists, view, edit, filter of steedos user interface, and so on, but can be referenced in scripts or configured in filter conditions.

### omit

The field type is boolean.

Indicates whether the field is hidden while creating or editing form.

### is_name

The field type is boolean.

Indicates whether this field is a title field for the object, which automatically appears as a link to the record details interface.

By default, the field named `name` is used as the title field, and there is at most one title field on an object.

If the object does not have a name field, you need to mark an other field as title field by `is_name`.

### blackbox

The field type is boolean.

If this property is configured, the contents of this field are ignored in steedos when validating data formats.

### min/max

The field type may be number or datetime,

Represents the min or max value for the field.

If the field type is number or currency, these rules define a minimum or maximum.

If the field type is text or textarea, these rules define the minimum or maximum string length.

If the field type is date or datetime, then these rules define the minimum or maximum date value.

```yml
  title:
    type: text
    min: 5
    max: 10
  range_slider:
    type: number
    min: 0
    max: 100
  date:
    label: Date
    type: date
    min: !<tag:yaml.org,2002:js/function> |-
      function (){
        return (new Date(Date.UTC(2020, 0, 1)));
      }
    max: !<tag:yaml.org,2002:js/function> |-
       function (){
         return (new Date(Date.UTC(2020, 11, 31)));
       }
```

### picklist

The field type is text.

If specified, the field is a picklist, and this field is the code of a picklist record in the database which enumerates the picklist values and labels.

Applies to `select` type fields. When the specified Picklist record exists, override the options attribute defined by the field.

The following example defines a country field that lists all the optional country items for drop-down selection.

In this example, you need to add a `picklist` record with a code value of `countryList` in the steedos setup interface, and maintain the individual country options in it.

```yml
country:
  type: select
  picklist: countryList
```

### options

The field type is array.

Applies to `select` type fields. If specified, this field enumerates the picklist values and labels.

<!-- You can define options in a variety of formats, see [Select Field](url) for more information. -->

```yml
priority:
  type: select
  label: Priority
  options: High:high,Normal:normal,Low:low
  defaultValue: normal
```

### optionsFunction

The field type is function.

Applies to `select` type fields. If specified, this field provide a function that enumerates the picklist values and labels.

<!-- The function returns an array in the following format, see [Select Field](url) for more information. -->

```js
[{label: "Label A", value: "a", icon: "account"}]
```

### sort_no

The field type is number.

In interface typography, the sequence of fields is displayed by default in the order of the fields themselves, but the default collation can be overridden by setting sort Numbers for some fields.

Specific rules are as follows:

- Changing the order of the fields between non-grouped fields or setting their `sort_no` property can achieve the typesetting of the sequential display order.
- Among the grouped fields, the order of each field can also be changed or `sort_no` can be used to specify the sorting order between the grouped fields. If the sort number of each field in the same field group is different, the field with the smallest sort number shall take precedence.
- The grouped fields always appear after the non-grouped fields, that is, at the bottom.
- Fields that have no `sort_no` set will be next to fields that have `sort_no` set, that is, you need only to set the `sort_no` property of the first few fields that you want to be in the first row, and the other fields will automatically be next.

### reference_to

The field type is text.

Represents which object the field references to.

Applies to `lookup`, `master/detail` type fields. If specified, this field will reference a specific object, and the field value will be the `_id` attribute of one or more referenced records.

### filters

The field type is array or string.

Represents some filtering criteria to the options.

Applies to `lookup` type fields. If specified, this field limits the selection by filtering criteria when enumerating selection list values and labels.

<!-- See [Lookup Field](url) for more information. -->

<!-- For now, only [[" Priority ", "eq", "Normal "] filtering in simple format is supported, This will later be integrated to support [Common Filtering Conditions](url) in steedos. -->

Alternatively, you can use the standard [OData filtering criteria](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter) as an alternative.

### depend_on

The field type is array.

Indicates which fields on the current object the options value depends on.

Applies to `lookup` type fields. If specified, when a field on depend_on changes, the value and options of the current field will be recalculated.

<!-- See [Lookup Field](url) for more information. -->

### formula

The field type is text.

If specified, represents a formula on the field.

Applies to `formula`, `autonumber` type fields.

<!-- See [Formula Field](url) or [Autonumber Field](url) for more information. -->

### data_type

The field type is text.

If specified, represents the data type of value for the field.

Applies to `formula`, `summary` type fields.

For now, the options are text, number, currency, boolean, date and datetime.

<!-- See [Formula Field](url) or [Summary Field](url) for more information. -->

### formula_blank_value

The field type is text.

It means how to handle the blank value of a field in steedos.

The options are zeroes and blanks.

Applies to `formula` type fields.

<!-- See [Formula Field](url) for more information. -->

### summary_type

The field type is text.

Indicates the calculation type for summary.

The options are COUNT, SUM, MIN and MAX.

Applies to `summary` type fields.

<!-- See [Summary Field](url) for more information. -->

### summary_object

The field type is text.

Indicates which object to aggregate for summary.

Applies to `summary` type fields.

<!-- See [Summary Field](url) for more information. -->

### summary_field

The field type is text.

Indicates which field on the aggregating object to aggregate for summary.

Applies to `summary` type fields.

<!-- See [Summary Field](url) for more information. -->

### summary_filters

The field type is array or string.

If specified, represents the filters for the records of the aggregating object while aggregating.

Applies to `summary` type fields.

<!-- See [Summary Field](url) for more information. -->

## Declarative Metadata Sample Definition

```yml title="my-app/steedos-app/main/default/objects/accounts/fields/rating.field.yml"
name: rating
label: Rating
type: select
sortable: true
options:
  - label: Hot
    value: hot
  - label: Warm
    value: warm
  - label: Cold
    value: cold
inlineHelpText: How do you classify this customer level, for example, ordinary, important.
sort_no: 270
```
