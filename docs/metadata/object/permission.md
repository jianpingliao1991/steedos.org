---
title: Permission
---

Represents a permission that grants access to a custom feature. This type extends the [Metadata](../metadata) metadata type and inherits its name field.

## Declarative Metadata File Suffix and Directory Location

Permissions components have the suffix `.permission` and are stored in the `permissions` folder as additional part of a CustomObject component. The component can represent a custom object or a standard object, such as an account.

```sh
my-app
├── steedos-app/main/default
├── ...
│   └── objects
│       └── accounts
// highlight-start
│           └── permissions
│               └── contract_manager.permission.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

A sample yml definition of a list view in a custom object is shown below.

```yml title="my-app/steedos-app/main/default/objects/accounts/permissions/contract_manager.permission.yml"
allowCreate: true
allowEdit: true
allowDelete: true
allowRead: true
modifyAllRecords: true
viewAllRecords: true
```
