// Dependencies
var IterateObject = require("iterate-object");

/**
 * OnRequest
 *
 * @name OnRequest
 * @function
 * @param {Object} config The configuration object:
 *
 *  - `files` (Array) An array of script paths to load from the site root. If
 *     they export a function, that function will be called.
 */
module.exports = function OnRequest(config) {
    if (!config) {
        return Bloggify.log("on-request plugin needs a configuration. Check the docs.", "warn");
    }
    config.files = config.files || [];
    IterateObject(config.files, function (c) {
        var s = require(Bloggify.paths.site_dir + "/" + c);
        if (typeof s === "function") {
            s(config);
        }
    });
};
