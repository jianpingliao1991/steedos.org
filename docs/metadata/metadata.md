---
title: Metadata
sidebar_label: Overview
---

This is the base class for all metadata types. You cannot edit this object. A component is an instance of a metadata type.
Metadata is analogous to object, which represents all standard objects. Metadata represents all components and fields in Metadata API. Instead of identifying each component with an ID, each custom object or custom field has a unique name, which must be distinct from standard object names, as it must be when you create custom objects or custom fields in the Steedos user interface.

## Fields

### name

The field type is text.

Required. The name of the component. If a field, the name must specify the parent object, for example `Account.FirstName`. The `__c` suffix must be appended to custom object names and custom field names when you are setting the name. For example, a custom field in a custom object could have a name of `MyCustomObject__c.MyCustomField__c`.

To reference a component in a package, prepend the package’s namespace prefix to the component name in the name field. Use the following syntax: `namespacePrefix__ComponentName`. For example, for the custom field component `MyCustomObject__c.MyCustomField__c` and the namespace `MyNS`, the full name is `MyNS__MyCustomObject__c.MyCustomField__c`.

## Why Metadata?

Hard-coded applications are a thing of the past; customization is the flair of the season.

You need flexible applications that can be tailor-made as per your business needs without the need for high-level programming skills. That is why Steedos Metadata is so powerful. Metadata is what transforms Steedos from a simple database into an entire platform.

## Supported Metadata Types

- [Object](/docs/metadata/object/summary)
- [Field](/docs/metadata/object/field)
- [List View](/docs/metadata/object/listview)
- [Application](/docs/metadata/application)
- [Report](/docs/metadata/report)
- [Permission Set](/docs/metadata/permission_set)
- [Profile](/docs/metadata/profile)

<!-- - [Validation Rule](/docs/metadata/validation_rule)
- [Workflow Rule](/docs/metadata/workflow_rule)
- [Approval Process](/docs/metadata/approval_process) -->

## How Metadata Is Different From Data? 

Newbie (and even seasoned) Steedos administrators assume Metadata and Data are the same — they are not.

Data relates to the records that a business relies on, such as Users, Accounts, Contacts, to name a few. On the other hand, Metadata is the data that describes other Data.

Confused? Let’s break it down with a few examples.

### Example 1: Metadata in a Basic Form

First, let’s look at Metadata in its most basic form. For this example, our bicycle manufacturing company has just closed a deal with Austin Bicycle Enterprise. The instance of this Steedos opportunity object is our data and a field like “Lead Source” is some of the Metadata that helps describe and provide valuable insight about this individual opportunity. Even the ‘Account Name’ is essential Metadata, without that information we wouldn’t know what to call this opportunity!

There’s a lot of interesting things you can do with this Metadata in the future too. You can run a report at the end of the year and compare the success of opportunities from Trade Shows vs other sources.

### Example 2: Metadata as Validation Rules

With the example above, it’s clear that Metadata can be invaluable to an organization; however, much of this important information is dependent on manual input. Sales Reps, Support Engineers and other users enrich Steedos with data as they do their jobs. One big challenge is ensuring the accuracy of the Metadata in Steedos. A great way to do this is with Validation Rules.

Validation Rules are configurable checks you can add to your Steedos Objects Metadata descriptions. In the example above, I’m creating a rule to ensure our ContractIDs follow the approved corporate format. I can also create more complex rules with formulas like vLookups (Excel fans rejoice!) to solve simple problems like ensuring the correct zip code is being entered.

### Example 3: Metadata as Automation

Unitrends, our partner subsidiary company, has a few interesting challenges when it comes to fulfillment and provisioning. Depending on their needs, customers purchase hardware, software, or SaaS subscriptions. Sometimes they buy all three!

These simple Metadata values have BIG impact on our internal processes. Each of these values kicks off different requests and different teams move into action depending on the value. If a customer simply needs Office 365 SaaS backup, everything is fully automated: charging, billing, etc. are all handled by the software.

What if they want more? If the customer is backing up on-premises servers or workstations, they might want a physical appliance delivered to their site. A combination of Metadata sets our factory into motion! We combine a basic Steedos workflow to handle order processing and once that is completed a Steedos trigger fires to kick off a task to construct, configure and ship our physical appliances to our customers.

It’s amazing what a few simple fields can really do!
