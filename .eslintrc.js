module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "arrowFunctions": true,
      "templateStrings": true,
    },
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "jest",
  ],
  "rules": {
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true,
    }],
    "camelcase": ["error", {
      "properties": "never",
    }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "generator-star-spacing": ["error", {
      "before": true,
      "after": true,
    }],
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
    }],
    "linebreak-style": ["error", "unix"],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-unused-vars": ["error", {
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "quotes": ["error", "double"],
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": ["error", {
      "ignoreCase": true,
    }],
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-render-return": "error",
    "semi": ["error", "always"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always",
    }],
  }
}
