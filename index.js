const fs = require('fs');

module.exports = function method(value) {
    fs.writeFileSync(
        './dynamically-generated-file.js',
        `module.exports = "${value}";`
    );

    return require('./dynamically-generated-file.js');
}
