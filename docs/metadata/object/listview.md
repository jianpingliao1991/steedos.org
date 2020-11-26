---
title: ListView
---

ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.
This type extends the [Metadata](../metadata) metadata type and inherits its name field. See “Create a Custom List View in Steedos” in Steedos Help.

:::note Note
List views with the Visible only to me Restrict Visibility option are not accessible in Metadata API. Each of these list views is associated with a particular user.
:::

## Declarative Metadata File Suffix and Directory Location

List views are stored as additional part of a CustomObject component. The component can represent a custom object or a standard object, such as an account.

```sh
my-app
├── steedos-app/main/default
├── ...
│   └── objects
│       └── accounts
// highlight-start
│           └── listviews
│               └── mine.listView.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

A sample yml definition of a list view in a custom object is shown below.

```yml title="my-app/steedos-app/main/default/objects/accounts/listviews/mine.listView.yml"
name: my_customers
label: My Customers
columns:
  - field: name
    width: 300
    wrap: true
  - field: type
    width: 120
  - field: rating
    width: 120
  - field: billing_address
    width: 400
  - field: shipping_address
    width: 400
  - field: owner
    width: 120
filter_scope: mine
filter_fields:
  - type
  - industry
  - rating
  - name
```
