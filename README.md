# cra-template-client-application

Opinionated quickstart [Create React App](https://github.com/facebook/create-react-app) (CRA) template.

## Features

* [Redux](https://redux.js.org/) for state management
* [Redux Toolkit](https://redux-toolkit.js.org/) for Redux development
* [redux-persist](https://github.com/rt2zz/redux-persist#readme) Used for state persistence
* [React Route](https://reactrouter.com/en/main) for navigation
* [axios](https://axios-http.com/) for requests



## Usage

```shell script
npx create-react-app %PROJECT_NAME% --template client-application
``` 
Or
```shell script
yarn create react-app %PROJECT_NAME% --template client-application
```

`npx` command installs most recent stable version of CRA from npm. `--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Then

```shell script
cd %PROJECT_NAME%
yarn start
```