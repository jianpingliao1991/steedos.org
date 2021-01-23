---
title: Authorize the GraphQL API
sidebar_label: GraphQL Auth
---

To support permission control of the GraphQL API, you should first authorize your GraphQL API so that the API can identify the current user.

## Token on request header

Authorization header is usually used as the API request header whenever a user wants to access a protected route or resource.

The content format of the header is as follows: `Authorization: Bearer <token>`, and `token` is the `X-Auth-Token` value on browser cookie after user logs in.

## UserSession params in code

You can also request data on Steedos by GraphQL API passing the userSession params like the code bellow:

```js
var { graphql } = require('graphql');
var getSteedosSchema = require("@steedos/objectql").getSteedosSchema;
var schema = getSteedosSchema().getDataSource().getGraphQLSchema();

let query = `
    query{
        leads(filters:[["status", "=", "Qualified"]]){
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
`;
graphql(schema, query, null, { user: userSession }).then((response) => {
    console.log(response);
});
```

It will get predictable results that base on the current user's permissions.
