import svelteParser from 'svelte-eslint-parser';
import sveltePlugin from 'eslint-plugin-svelte';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		name: 'koffeine/svelte/base',
		files: [ '**/*.svelte.js', '**/*.svelte' ],
		languageOptions: {
			parser: svelteParser
		},
		plugins: {
			svelte: sveltePlugin
		},
		rules: {
			// POSSIBLE ERRORS

			'svelte/infinite-reactive-loop': 'off', // legacy
			'svelte/no-dom-manipulating': 'error',
			'svelte/no-dupe-else-if-blocks': 'error',
			'svelte/no-dupe-on-directives': 'error',
			'svelte/no-dupe-style-properties': 'error',
			'svelte/no-dupe-use-directives': 'error',
			'svelte/no-not-function-handler': 'error',
			'svelte/no-object-in-text-mustaches': 'error',
			'svelte/no-raw-special-elements': 'error',
			'svelte/no-reactive-reassign': 'off', // legacy
			'svelte/no-shorthand-style-property-overrides': 'error',
			'svelte/no-store-async': 'error',
			'svelte/no-top-level-browser-globals': 'off', // SSR
			'svelte/no-unknown-style-directive-property': 'error',
			'svelte/prefer-svelte-reactivity': 'error',
			'svelte/require-store-callbacks-use-set-param': 'error',
			'svelte/require-store-reactive-access': 'error',
			'svelte/valid-compile': [ 'error', { ignoreWarnings: false } ],
			'svelte/valid-style-parse': 'error',

			// SECURITY VULNERABILITY

			'svelte/no-at-html-tags': 'error',
			'svelte/no-target-blank': [ 'error', { allowReferrer: false, enforceDynamicLinks: 'always' } ],

			// BEST PRACTICES

			'svelte/block-lang': 'off',
			'svelte/button-has-type': [ 'error', { button: true, submit: true, reset: true } ],
			'svelte/no-add-event-listener': 'error',
			'svelte/no-at-debug-tags': 'warn',
			'svelte/no-ignored-unsubscribe': 'error',
			'svelte/no-immutable-reactive-statements': 'off', // legacy
			'svelte/no-inline-styles': 'off',
			'svelte/no-inspect': 'warn',
			'svelte/no-reactive-functions': 'off', // legacy
			'svelte/no-reactive-literals': 'off', // legacy
			'svelte/no-svelte-internal': 'error',
			'svelte/no-unnecessary-state-wrap': [ 'error', { allowReassign: false } ],
			'svelte/no-unused-class-name': 'off',
			'svelte/no-unused-props': 'off', // requires @typescript-eslint/parser
			'svelte/no-unused-svelte-ignore': 'error',
			'svelte/no-useless-children-snippet': 'error',
			'svelte/no-useless-mustaches': [ 'error', { ignoreIncludesComment: false, ignoreStringEscape: false } ],
			'prefer-const': 'off', 'svelte/prefer-const': [ 'error', { destructuring: 'any', ignoreReadBeforeAssign: false } ],
			'svelte/prefer-destructured-store-props': 'off',
			'svelte/prefer-writable-derived': 'error',
			'svelte/require-each-key': 'error',
			'svelte/require-event-dispatcher-types': 'off', // legacy
			'svelte/require-optimized-style-attribute': 'error',
			'svelte/require-stores-init': 'error',
			'svelte/valid-each-key': 'error',

			// STYLISTIC ISSUES

			'svelte/consistent-selector-style': 'off',
			'svelte/derived-has-same-inputs-outputs': 'error',
			'svelte/first-attribute-linebreak': 'off',
			'svelte/html-closing-bracket-new-line': 'off',
			'svelte/html-closing-bracket-spacing': [ 'error', { startTag: 'never', endTag: 'never', selfClosingTag: 'always' } ],
			'svelte/html-quotes': [ 'error', { prefer: 'double', dynamic: { quoted: false, avoidInvalidUnquotedInHTML: false } } ],
			'svelte/html-self-closing': [ 'error', { void: 'never', normal: 'never', svg: 'always', math: 'never', component: 'always', svelte: 'always' } ],
			// '@stylistic/indent': 'off', 'svelte/indent': [ 'error', { indent: 'tab', indentScript: false, switchCase: 1, alignAttributesVertically: false } ], // only in .svelte files
			'svelte/max-attributes-per-line': 'off',
			'svelte/mustache-spacing': [ 'error', { textExpressions: 'never', attributesAndProps: 'never', directiveExpressions: 'never', tags: { openingBrace: 'never', closingBrace: 'never' } } ],
			'svelte/no-extra-reactive-curlies': 'off', // legacy
			'svelte/no-restricted-html-elements': 'off',
			'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
			'svelte/prefer-class-directive': [ 'error', { prefer: 'empty' } ],
			'svelte/prefer-style-directive': 'error',
			'svelte/require-event-prefix': [ 'error', { checkAsyncFunctions: false } ],
			'svelte/shorthand-attribute': [ 'error', { prefer: 'always' } ],
			'svelte/shorthand-directive': [ 'error', { prefer: 'always' } ],
			'svelte/sort-attributes': 'off',
			'svelte/spaced-html-comment': [ 'error', 'always' ],

			// EXTENSION RULES

			'no-inner-declarations': 'off', 'svelte/no-inner-declarations': [ 'error', 'both', { blockScopedFunctions: 'allow' } ],
			'@stylistic/no-trailing-spaces': 'off', 'svelte/no-trailing-spaces': [ 'error', { skipBlankLines: false, ignoreComments: false } ],

			// SVELTEKIT

			'svelte/no-export-load-in-svelte-module-in-kit-pages': 'off',
			'svelte/no-navigation-without-resolve': 'off',
			'svelte/valid-prop-names-in-kit-pages': 'off',

			// EXPERIMENTAL

			'svelte/experimental-require-slot-types': 'off', // legacy
			'svelte/experimental-require-strict-events': 'off', // legacy

			// SYSTEM

			'svelte/comment-directive': [ 'error', { reportUnusedDisableDirectives: true } ],
			'svelte/system': 'error'
		}
	},
	{
		name: 'koffeine/svelte/.svelte.js',
		files: [ '**/*.svelte.js' ],
		rules: {
			// STYLISTIC ISSUES

			'svelte/indent': 'off' // only in .svelte files
		}
	},
	{
		name: 'koffeine/svelte/.svelte',
		files: [ '**/*.svelte' ],
		processor: sveltePlugin.processors.svelte,
		rules: {
			// STYLISTIC ISSUES

			'@stylistic/indent': 'off', 'svelte/indent': [ 'error', { indent: 'tab', indentScript: false, switchCase: 1, alignAttributesVertically: false } ], // only in .svelte files
		}
	}
];
