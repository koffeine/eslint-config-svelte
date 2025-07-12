import { ESLint } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import koffeine from '@koffeine/eslint-config';
import koffeineSvelte from '../src/index.js';

/** @type {string[]} */ const builtinValidRules = [];
/** @type {string[]} */ const builtinDeprecatedRules = [];

builtinRules.forEach((rule, ruleName) =>
	(rule.meta?.deprecated ? builtinDeprecatedRules : builtinValidRules).push(ruleName));

const eslint = new ESLint({ overrideConfigFile: true, overrideConfig: [ ...koffeine, ...koffeineSvelte ] });


let numberOfErrors = 0;

for (const extension of [ '.svelte.js', '.svelte' ]) {
	const allValidRules = [ ...builtinValidRules ];
	const allDeprecatedRules = [ ...builtinDeprecatedRules ];

	const config = await eslint.calculateConfigForFile(extension); // eslint-disable-line no-await-in-loop

	Object.entries(config.plugins).forEach(([ pluginName, plugin ]) =>
		Object.entries(plugin.rules).forEach(([ ruleName, rule ]) =>
			(rule.meta?.deprecated ? allDeprecatedRules : allValidRules).push(`${pluginName}/${ruleName}`)));

	const currentRules = Object.keys(config.rules);


	const missingRules = allValidRules.filter((rule) => !currentRules.includes(rule));
	const deprecatedRules = allDeprecatedRules.filter((rule) => currentRules.includes(rule));
	const invalidRules = currentRules.filter((rule) => !(allValidRules.includes(rule) || allDeprecatedRules.includes(rule)));

	if (missingRules.length > 0) {
		console.log(`Missing ${extension} rules:`, missingRules); // eslint-disable-line no-console
	}

	if (deprecatedRules.length > 0) {
		console.log(`Deprecated ${extension} rules:`, deprecatedRules); // eslint-disable-line no-console
	}

	if (invalidRules.length > 0) {
		console.log(`Invalid ${extension} rules:`, invalidRules); // eslint-disable-line no-console
	}

	numberOfErrors += missingRules.length + deprecatedRules.length + invalidRules.length;
}

process.exit(numberOfErrors);
