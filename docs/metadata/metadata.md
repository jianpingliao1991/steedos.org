---
title: Metadata
---

This is the base class for all metadata types. You cannot edit this object. A component is an instance of a metadata type.
Metadata is analogous to sObject, which represents all standard objects. Metadata represents all components and fields in Metadata API. Instead of identifying each component with an ID, each custom object or custom field has a unique name, which must be distinct from standard object names, as it must be when you create custom objects or custom fields in the Salesforce user interface.

## Fields

### name

The field type is text.

Required. The name of the component. If a field, the name must specify the parent object, for example Account.FirstName. The __c suffix must be appended to custom object names and custom field names when you are setting the name. For example, a custom field in a custom object could have a name of MyCustomObject__c.MyCustomField__c.

To reference a component in a package, prepend the package’s namespace prefix to the component name in the name field. Use the following syntax: namespacePrefix__ComponentName. For example, for the custom field component MyCustomObject__c.MyCustomField__c and the namespace MyNS, the full name is MyNS__MyCustomObject__c.MyCustomField__c.
