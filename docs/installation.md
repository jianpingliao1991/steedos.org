---
title: Installation
---

Steedos Platform is essentially a set of npm packages that can be installed over npm.

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 10.15.1 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed
- [Yarn](https://yarnpkg.com/en/) version >= 1.5 (which can be checked by running `yarn version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.

## Create Steedos App

The easiest way to install Steedos is to use the command line tool that helps you create a template project. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

```bash
npx create-steedos-app my-app
cd my-app
yarn
yarn start
```

You can create a steedos app of specified version by the following cli code:

```bash
npx create-steedos-app@1.23.0-alpha.1 my-app
```

## Project structure

Assuming you chose the classic template and named your site my-app, you will see the following files generated under a new directory my-app/:


```sh
my-app
├── steedos-app/main/default
│   ├── applications
│   │   └── my-app.app.yml
│   └── objects
│       └── todo
│           ├── buttons
│           │   └── markDone.button.yml
│           │   └── markDone.button.js
│           ├── fields
│           │   └── name.field.yml
│           │   └── description.field.yml
│           │   └── isDone.field.yml
│           ├── listviews
│           │   └── all.listView.yml
│           │   └── recent.listView.yml
│           ├── permissions
│           │   └── user.permission.yml
│           │   └── admin.permission.yml
│           └── todo.object.yml
├── .env
├── .gitignore
├── package.json
├── README.md
├── server.js
├── steedos-config.yml
└── yarn.lock
```
