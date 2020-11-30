---
title: Delete data by GraphQL API
sidebar_label: Delete by GraphQL
---

To delete data on Steedos via the GraphQL API, you should prefix the script with `mutation` instead of `query` in the following format:

```graphql
mutation {
  tasks_DELETE_ONE(_id:"5cb98489d09a343e14daae95")
}
```

That represents you shoud replace the `tasks` above with the object name you want to delete record and replace the `_id` value `5cb98489d09a343e14daae95` above with the record's `_id` you want to delete.

The keyword `DELETE_ONE` in the above script represents to delete one record on Steedos via the GraphQL API.

The graphql script above will return some data like this:

```json
{
  "data": {
    "tasks_DELETE_ONE": null
  }
}
```

When somebody delete record via the GraphQL API on Steedos, they can delete records of the object only they have permission to delete, see [About data permissions](/docs/api/graphql#about-data-permissions) for more information.
