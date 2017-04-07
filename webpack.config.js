const path = require('path');


module.exports = {
    // click on the name of the option to get to the detailed documentation
    // click on the items with arrows to show more examples / advanced options

    entry: {
        app: path.resolve(__dirname, "src") + "/app.js"
    },


    output: {
        path: path.resolve(__dirname, "build"), // string

        filename: "bundle.js", // string
    },

    module: {

        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ]
    },

    devtool: "source-map",

    plugins: [
       
    ]
}