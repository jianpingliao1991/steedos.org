---
title: Query data by GraphQL API
sidebar_label: Query by GraphQL
---

Query data in GraphQL API, query criteria accept 5 parameters bellow, can be used together as needed.

- filters: text or array
- fields: array
- top: number
- skip: number
- sort: text

They are enclosed in brackets after the object name like the following.

```graphql
leads(filters:[["status", "=", "Qualified"]], top:1, sort:"name desc")
```

When somebody access the GraphQL API on Steedos, they can see only the data they have permission to see, see [About data permissions](/docs/api/graphql#about-data-permissions) for more information.

## filters

You can add the query filters after the object name, the filters expression may be an array as a `Steedos Filters` like `[["status", "=", "Qualified"]]` or a text as a standard [OData filtering string](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter) like `"status eq 'Qualified'"`.

```graphql
query{
  leads(filters:[["status", "=", "Qualified"]]){
    name,
    title,
    status
  }
}
```

or

```graphql
query{
  leads(filters:"status eq 'Qualified'"){
    name,
    title,
    status
  }
}
```

## field structure detail

In a GraphQL query, you must define the field structure detail at the end of the object name and brackets.

Thanks to this feature, you can extend the field indefinitely to query the relevant field value just like the following example.

Request all lead records, along with extended fields information belonging to the relevant objects:

```graphql
query{
  leads{
    name,
    title,
    status,
    // highlight-start
    converted_account {
      name,
      rating
    },
    converted_contact {
      name,
      account{
        name
      }
    },
    // highlight-end
    converted
  }
}
```

Get predictable results:

```json
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        "status": "Qualified",
        // highlight-start
        "converted_account": {
          "name": "Account B",
          "rating": "Hot"
        },
        "converted_contact": {
          "name": "Contact M",
          "account": {
            "name": "Account N"
          }
        },
        // highlight-end
        "converted": true
      },
      {
        "name": "Lead B",
        "title": "purchasing manager",
        "status": "New",
        "converted_account": null,
        "converted_contact": null,
        "converted": null
      }
    ]
  }
}
```

### suffix __label

If the GraqhQL script has some field that return Date, DateTime, Boolean, etc., and you want to display them directly to your customers, you need to add the `__label` suffix after the field name to indicate that you want to format the field value, otherwise it will return the content of the field stored in the database directly.

#### Date/DateTime

For example, the `created` field indicates the creation time, it will return a non-semantic value such as `1608621469293`, but `created__label` will return formatted like `2020-12-22 15:17` with a good reading experience result.

*If the `created` field is a empty value, then it will return `null` and `created__label` will return a empty string `""`.*

#### Boolean

For example, the `converted` field indicates whether it is a converted record, it will return a character like `true` or `false`, but the `converted__label` will return a result with a good reading experience like `"Yes"` or `"No"`.

*If the `converted` field is a empty value, then it will return `null` and `created__label` will return a string `"No"`.*

Request all lead records, with some `__label` suffix fields in it:

```graphql
query{
  leads{
    name,
    title,
    // highlight-start
    converted,
    converted__label,
    // highlight-end
    // highlight-start
    created,
    created__label
    // highlight-end
  }
}
```

Get predictable results:

```json
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        // highlight-start
        "converted": true,
        "converted__label": "Yes",
        "created": "1597979950012",
        "created__label": "2020-08-21 11:19"
        // highlight-end
      },
      {
        "name": "Lead B",
        "title": "purchasing manager",
        // highlight-start
        "converted": false,
        "converted__label": "No",
        "created": "1597988499634",
        "created__label": "2020-08-21 13:41"
        // highlight-end
      },
      {
        "name": "Lead C",
        "title": "CMO",
        // highlight-start
        "converted": null,
        "converted__label": "No",
        "created": null,
        "created__label": ""
        // highlight-end
      }
    ]
  }
}
```

:::note Note
If you use GraphQL API to fetch data and show them in the Steedos Page, you shouldn't to add the `__label` suffix after the field name, because the Steedos Page will format them auto.

Only when you want to display the field value directly to your customers, you will need to add the `__label` suffix after the field name.
:::

### prefix related__

If you want each record in the list returned by the GraphQL API interface to carry the associated sub-object records information, you can use `related__` as a prefix to splice the name of the associated sub-object to achieve the goal.

What is sub-object? That means you have two object associated by a `Master Detail` relationship field, One is Master Object, another is Detail Object, and the sub-object is exactly the Detail Object. <!-- See [master-detail](/docs/metadata/object/field_type/complex#masterdetail) for more info. -->

Request all lead records, with some `related__` prefix fields to fetch the sub-object records for every records:

```graphql
query{
  leads{
    name,
    title,
    // highlight-start
    related__tasks{
      name,
      assignees{
        name
      },
      due_date,
      due_date__label
    }
    // highlight-end
  }
}
```

Get predictable results:

```json
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        // highlight-start
        "related__tasks": [
          {
            "name": "Task 1",
            "assignees": [
              {
                "name": "Litant"
              }
            ],
            "due_date": "1611964800000",
            "due_date__label": "2021-01-30"
          }
        ]
        // highlight-end
      },
      {
        "name": "Lead B",
        "title": "purchasing manager",
        // highlight-start
        "related__tasks": [
          {
            "name": "Task 2",
            "assignees": [
              {
                "name": "John"
              }
            ],
            "due_date": "1611964800000",
            "due_date__label": "2021-01-30"
          }
        ]
        // highlight-end
      }
    ]
  }
}
```

:::note Note
The field name `related__tasks` in the example above based on there is a object named 'tasks' who has a `master-detail` field associated to the Master Object `leads`. 
:::

## top and skip

You can define how many records you want to skip with a `skip` word, and how many record you want to return with a `top` word.

The query bellow will only return the second record.

```graphql
query{
  leads(fields:["name"], top:1, skip:1){
    name,
    title
  }
}
```

## sort

You can define how you want to sort the results with the `sort` word.

A key word named 'desc' represents descending order, and a key word named ‘asc’ represents ascending order.

The query bellow will sort in descending order by field `name` to return the results.

```graphql
query{
  leads(fields:["name"], sort:"name desc"){
    name,
    title
  }
}
```

## fields

You can add the query fields after the object name, that represents the which fields on the object you want to fetch.

This property is always omitted, because you must define the field structure detail at the end of the object name and brackets, so we recommend you to omit this property.

```graphql
query{
  leads(fields:["name"]){
    name,
    title
  }
}
```

The results is like bellow:

```json
{
  "data": {
    "leads": [
      {
        "name": "T1",
        "title": null
      },
      {
        "name": "T2",
        "title": null
      }
    ]
  }
}
```

:::note Note
As you see, if there are some fields in the [field structure detail](#field-structure-detail) that are not defined in the `fields` property, these missed fields will be ignored and a null value is returned.
:::
