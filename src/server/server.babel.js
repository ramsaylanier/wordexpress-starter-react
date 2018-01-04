// All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.
require('babel-register')({
  plugins: [
    ['css-modules-transform', {
      "preprocessCss": "./preprocess.js",
      "extensions": [".css", ".scss"]
    }]
  ]
})

// Server Driver Code, everything from here on can use all the super future ES6 features!
module.exports = require('./server.js');
