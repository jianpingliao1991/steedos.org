---
title: Permission Set
---

Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.

This type extends the [Metadata](metadata) metadata type and inherits its name field.

## Declarative Metadata File Suffix and Directory Location

Permission sets have the suffix `.permissionset` and are stored in the `permissionsets` folder.

```sh
my-app
├── steedos-app/main/default
├── ...
// highlight-start
│   └── permissionsets
│       └── contract_manager.permissionset.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

When adding or changing a permission set, you don't need to include all permissions—you only need to include the permissions you're adding or changing.

A sample yml definition of a permission set for the contract managers is shown below.

```yml title="my-app/steedos-app/main/default/permissionsets/contract_manager.permissionset.yml"
name: contract_manager
```
