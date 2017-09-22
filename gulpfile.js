const gulp = require('gulp');
const connect = require('gulp-connect');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');



gulp.task('connect',()=>{
    connect.server({
        base:'http://localhost',
        port:8080,
        root:'./dist',
        livereload:true,
    });

});

gulp.task('js',()=>{
    browserify('./src/js/main.js')
        .transform(babelify,{
            "presets": ["es2015"]
        })
        .bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
})



gulp.task('watch',()=>{
    gulp.watch('./src/**/*.js',['js'])
    gulp.watch('./**/*.html',['html'])
})

gulp.task('default',['js','connect','watch'],()=>{

})