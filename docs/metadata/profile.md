---
title: Profile
---

Represents a user profile. A profile defines a user’s permission to perform different functions within Steedos.

This type extends the [Metadata](metadata) metadata type and inherits its name field.

## Declarative Metadata File Suffix and Directory Location

The file suffix is `.profile`. There is one file for each profile, stored in the `profiles` folder in the corresponding package directory.

```sh
my-app
├── steedos-app/main/default
├── ...
// highlight-start
│   └── profiles
│       └── customer.profile.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

When adding or changing a profile, you should to include all permissions—you need to include the permissions you're adding or changing.

One user can and must have only one profile.

A sample yml definition of a profile for the customer is shown below.

```yml title="my-app/steedos-app/main/default/profiles/customer.profile.yml"
name: customer
label: Customer
license: community
description: A collection of permissions and profile for a customer.
```
