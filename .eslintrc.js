module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'airbnb', 'airbnb-typescript', 'plugin:storybook/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.json'
	},
	rules: {
		'react/jsx-indent': [2, 2],
		'react/jsx-indent-props': [2, 2],
		'react/react-in-jsx-scope': 0,
		'react/jsx-filename-extension': 0,
		'react/require-default-props': 0,
		'react/destructuring-assignment': 0,
		'react/jsx-props-no-spreading': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/semi': 0,
		'@typescript-eslint/naming-convention': 0,
		'no-shadow': 0,
		'no-undef': 0,
		'no-underscore-dangle': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
		'max-len': [2, { ignoreComments: true, code: 120 }],
		'linebreak-style': 0,
	},
};