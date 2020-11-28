---
title: The summary of GraphQL
sidebar_label: GraphQL
---

When you configure objects in Steedos, the GraphQL API is automatically generated for you.

## Access to the address of GraphQL client console

Suppose you have start a local service of Steedos with the port of 3000, then you can access the GraphQL client console with `http://localhost:3000/graphql`.

In the GraphQL client console, you can input the query in the left panel, and run it by clicking the run button on the top of the page.

Here are some examples that you can run directly on the client console.

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
