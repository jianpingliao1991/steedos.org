---
title: Edit data by GraphQL API
sidebar_label: Edit by GraphQL
---

To edit data on Steedos via the GraphQL API, you should prefix the script with `mutation` instead of `query` in the following format:

```graphql
mutation {
  tasks_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"Task Important"})
}
```

That represents you shoud replace the `tasks` above with the object name you want to edit record, replace the `_id` value `5cb98489d09a343e14daae95` above with the record's `_id` you want to edit, and replace the `{name:"Task Important"}` above with a new JSON data you want to save as.

The keyword `UPDATE_ONE` in the above script represents to edit one record on Steedos via the GraphQL API.

The graphql script above may return some data like this:

```json
{
  "data": {
    "tasks_UPDATE_ONE": {
      "name": "Task Important",
      "_id": "5cb98489d09a343e14daae95"
    }
  }
}
```

When somebody update data via the GraphQL API on Steedos, they can edit records of the object and field only they have permission to update, see [About data permissions](/docs/api/graphql#about-data-permissions) for more information.
