module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "project": [
      "./tsconfig.json"
    ]
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "prettier",
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
    "unused-imports",
  ],
  "rules": {
    "semi": [
      2,
      "never"
    ],
    "quotes": [
      2,
      "double"
    ],
    "no-console": "warn",
    "no-var": "error",
    "sort-imports": 0,
    "no-unused-vars": "warn",
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          [
            "parent",
            "sibling"
          ],
          "object",
          "type",
          "index"
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ]
  }
}