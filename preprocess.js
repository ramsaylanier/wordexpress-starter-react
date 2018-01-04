const sass = require('node-sass');

module.exports = (data, filename) => {
    let result;
    result = sass.renderSync({
        data: data,
        file: filename
    }).css;

    return result.toString('utf8');
};