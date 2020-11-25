---
title: Field
---

Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects. This type extends the [Metadata](../metadata) metadata type and inherits its name field.

Specify the full name whenever you create or update a field. For example, a custom field on a custom object:

```
MyCustomObject__c.MyCustomField__c
```

An example of a custom field on a standard object:

```
Account.MyAcctCustomField__c
```

An example of a standard field on a standard object:

```
Account.Phone
```

An example of a custom field on an external object:

```
MyExternalObject__x.MyCustomField__c
```

## Declarative Metadata Sample Definition

```yml
name: rating
label: 分级
type: select
sortable: true
options:
  - label: 非常重要
    value: Hot
  - label: 重要
    value: Warm
  - label: 普通
    value: Cold
filterable: true
inlineHelpText: 您如何划分此客户等级的分类，例如，普通、重要。
sort_no: 270
```
