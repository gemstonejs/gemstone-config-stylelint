/*
**  GemstoneJS -- Gemstone JavaScript Technology Stack
**  Copyright (c) 2016-2017 Gemstone Project <http://gemstonejs.com>
**  Licensed under Apache License 2.0 <https://spdx.org/licenses/Apache-2.0>
*/

/*  exported configuration  */
module.exports = {
    "extends": require.resolve("stylelint-config-standard"),
    "rules": {
        "indentation":                                  4,
        "color-hex-case":                               [ "lower" ],
        "color-hex-length":                             "long",
        "rule-nested-empty-line-before":                null,
        "rule-empty-line-before":                       [ "always-multi-line", {
            "except": [
                "after-single-line-comment",
                "inside-block-and-after-rule",
                "first-nested"
            ],
            "ignore": [
                "after-comment",
                "inside-block"
            ]
        } ],
        "declaration-empty-line-before":                "never",
        "declaration-colon-space-before":               "never",
        "declaration-colon-space-after":                null,
        "shorthand-property-no-redundant-values":       null,
        "selector-descendant-combinator-no-non-space":  null,
        "block-opening-brace-space-before":             null
    }
}

