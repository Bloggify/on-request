"use strict";

const path = require("path")

/**
 * init
 * Helper to create Bloggify themes
 *
 * @name init
 * @function
 * @param {Object} conf The theme configuration. If it contains the `templates` array, those will be added as templates. The `options` property will be used to set the default data for each template.
 * @param {String} dirname The root of the plugin.
 */
module.exports = (conf, dirname) => {
    if (Array.isArray(conf.templates)) {
        conf.templates.forEach(c => {
            const tmpl = Bloggify.renderer.registerTemplate(path.resolve(dirname, c));
            tmpl.data = { theme: conf.options };
        });
    }
};
