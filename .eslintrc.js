module.exports = {
  'extends': 'airbnb',
  "parser": "babel-eslint",
  'plugins': [
      'react',
      'jest'
  ],
  'globals': {
      '_': true,
  },
  'rules':{
      'no-underscore-dangle': 0,
      'brace-style': 0,
      'prefer-template': 0,
      'max-len': [2, 120, 2],
      'react/jsx-filename-extension': 0,
      'no-restricted-globals': 0,
      'no-console': 0,
      "linebreak-style": 0,
      'object-curly-newline': 0,
      'function-paren-newline': 0,
      "linebreak-style": 0,
      'arrow-body-style': 0,
      'react/no-multi-comp': 0,
      'react/forbid-prop-types': 0,
      "linebreak-style": 0,
      'react/no-unescaped-entities': 0,
      'react/prefer-stateless-function': 0,
      'react/require-default-props': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/no-array-index-key': 0,
      'jsx-a11y/no-noninteractive-tabindex': 0,
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,
      'jsx-a11y/media-has-caption': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/label-has-for': 0,
      'import/prefer-default-export': 0,
      'import/extensions': 0,
  },
  'env': {
      'mocha': true,
      'browser': true,
      'jest/globals': true
  },
};
