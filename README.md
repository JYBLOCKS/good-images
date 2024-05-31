# React + TypeScript + Vite + ReduxToolkit + react-testing-library + Vitest

This project present 30 images the user can select one image and clear the state 

## Steps you need before run

Install node.js version 20.11.0
[Download Node.js (LTS)](https://nodejs.org/)

Install package manager Yarn as global 
```npm install --global yarn```

Add node_modules with all packages need to run the applicacion
```yarn install```

## Run locally project

```yarn dev```

## How to run the unit testing

```yarn test```

## Standard convencions

the name of components, variables, constants, functions must be describe why are using
Constants                 using UpperCase + Snakecase example: CONSTANTS_EXAMPLE
Components                using Pascalcase            example: ComponentExample
variables and functions   using Camelcase             example: funtionExample

## Distribution of the project
.
├── public
├── src
└────── api
│     ├── api-name.ts
│     └── index.ts
└────── components
│     └──- component
│         ├── index.tsx
│         ├── labels.ts
│         ├── data-cy.ts
│         ├── component.test.ts
│         └── component.css
└────── redux
│     ├── componentSlice.ts
│     └── store.ts
└────── App.tsx
└────── main.tsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── yarn.lock

