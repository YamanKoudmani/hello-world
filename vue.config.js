module.exports = {   
    publicPath: process.env.NODE_ENV === 'production'
    ? '/YamanKoudmani/'
    : '/',
    chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "Yaman Koudmani";
            return args;
        })
    }
    
}
