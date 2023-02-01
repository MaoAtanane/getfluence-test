# Getfluence technical test

## Technologies used

- [React](https://reactjs.org/) single page application
- Bundling using [Vite](https://vitejs.dev/)
- Routing done using [React Router](https://reactrouter.com/en/main)
- Typescript [Typescript](https://www.typescriptlang.org/)

### Architecture diagrams

the app follows a page oriented Atomic Design pattern.
The base components "Atoms" are located in the `src/commons` folder.
The "Molecules" used by each page are declared inside of the gape folder `src/pages`.
    As exmaple, the `src/pages/loginPage` folder contains  `src/pages/loginPage/LoginForm` which is a Molecules used only inside loginPage.
The global "Molecules" are located in the `src/components` folder.
The "Organisms" are located in their appropriate page folder.
The global "Organisms" are located in the `src/containers` folder.

## Setup

1. Clone the repository and install the dependencies
```bash
yarn install
```
2. Start the frontend application locally
```bash
yarn dev
```

## CSS preprocessor

This project implements [SASS](http://sass-lang.com/).

The styles for each component are therefore located in their corresponding `<component_name>.module.scss` file.

There's also a utility folder under `src/styles`. The folder contains some common variables `src/styles/_variables.sccs`, mixins and other stuff that is meant to be reused from other SASS files.

## Linter

In order to lint the code, the project uses [ESLint](https://eslint.org/).

If you want to run the linter just type:
```bash
yarn lint
```

It's also convenient to integrate the linter warnings into your code editor, there are many plugins available for ESLint depending on your text editor used.

## Testing

The testing strategy for this project is based on the following two libraries:

* [react-testing-library](https://github.com/kentcdodds/react-testing-library): these are some testing utilities that allow you to write tests that work with actual DOM nodes. 
* [Vitest](https://vitest.dev/guide/): Vitest is a test runner developed by Vite. It is also used to mock some of the modules that are required on the tests.

## Routes

This project is using [`react-router-dom v6`](https://reacttraining.com/react-router/core), have a look at `App.tsx` which is the file that defines the routes that are available.

## Api Calls
Api calls are managed by react query and Axios.
All the calls are cashed infinitely until revalidation by a user action.

## Development time
Approximately 10 hours non continuous.