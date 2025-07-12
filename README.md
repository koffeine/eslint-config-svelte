<h1>
	eslint-config-svelte
	<a href="https://www.npmjs.com/package/@koffeine/eslint-config-svelte"><img alt="npm" src="https://img.shields.io/npm/v/@koffeine/eslint-config-svelte"></a>
</h1>

Koffeine's ESLint shareable config for Svelte

## Installation

```sh
npm install --save-dev @koffeine/eslint-config-svelte eslint svelte
```

## Usage

Add the following to your `eslint.config.js` file:

```js
import koffeineSvelte from '@koffeine/eslint-config-svelte';

export default [
    ...koffeineSvelte
];
```

## License

Copyright © Kornél Horváth

Licensed under the [MIT License](https://raw.githubusercontent.com/koffeine/eslint-config-svelte/master/LICENSE).
