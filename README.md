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
variables and functions   using Camelcase             example: functionExample  

## Distribution of the project
This project's codebase adheres to a clear and organized structure. Here's a breakdown of the key directories and files:

**Directories:**

* **public:** Stores publicly accessible files like images, CSS, or fonts.
* **src:** Houses the application's source code.
    * **api:**
        * **api-name.ts:** Implements fetching logic for a specific API.
        * **index.ts:** Provides a centralized export for API functionalities.
    * **components:** Contains reusable UI components.
        * **component:** (Example component directory)
            * **index.tsx:** Responsible for displaying and managing the component's behavior.
            * **labels.ts:** Defines constants used within the component for clarity.
            * **data-cy.ts:** Sets up data attributes for component testing.
            * **component.test.ts:** Houses unit tests for the component.
            * **component.css** (Optional): Defines component-specific styles if needed.
    * **redux:** Manages application state with Redux.
        * **componentSlice.ts:** Encapsulates the reducer and slice for a specific component's state.
        * **store.ts:** Combines and exports all reducers for the application.
* **App.tsx:** The core application file that displays different pages.
* **main.tsx:** Sets up the configuration for rendering pages from `App.tsx` into `index.html`.

**Other Files:**

* **.eslintrc.cjs:** Configures ESLint for code linting.
* **.gitignore:** Specifies files to be excluded from version control.
* **index.html:** The entry point for running the project in a browser.
* **package.json:** Manages project dependencies and configuration.
* **README.md:** The project's documentation (you're reading it now!).
* **tsconfig.json:** Defines default TypeScript configuration.
* **vite.config.ts:** Configures the Vite build tool.
* **yarn.lock** (Optional, based on your package manager): Locks down installed package versions for reproducibility.

