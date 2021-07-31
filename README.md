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

## Symlink a package folder during development.

For development, a package can be linked into another project. This is often useful to test out new features or when trying to debug an issue in a package that manifests itself in another project.

There are two commands to facilitate this workflow:

### `yarn link ` (in package you want to link)

This command is run in the package folder you’d like to link. For example if you are working on `react` and would like to use your local version to debug a problem in `react-relay`, simply run `yarn link` inside of the `react` project.

### yarn link [package...]

Use `yarn link [package]` to link another package that you’d like to test into your current project. To follow the above example, in the `react-relay` project, you’d run `yarn link react` to use your local version of react that you previously linked.

in root of project

```bash
$ yarn link
yarn link v1.22.10
success Registered "@presscommandz/svelte-component".
info You can now run `yarn link "@presscommandz/svelte-component"` in the projects where you want to use this package and it will be used instead.
```

```bash
$ cd example/svelte
$ yarn link "@presscommandz/svelte-component"
yarn link v1.22.10
warning package.json: No license field
success Using linked package for "@presscommandz/svelte-component".

$ yarn install
```

Links are registered in `~/.config/yarn/link`. If you want to specify a different folder you can run the command with this syntax `yarn link --link-folder path/to/dir/`

To reverse this process, simply use yarn unlink or yarn unlink [package]. Also see:

`yarn unlink`: unlink a linked package.

[Read more about yarn link](https://classic.yarnpkg.com/en/docs/cli/link/)

## Run and test published package

In root of project, start developing package with:

```bash
$ yarn dev
```

There are 3 subdirectory inside directory `example` corresponding to 3 way to import package (CommonJS, ESModule and using Webpack + Svelte). In each directory, type those command to run example:

```bash
$ cd example/svelte
$ yarn install
$ yarn dev
```

In directory `svelte`, visit <http://localhost:5000> to see the run result.
