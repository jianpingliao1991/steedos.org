---
title: Report
---

Represents a custom report. This metadata type only supports custom reports; standard reports are not supported.

This type extends the [Metadata](metadata) metadata type and inherits its name field.

## Declarative Metadata File Suffix and Directory Location

The file suffix is `.report`. There is one file for each report, stored in the `reports` folder in the corresponding package directory.

```sh
my-app
├── steedos-app/main/default
├── ...
// highlight-start
│   └── reports
│       └── contract.report.yml
// highlight-end
├── ...
```

## Declarative Metadata Sample Definition

A sample yml report definition, the following statement lists the statistical results of contracts over the years by contract category:

```yml title="my-app/steedos-app/main/default/reports/contract.report.yml"
name: contracts_over_years_by_categorys
label: Contracts of category over years
report_type: matrix
data_source: odata
object_name: contracts
filters: [["create_date", "between", "this_year"]]
rows: contract_type.name
columns: create_date
values: amount
charting: true
counting: false
description: Lists the statistical results of contracts over the years by contract category.
```
