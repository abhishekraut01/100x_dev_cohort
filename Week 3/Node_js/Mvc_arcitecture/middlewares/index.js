const fs = require('fs');

function logReqRes(filename) {
    return (req, res, next) => {
        const log = `${Date.now()} : ${req.ip} : ${req.path}\n `
        fs.appendFile(filename, log, (err) => {
            next()
        });
    };
}

module.exports = {
    logReqRes
};
