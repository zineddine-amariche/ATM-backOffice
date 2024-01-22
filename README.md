# Welcome to your new ATM dashboard !

## The latest and greatest dashboard for ATM algerian tech makers

This is the dashboard that [ATM - Algerian Tech Makers](https://www.facebook.com/Algeriantechmakersdz2021) uses as a way to test bleeding-edge changes to our Reactjs stack.

Currently includes:

- ReactJs
- React router 
- redux State management
- TypeScript + javaScript
- And more!

## Quick Start

The ATM dashboard project's structure will look similar to this:

```
ATM-project
│ 
├── public
│   ├── logo.jpeg
│   ├── vite.svg
├── src
│   ├── assets
│   ├── components
│   ├── data
│   ├── hooks
│   ├── i18n
│   ├── pages
│   ├── redux
│   ├── routes
│   ├── theme
│   ├── utils
│   ├── app.jsx
│   ├── main.tsx
│   ├── react-app-env.d
│   ├── styles.css
│   ├── types.d.ts
├── .env
├── index.html
├── README.md
├── package.json
└── vite.config.js

```

### ./app directory

The inside of the `src` directory looks similar to the following:

```
├── assets
├── components
├── data
├── hooks
├── i18n
├── pages
├── redux
├── routes
├── theme
├── utils
├── app.jsx
├── main.tsx
├── react-app-env.d
├── styles.css
├── types.d.ts
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `i18n`.

**redux**
This is where your app's global state will live. Each G.state has a directory which will contain the `global-state` file, and any other supporting files like actions, types, etc.

**routes**
This is where your `react-router` navigators will live.

**Pages**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

 
 

 
