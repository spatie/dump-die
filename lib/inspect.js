'use strict'

const util = require('util')

function inspect(thing) {
    return util.inspect(thing, {
        showHidden: true,
        depth: null,
        colors: true
    })
}

module.exports = inspect
