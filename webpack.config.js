

module.exports = {
    entry : {
        
        main : './src/Index.js'
       
    },
    module: {
        rules :[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png$/,
                use : {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    },
    output : {
        filename: '[name].js',
        path: __dirname + '/public/js'
    },
   
    watch : true,
    watchOptions: {
        ignored: '/node_modules/',
      }
};