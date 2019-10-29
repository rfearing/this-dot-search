# This Dot Search
## Replicated GitHub Search (User Search Only)

### 3rd Party Tools Utilized

* [Next.js Framework](https://nextjs.org/) - Adds SSR and easy routing
* [Bootstrap ToolKit](https://getbootstrap.com/) - Simple CSS Framework
* [CSS Modules](https://github.com/css-modules/css-modules) - Scoped CSS (as opposed to using BEM or Styled JSX)
* [Classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together
* [React Icons](https://github.com/react-icons/react-icons) - SVG Icons

### Coding Decisions Made

* Utilize Aliases for calling files within the project (Aliases are all caps)
* Utilize CSS Modules with SASS implemtation
* File Structure
```
/components
    |--- NameOfComponent
        |--- NameOfComponent.js
        |--- NameOfComponent.scss
        ... any other related files
/actions
/pages // Routing done here.
next.config.js // takes the place of webpack file
```

### Building the App
`yarn install`

### Running the App:

`yarn dev` Starts the development server.

`yarn build` Builds the app for production.

`yarn start` Runs the built app in production mode.

### Notes

* All components and code was developed by Ricardo Fearing unless otherwise noted.
    * Accordion component was built by Ricardo but utilized from a previous project
* Things I may add in the future:
    * Add TypeScript
    * Utilize other portions of the API
