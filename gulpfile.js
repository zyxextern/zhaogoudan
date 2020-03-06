// 导入gulp这个第三方模块
const gulp = require('gulp');
    // css
        // 1.导入gulp-cssmin    压缩
        const cssmin = require('gulp-cssmin')
        // 2.导入gulp-autoprefixer  加前缀
        const autoprefixer = require('gulp-autoprefixer')

        // 打包css的方法
        const cssHandler = () =>{
            // 找到css文件，自动添加前缀，压缩css代码，放在dist文件下的css文件内，没有dist会自己创建
            return gulp.src('./src/css/*.css').pipe(autoprefixer()).pipe(cssmin()).pipe(gulp.dest('./dist/css'));
        };
    // js
        // 1.导入gulp-uglify    压缩
        const uglify = require('gulp-uglify');
        // 2.导入gulp-babel     ES6 -> ES5
            // 还依赖另外两个包
            // -> @babel/core 和 @babel/preset-env
        const babel = require('gulp-babel');
        // 打包js的方法
        const jsHandler = () =>{
            // 找到js文件，ES6 -> ES5，压缩js代码，放在dist文件下的js文件里
            return gulp.src('./src/js/*.js').pipe(babel({presets:['@babel/env']})).pipe(uglify()).pipe(gulp.dest('./dist/js'));
        };
    // html
        // 1.导入gulp-htmlmin   传参才能压缩
        const htmlmin = require('gulp-htmlmin');
        // 打包html的方法
        const htmlHandler = () =>{
            // 找到html文件，压缩，放在dist文件下的pages文件里
            return gulp.src('./src/pages/*.html').pipe(
                htmlmin({
                    removeAttributeQuotes:true,// 移出双引号
                    removeComments:true,// 移除注释
                    collapseBooleanAttributes:true,// 把值为布尔值的简写
                    collapseWhitespace:true,// 移除所有空格，变成一行代码
                    minifyCSS:true,// 把页面中的style标签中的css去空格
                    minifyJS:true,// 把页面中的script标签中的js去空格
                })).pipe(gulp.dest('./dist/pages'));
        };
    // imgs
        // 书写一个移动 image 文件的方法
        const imgHandler = () =>{
            return gulp.src('./src/imgs/**').pipe(gulp.dest('./dist/imgs'))
        };
    // lib
        // 书写一个移动 lib 文件的方法
        const libHandler = () =>{
            return gulp.src('./src/lib/**').pipe(gulp.dest('./dist/lib'))

        };

    // 书写一个自动删除dist目录
        const del = require('del');
        const delHandler = () =>{
            return del(['./dist'])
        };

    // 书写一个配置服务器的任务
        const webserver = require('gulp-webserver');
        const serverHandler = () =>{
            return gulp.src('./dist').pipe(webserver({
                host:'localhost',// 域名自定义
                port:8080,// 端口号
                open:'./pages/index.html',// 默认打开的主页
                livereload:true,// 热重启
                // 代理配置
            //     proxies:[
            //         {
            //             source:'/gx',// 源，代理标识符
            //             target:'https://store.steampowered.com/search/results/' //你要代理的地址
            //         }
            // ]
            }))
        }
    // 自动监控文件
    const watchHandler = () =>{
        gulp.watch('./src/css/*.css',cssHandler)
        gulp.watch('./src/js/*.js',jsHandler)
        gulp.watch('./src/pages/*.html',htmlHandler)
        gulp.watch('./src/lib/**',libHandler)
        gulp.watch('./src/imgs/**',imgHandler)
    }

// 在文件里面导出我准备好的方法
// 导出以后就可以在命令行执行gulp css的指令了
// module.exports.css = cssHandler;
// 导出以后就可以在命令行执行gulp js的指令了
// module.exports.js = jsHandler;
// 导出以后就可以在命令行执行gulp html的指令了
// module.exports.html = htmlHandler;
// 导出以后就可以在命令行执行gulp img的指令了
// module.exports.img = imgHandler;
// 导出以后就可以在命令行执行gulp lib的指令了
// module.exports.lib = libHandler;

// 导出一个默认任务
// parallel同时进行，series逐步进行
// module.exports.default = gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler,libHandler)

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler,libHandler),
    serverHandler,
    watchHandler
    )






