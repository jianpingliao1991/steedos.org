---
title: The summary of GraphQL
sidebar_label: GraphQL
---

When you configure objects in Steedos, the [GraphQL](https://graphql.org/) API is automatically generated for you.

Using the GraphQL API, you can ask for what you need and get exactly that. see [GraphQL](https://graphql.org/) for more information.

## About data permissions

Steedos supports many kinds of permissions configuration, such as [Permission Set](/docs/metadata/permission_set), [Profile](/docs/metadata/profile), [Permission](/docs/metadata/object/permission) etc. You can use them to implement different permissions for different people to have access to different objects and fields, and what data can be returned by the GraphQL API is controlled by these permission configurations.

To support permissions control, you should pass in a `token` or `userSession` on request that identifies the current user, see [Authorize the GraphQL API](/docs/api/graphql_auth) for more information.

You can user the GraphQL API to [Query](/docs/api/graphql_query), [Insert](/docs/api/graphql_add), [Edit](/docs/api/graphql_edit), [Delete](/docs/api/graphql_delete) the data that you have permissions to.

## Access to the address of GraphQL client console

Suppose you have start a local service of Steedos with the port of 3000, then you can access the GraphQL client console with `http://localhost:3000/graphql`.

In the GraphQL client console, you can input the query in the left panel, and run it by clicking the run button on the top of the page.

Here are some examples that you can run directly on the client console.

### A basic example

Ask for all accounts:

```sh
{
  accounts {
    name,
    industry,
    website
  }
}
```

:::note Note
You can also wrap the above query statement with a json node called `query` as follows, which will have the same effect and return the same request results.

```sh
query{
  accounts {
    name,
    industry,
    website
  }
}
```

:::

Get predictable results:

```js
{
  "data": {
    "accounts": [
      {
        "name": "A",
        "industry": null,
        "website": "www.some1.com"
      },
      {
        "name": "B",
        "industry": "Agriculture",
        "website": "www.some2.com"
      },
      {
        "name": "C",
        "industry": "Agriculture",
        "website": "www.some3.com"
      }
    ]
  }
}
```

### Infinitely extended query

Request all lead records, along with extended fields information belonging to the relevant objects:

```sh
{
  leads{
    name,
    title,
    status,
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
    converted
  }
}
```

Get predictable results:

```js
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        "status": "Qualified",
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

### Query data

You can query records by GraphQL API with `filters`, `fields`, `top`, `skip` and `sort`, see [Query data by GraphQL API](/docs/api/graphql_query) for more information.

There is an example following: request all leads with `status` attribute value of 'Qualified'.

```sh
{
  leads(filters:[["status", "=", "Qualified"]], top:1, sort:"name desc"){
    name,
    title,
    status
  }
}
```

Get predictable results:

```js
{
  "data": {
    "leads": [
      {
        "name": "Lead A",
        "title": "GM",
        "status": "Qualified"
      }
    ]
  }
}
```



:::note Note
You can also replace the code `filters:[["status", "=" "Qualified"]]` with `filters:"status eq 'Qualified'"` which is a standard [OData filtering string](https://docs.oasis-open.org/odata/odata/v4.01/os/part1-protocol/odata-v4.01-os-part1-protocol.html#sec_SystemQueryOptionfilter).
:::
