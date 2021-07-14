# svelte-component

provide svelte component

# Installation

## Authenticate

To login into Github private registry, run this command in command line:

```bash
$ npm login --scope=@presscommandz --registry=https://npm.pkg.github.com

> Username: Github username
> Password: Access Token
> Email: PUBLIC-EMAIL-ADDRESS
```

Access Token can be created in `Avatar => Your profile => Developer settings => Personal access tokens`

## Publish package

```bash
npm publish
```

## Run and test published package

There are 3 subdirectory inside directory `example` corresponding to 3 way to import package (CommonJS, ESModule and using Webpack + Svelte). In each directory, type those command to run example:

```bash
yarn install
yarn dev
```

In directory `svelte`, visit <http://localhost:5000> to see the run result.
