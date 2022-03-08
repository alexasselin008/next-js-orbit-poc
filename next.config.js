    
// const { patchWebpackConfig } = require("next-global-css");
// next.config.js
const withTM = require("next-transpile-modules")(["@orbit-ui/components", "@orbit-ui/css", "@orbit-ui/icons"]); // pass the modules you would like to see transpiled

const nextConfig = {
    /* config options here */
    /* your already customized webpack option */
    // webpack: (config, options) => {
    //     // config.module.rules.push({
    //     //     test: /\.(woff|woff2|ttf|eot)$/,
    //     //     type: 'asset/resource',
    //     //     use: [
    //     //         {
    //     //             options: {
    //     //                 esModule: false,
    //     //                 name: "[name].[ext]",
    //     //                 outputPath: "static/media/fonts/",
    //     //                 publicPath: "./public/assets/fonts/",
    //     //             },   
    //     //         }
    //     //     ]
            
    //     //     });
    //     return config;
    //     //return patchWebpackConfig(config, options);
    // },
};

module.exports = withTM(nextConfig);