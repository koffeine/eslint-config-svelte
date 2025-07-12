import { ESLint } from 'eslint';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import overrideConfig from '../src/index.js';

/** @type {string[]} */ const allValidRules = [];
/** @type {string[]} */ const allDeprecatedRules = [];

builtinRules.forEach((rule, ruleName) =>
	(rule.meta?.deprecated ? allDeprecatedRules : allValidRules).push(ruleName));

const config = await new ESLint({ overrideConfigFile: true, overrideConfig }).calculateConfigForFile('.js');

Object.entries(config.plugins).forEach(([ pluginName, plugin ]) =>
	Object.entries(plugin.rules).forEach(([ ruleName, rule ]) =>
		(rule.meta?.deprecated ? allDeprecatedRules : allValidRules).push(`${pluginName}/${ruleName}`)));

const currentRules = Object.keys(config.rules);


const missingRules = allValidRules.filter((rule) => !currentRules.includes(rule));
const deprecatedRules = allDeprecatedRules.filter((rule) => currentRules.includes(rule));
const invalidRules = currentRules.filter((rule) => !(allValidRules.includes(rule) || allDeprecatedRules.includes(rule)));

if (missingRules.length > 0) {
	console.log('Missing rules:', missingRules); // eslint-disable-line no-console
}

if (deprecatedRules.length > 0) {
	console.log('Deprecated rules:', deprecatedRules); // eslint-disable-line no-console
}

if (invalidRules.length > 0) {
	console.log('Invalid rules:', invalidRules); // eslint-disable-line no-console
}

process.exit(missingRules.length + deprecatedRules.length + invalidRules.length);
