---
title: Steedos Platform Overview
sidebar_label: Overview
---

Steedos Platform is an Open Source Low-Code Development Platform in nodejs and mongodb.

## Click, Not Code

We live in a digital world. To keep up with employee and customer expectations, innovation through technology is increasingly becoming a nonnegotiable. 

To accomplish your goals, there are two types of programming you can turn to: imperative programming and declarative programming. Both have benefits, but how do you figure out which is best for you? First, it’s important to understand the difference between them.

Imperative programming, otherwise known as traditional or code-oriented programming, denotes the means of programming by using certain coding languages — such as C#, C++, Java, and so on — to tell a computer exactly how to perform an action. This requires a skilled developer with programming knowledge. This developer will build the application brick by brick using blocks of code, usually in a terminal window or some other highly specialized development environment.

On the other hand, declarative programming accomplishes the same results by basically telling the computer the end result and letting the computer figure out how to get there. In simpler terms, declarative programming denotes the kind of click or drag-and-drop solutions that allow someone without coding knowledge to build an application. The blocks of code are prewritten and packaged into components that you can just select as needed.

## Steedos Metadata

Metadata is core to the Steedos infrastructure. Metadata are core components or features in Steedos. Without Metadata most of the magic just isn’t possible!

Metadata relates to the fields, configurations, code, logic, and page layouts that go into building the information architecture and look and feel of your Steedos environment.

Metadata can be imported into Steedos, modified in the product interface, or manipulated via the Steedos Metadata API.

There are several types of Metadata, with each one representing a unique way a business function can be customized. Here are a few broad categories for Metadata types:

- Data: the core components of the data structure on which most customization is built. E.g. Custom Objects, Fields, and Custom Apps.
- Programmability: custom code developed on top of the platform. E.g. Buttons, Form Events, Triggers.
- Presentation: customization on how users interact with the platform. E.g. Components, List View and Page Layouts.

## Why Metadata?

Hard-coded applications are a thing of the past; customization is the flair of the season.

You need flexible applications that can be tailor-made as per your business needs without the need for high-level programming skills. That is why Steedos Metadata is so powerful. Metadata is what transforms Steedos from a simple database into an entire platform.

## Supported Metadata Types

- Object
- Field
- List View
- Permission Set
- Profile
- Validation Rule
- Workflow Rule
- Approval Process

## How Metadata Is Different From Data? 

Newbie (and even seasoned) Steedos administrators assume Metadata and Data are the same — they are not.

Data relates to the records that a business relies on, such as Users, Accounts, Contacts, to name a few. On the other hand, Metadata is the data that describes other Data.

Confused? Let’s break it down with a few examples.

### Example 1: Metadata in a Basic Form

First, let’s look at Metadata in its most basic form. For this example, our bicycle manufacturing company has just closed a deal with Austin Bicycle Enterprise. The instance of this Steedos opportunity object is our data and a field like “Lead Source” is some of the Metadata that helps describe and provide valuable insight about this individual opportunity. Even the ‘Account Name’ is essential Metadata, without that information we wouldn’t know what to call this opportunity!

There’s a lot of interesting things you can do with this Metadata in the future too. You can run a report at the end of the year and compare the success of opportunities from Trade Shows vs other sources.

## Example 2: Metadata as Validation Rules

With the example above, it’s clear that Metadata can be invaluable to an organization; however, much of this important information is dependent on manual input. Sales Reps, Support Engineers and other users enrich Steedos with data as they do their jobs. One big challenge is ensuring the accuracy of the Metadata in Steedos. A great way to do this is with Validation Rules.

Validation Rules are configurable checks you can add to your Steedos Objects Metadata descriptions. In the example above, I’m creating a rule to ensure our ContractIDs follow the approved corporate format. I can also create more complex rules with formulas like vLookups (Excel fans rejoice!) to solve simple problems like ensuring the correct zip code is being entered.

## Example 3: Metadata as Automation

Unitrends, our partner subsidiary company, has a few interesting challenges when it comes to fulfillment and provisioning. Depending on their needs, customers purchase hardware, software, or SaaS subscriptions. Sometimes they buy all three!

These simple Metadata values have BIG impact on our internal processes. Each of these values kicks off different requests and different teams move into action depending on the value. If a customer simply needs Office 365 SaaS backup, everything is fully automated: charging, billing, etc. are all handled by the software.

What if they want more? If the customer is backing up on-premises servers or workstations, they might want a physical appliance delivered to their site. A combination of Metadata sets our factory into motion! We combine a basic Steedos workflow to handle order processing and once that is completed a Steedos trigger fires to kick off a task to construct, configure and ship our physical appliances to our customers.

It’s amazing what a few simple fields can really do!
