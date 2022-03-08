module.exports = {
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-lodash",
        "@sharegate/eslint-config-react",
        "@sharegate/eslint-config-strict",
        "@sharegate/eslint-config-typescript",
        "next/core-web-vitals"
    ],
    plugins: [
        "@sharegate/rules"
    ],
    globals: {
        CONFIG: true,
        "process": true,
        "require": true,
        "module": true
    },
    env: {
        "browser": true,
        "es6": true
    },
    parser: "@typescript-eslint/parser",
    rules: {
        // Imported in Apricot as well, could be in common soon
        "react/jsx-curly-spacing": ["warn", { children: true, when: "never" }],
        "react/jsx-tag-spacing": ["warn", { beforeSelfClosing: "always" }],
        "react/jsx-no-undef": ["warn", { "allowGlobals": true }],
        "no-duplicate-imports": "warn",
        "comma-spacing": ["warn", {
            "before": false,
            "after": true
        }],
        "no-multiple-empty-lines": "warn",
        "keyword-spacing": ["warn", { before: true, after: true }],
        "arrow-spacing": ["warn", { before: true, after: true }],
        "space-before-blocks": ["warn", "always"],
        "space-infix-ops": "warn",
        "space-in-parens": ["warn", "never"],
        "padded-blocks": ["warn", "never"],

        // custom rules for ShareGate apps
        "@sharegate/rules/strict-css-modules-names": "warn",

        // custom rules for OneSharegate
        "import/no-relative-parent-imports": "off", // https://github.com/benmosher/eslint-plugin-import/issues/1392
        "import/no-extraneous-dependencies": ["warn"],

        "no-restricted-imports": ["warn", { paths: [{
            name: "react",
            importNames: ["default"],
            message: "Do not import React from \"react\". Use named imports instead (i.e import { X } from \"react\")"
        }] }],

        // Custom overrides of the shared config for OneSharegate
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off", // issue with this rule at the moment, it flags react components. Disable it for now

        // Extra rules for OneSharegate's codebase
        "no-debugger": "warn",
        "no-console": "warn",
        "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],

        "@typescript-eslint/no-implicit-any-catch": "warn",
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/naming-convention": ["warn",
            {
                "selector": [
                    "class",
                    "typeAlias",
                    "typeParameter",
                    "enum",
                    "enumMember"
                ],
                "format": ["PascalCase"]
            },
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": false
                }
            }
        ]
    }
};
