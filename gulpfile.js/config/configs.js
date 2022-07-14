const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports = {
    isProd:isProd,
    isDev:isDev,

    pug:{
        pretty:!isProd,
        data: {
            data:require('../data/dataset.json')
        }
    },
    webpack:{
        mode: isProd ? "production" : "development"
    },
    img:{
        verbose:true
    },
    fonts:{
        formats:["woff"]
    }
}