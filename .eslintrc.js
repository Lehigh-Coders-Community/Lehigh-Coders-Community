const path = require("path");

module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"graphql"
	],
	"rules": {
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"graphql/template-strings": [
			"error",
			{
				env: "relay",
				schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
				tagName: "graphql"
			}
		]
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
