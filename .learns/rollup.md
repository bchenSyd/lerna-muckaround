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