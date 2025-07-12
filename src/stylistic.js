import stylisticPlugin from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
export default {
	name: 'koffeine/@stylistic',
	plugins: {
		'@stylistic': stylisticPlugin
	},
	rules: {
		'@stylistic/array-bracket-newline': [ 'error', 'consistent' ],
		'@stylistic/array-bracket-spacing': [ 'error', 'always', { singleValue: true, objectsInArrays: true, arraysInArrays: true } ],
		'@stylistic/array-element-newline': [ 'error', 'consistent' ],
		'@stylistic/arrow-parens': [ 'error', 'always' ],
		'@stylistic/arrow-spacing': [ 'error', { before: true, after: true } ],
		'@stylistic/block-spacing': [ 'error', 'always' ],
		'@stylistic/brace-style': [ 'error', '1tbs', { allowSingleLine: false } ],
		'@stylistic/comma-dangle': [ 'error', 'only-multiline' ],
		'@stylistic/comma-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/comma-style': [ 'error', 'last' ],
		'@stylistic/computed-property-spacing': [ 'error', 'never', { enforceForClassMembers: true } ],
		'@stylistic/curly-newline': 'off',
		'@stylistic/dot-location': [ 'error', 'property' ],
		'@stylistic/eol-last': [ 'error', 'always' ],
		'@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
		'@stylistic/function-call-spacing': [ 'error', 'never' ],
		'@stylistic/function-paren-newline': [ 'error', 'consistent' ],
		'@stylistic/generator-star-spacing': [ 'error', { before: true, after: false } ],
		'@stylistic/implicit-arrow-linebreak': 'off',
		'@stylistic/indent': [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: { parameters: 1, body: 1 },
				FunctionExpression: { parameters: 1, body: 1 },
				CallExpression: { arguments: 1 },
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				offsetTernaryExpressions: false,
				ignoreComments: false,
				tabLength: 4
			}
		],
		'@stylistic/indent-binary-ops': 'off',
		'@stylistic/jsx-child-element-spacing': 'off',
		'@stylistic/jsx-closing-bracket-location': 'off',
		'@stylistic/jsx-closing-tag-location': 'off',
		'@stylistic/jsx-curly-brace-presence': 'off',
		'@stylistic/jsx-curly-newline': 'off',
		'@stylistic/jsx-curly-spacing': 'off',
		'@stylistic/jsx-equals-spacing': 'off',
		'@stylistic/jsx-first-prop-new-line': 'off',
		'@stylistic/jsx-function-call-newline': 'off',
		'@stylistic/jsx-indent-props': 'off',
		'@stylistic/jsx-max-props-per-line': 'off',
		'@stylistic/jsx-newline': 'off',
		'@stylistic/jsx-one-expression-per-line': 'off',
		'@stylistic/jsx-pascal-case': 'off',
		'@stylistic/jsx-props-no-multi-spaces': 'off',
		'@stylistic/jsx-quotes': [ 'error', 'prefer-double' ],
		'@stylistic/jsx-self-closing-comp': 'off',
		'@stylistic/jsx-sort-props': 'off',
		'@stylistic/jsx-tag-spacing': 'off',
		'@stylistic/jsx-wrap-multilines': 'off',
		'@stylistic/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'minimum' } ],
		'@stylistic/keyword-spacing': [ 'error', { before: true, after: true } ],
		'@stylistic/line-comment-position': 'off',
		'@stylistic/linebreak-style': [ 'error', 'unix' ],
		'@stylistic/lines-around-comment': 'off',
		'@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: false } ],
		'@stylistic/max-len': 'off',
		'@stylistic/max-statements-per-line': 'off',
		'@stylistic/member-delimiter-style': 'off',
		'@stylistic/multiline-comment-style': 'off',
		'@stylistic/multiline-ternary': 'off',
		'@stylistic/new-parens': [ 'error', 'always' ],
		'@stylistic/newline-per-chained-call': 'off',
		'@stylistic/no-confusing-arrow': 'off',
		'@stylistic/no-extra-parens': [
			'error',
			'all',
			{
				conditionalAssign: false,
				returnAssign: true,
				nestedBinaryExpressions: false,
				ternaryOperandBinaryExpressions: true,
				ignoreJSX: 'none',
				enforceForArrowConditionals: true,
				enforceForSequenceExpressions: true,
				enforceForNewInMemberExpressions: false,
				enforceForFunctionPrototypeMethods: false,
				nestedConditionalExpressions: false
			}
		],
		'@stylistic/no-extra-semi': 'error',
		'@stylistic/no-floating-decimal': 'error',
		'@stylistic/no-mixed-operators': [
			'error',
			{
				groups: [
					[ '+', '-', '*', '/', '%', '**' ],
					[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
					[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
					[ '&&', '||' ],
					[ 'in', 'instanceof' ]
				],
				allowSamePrecedence: true
			}
		],
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/no-multi-spaces': [ 'error', { ignoreEOLComments: false, exceptions: { Property: true, BinaryExpression: false, VariableDeclarator: true, ImportDeclaration: false }, includeTabs: true } ],
		'@stylistic/no-multiple-empty-lines': [ 'error', { max: 2, maxEOF: 1, maxBOF: 0 } ],
		'@stylistic/no-tabs': 'off',
		'@stylistic/no-trailing-spaces': [ 'error', { skipBlankLines: false, ignoreComments: false } ],
		'@stylistic/no-whitespace-before-property': 'error',
		'@stylistic/nonblock-statement-body-position': 'off',
		'@stylistic/object-curly-newline': [ 'error', { consistent: true } ],
		'@stylistic/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true } ],
		'@stylistic/object-property-newline': 'off',
		'@stylistic/one-var-declaration-per-line': 'off',
		'@stylistic/operator-linebreak': [ 'error', 'before' ],
		'@stylistic/padded-blocks': 'off',
		'@stylistic/padding-line-between-statements': [
			'error',

			{ prev: '*', next: 'block', blankLine: 'always' },
			{ prev: 'block', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'block-like', blankLine: 'always' },
			{ prev: 'block-like', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'class', blankLine: 'always' },
			{ prev: 'class', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'do', blankLine: 'always' },
			{ prev: 'do', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'for', blankLine: 'always' },
			{ prev: 'for', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'function', blankLine: 'always' },
			{ prev: 'function', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'if', blankLine: 'always' },
			{ prev: 'if', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-block-like', blankLine: 'always' },
			{ prev: 'multiline-block-like', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-const', blankLine: 'always' },
			{ prev: 'multiline-const', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-let', blankLine: 'always' },
			{ prev: 'multiline-let', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-var', blankLine: 'always' },
			{ prev: 'multiline-var', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'switch', blankLine: 'always' },
			{ prev: 'switch', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'try', blankLine: 'always' },
			{ prev: 'try', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'while', blankLine: 'always' },
			{ prev: 'while', next: '*', blankLine: 'always' },

			{ prev: '*', next: 'multiline-export', blankLine: 'always' },
			{ prev: 'multiline-export', next: '*', blankLine: 'always' }
		],
		'@stylistic/quote-props': [ 'error', 'as-needed', { keywords: false, unnecessary: true, numbers: false } ],
		'@stylistic/quotes': [ 'error', 'single', { avoidEscape: true, allowTemplateLiterals: false, ignoreStringLiterals: false } ],
		'@stylistic/rest-spread-spacing': [ 'error', 'never' ],
		'@stylistic/semi': [ 'error', 'always', { omitLastInOneLineBlock: false, omitLastInOneLineClassBody: false } ],
		'@stylistic/semi-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/semi-style': [ 'error', 'last' ],
		'@stylistic/space-before-blocks': [ 'error', 'always' ],
		'@stylistic/space-before-function-paren': [ 'error', { anonymous: 'never', named: 'never', asyncArrow: 'always' } ],
		'@stylistic/space-in-parens': [ 'error', 'never' ],
		'@stylistic/space-infix-ops': [ 'error', { int32Hint: false } ],
		'@stylistic/space-unary-ops': [ 'error', { words: true, nonwords: false } ],
		'@stylistic/spaced-comment': [ 'error', 'always' ],
		'@stylistic/switch-colon-spacing': [ 'error', { before: false, after: true } ],
		'@stylistic/template-curly-spacing': [ 'error', 'never' ],
		'@stylistic/template-tag-spacing': 'off',
		'@stylistic/type-annotation-spacing': 'off',
		'@stylistic/type-generic-spacing': 'off',
		'@stylistic/type-named-tuple-spacing': 'off',
		'@stylistic/wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],
		'@stylistic/wrap-regex': 'off',
		'@stylistic/yield-star-spacing': [ 'error', 'before' ]
	}
};
