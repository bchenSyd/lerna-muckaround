## externals
(!) Unresolved dependencies
https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
react (imported by packages/button/src/index.jsx)
lodash (imported by packages/button/src/index.jsx)

the import declaration gets turned into a CommonJS require statement, but `react` and `lodash` do **not** get included in the bundle.

if you want to bundle dependencies, you need `rollup-plugin-node-resolve`


## babel plugin
```js
{
    "presets": [
        ["env",
            {
                // First, we're setting "modules": false, otherwise Babel will convert our modules to CommonJS before // Rollup gets a chance to do its thing, causing it to fail.
                "modules": false
            }
        ],
        "react"
    ]
    "plugins": ["external-helpers"]
    // which allows Rollup to include any 'help functions'(e.g. _interopDefault in result bundle.js) // just once at the top of the bundle,rather than including them in every module that uses them // (which is the default behaviour).
}
```