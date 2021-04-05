# react-essential-ui

A react component library to quickly spin up good looking UI that is highly customizable. Ideal for projects requiring quick iterations like hackathons, building MVPs or prototypes.

It generates components (.ts/.js/.css files) directly into your work directory which can be modified completely, thereby eliminating the need to learn a new library from scratch.

<!-- # Under Development -->

## Install

using npm: `npm install -D react-essential-ui`

using yarn: `yarn add -D react-essential-ui`

## Usage

First, create a `essential.config.json` file containing the following keys:

    - componentDir: String -> The directory to generate the components into.

    - stylesDir: String -> The directory to generate the styles into.

Example:

```
{
	"componentDir": "./src/components/",
	"stylesDir": "./src/styles/"
}
```

Make use of `npx react-essential-ui --help` to list the valid flags.

<!-- and pass in the appropriate flags to generate the components -->

### Example Usage

```
npx react-essential-ui --component-type NavBar --name MyNavBar --typescript
```

This creates a navbar component named MyNavBar.tsx in the componentDir folder and a MyNavBar.module.css in the stylesDir folder.

### Flags

| Flag                         | Description                                        |
| ---------------------------- | -------------------------------------------------- |
| -n, --name \<type>           | Name of the component. Defaults to component name. |
| -t, --component-type \<type> | Type of component to generate.                     |
| -ts, --typescript            | Use Typescript. Defaults to false.                 |
| -h, --help                   | Display help for command.                          |

### Valid Component Types

These are components that can be generated right now. More components are planned to be added in the future.

| Component Types | Description                                               |
| --------------- | --------------------------------------------------------- |
| NavBar          | Generates a navbar                                        |
| SideBar         | Generates a sidebar                                       |
| DropUp          | Generates a dropup component that pops up a menu on hover |

Note: The component types are case sensitive

## Roadmap

-   Add more components
-   Add a variant flag ( -v, --variant ) to add customisations. For example

    `npx react-essential-ui -t NavBar -v sticky -ts -name MyStickyNavbar`

    This should generate a navbar component that sticks to the top of the screen.

-   Add theming support
-   Add a default typescript field in the essential.config.json

## Contribute

-   Clone the repository
-   Install dependencies with `yarn` or `npm install`
-   Use the `dev` script to start in dev mode

PRs and issues are welcome.
