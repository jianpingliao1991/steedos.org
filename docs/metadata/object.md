---
title: Object
---

Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.This type extends the Metadata metadata type and inherits its fullName field.

Specify all relevant fields when you create or update a custom object. You cannot update a single field on the object. For more information about custom objects, see Administer Custom Objects in Salesforce Help.

All metadata components have a name field, which must be fully specified for any custom object.

For example, the following are fully specified names for a standard object and a custom object respectively:

```
Account
MyCustomObject__c
```

And the following is a fully specified name for an external object:

```
MyExternalObject__x
```

## Declarative Metadata File Suffix and Directory Location

Custom object names are automatically appended with __c. The file suffix is .object.yml for the custom object or standard object file.

External object names are automatically appended with __x. The file suffix is .object.yml for the external object file.

Custom, standard, and external objects are stored in the objects folder in the corresponding package directory.

## Declarative Metadata Sample Definition

```yml
name: accounts
label: Accounts
icon: account
enable_files: true
enable_search: true
enable_events: true
enable_tasks: true
enable_api: true
enable_share: true
enable_audit: true
```

## Declarative Metadata Additional Components

CustomObject definitions can include additional components defined in the custom object for declarative metadata. The following components are defined in the CustomObject:

- CustomField
- ListView
- Validation Rule
- Workflow Rule
