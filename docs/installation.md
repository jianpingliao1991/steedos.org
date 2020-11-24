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
yarn create steedos-app my-app
cd my-app
yarn
yarn start
```
