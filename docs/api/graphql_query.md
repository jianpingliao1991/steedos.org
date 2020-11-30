---
title: Query data by GraphQL API
sidebar_label: Query by GraphQL
---

Query data in graphQL API, query criteria accept 5 parameters bellow, can be used together as needed.

- filters: text or array
- fields: array
- top: number
- skip: number
- sort: text

They are enclosed in brackets after the object name like the following.

```graphql
leads(filters:[["status", "=", "Qualified"]], top:1, sort:"name desc")
```

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

## fields

You can add the query fields after the object name, that represents the which fields on the object you want to fetch.

This property is always omitted, because you must define the field structure detail at the end of the object name and brackets.

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
As you see, if there are some fields in the field structure detail that are not defined in the `fields` property, these missed fields will be ignored and a null value is returned.
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

## field structure detail

In a GraphQL query,you must define the field structure detail at the end of the object name and brackets.

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
