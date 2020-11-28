---
title: Application
---

An application is a list of tab references, with a description and a icon.

This type extends the [Metadata](metadata) metadata type and inherits its name field.

## Declarative Metadata File Suffix and Directory Location

Custom and standard applications have the suffix `.app` and are stored in the applications folder.

```sh
my-app
├── steedos-app/main/default
├── ...
// highlight-start
│   └── applications
│       └── sales.app.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

Here’s the definition of a sales app:

```yml title="my-app/steedos-app/main/default/profiles/sales.app.yml"
_id: sales
name: Sales
description: Manage the sales process through customers, prospects, business opportunities, etc
icon_slds: case
sort: 20
is_creator: true
objects:
  - opportunity
  - leads
  - accounts
  - contacts
  - quote
  - order
  - product
  - campaign
  - tasks
  - events
  - reports
mobile_objects:
  - opportunity
  - leads
  - accounts
  - contacts
  - quote
  - order
  - product
  - campaign
visible: true
```
