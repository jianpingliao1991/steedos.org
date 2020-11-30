---
title: API for Steedos integration
sidebar_label: Steedos API
---

The business system developed by Steedos, complete API built in, can be easily integrated with the third-party application system.

## OData API

[OData(Open Data Protocol)](https://www.odata.org/) is an OASIS open industry standard that describes how to create and access REST services.

In Steedos, standard business objects and custom business objects will automatically generate standard HTTP API interface, and developers can realize the query, modification and deletion of data under various conditions through standard OData syntax.

## GraphQL API

[GraphQL](https://graphql.org/) is Facebook's data query interface, a query language for the API.

Steedos automatically generates the standard GraphQL interface for standard business objects or your defined custom business objects, which can quickly realize the query, modification and deletion of data under various conditions.

see [GraphQL API](/docs/api/graphql) for more information.

## About data permissions

Steedos supports many kinds of permissions configuration, such as [Permission Set](/docs/metadata/permission_set), [Profile](/docs/metadata/profile), [Permission](/docs/metadata/object/permission) etc. You can use them to implement different permissions for different people to have access to different objects and fields, and what data can be returned, inserted, edited, deleted by the API is controlled by these permission configurations.

## Database integration

If you need to query or even modify the data in the third-party business system, you can integrate the data in the third-party business system simply by configuring the data source to point to the third-party business system and configuring the business object to describe the data table in the third-party business system.
