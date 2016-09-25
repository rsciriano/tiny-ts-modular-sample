var pkg = require('./package.json');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: pkg.main,
        library: pkg.name,
        libraryTarget: "umd"
    },
    externals: [
        "foo"
    ],
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}
