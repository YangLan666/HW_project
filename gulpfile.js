//1.移入需要的模块
const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

//2.创建任务
gulp.task("server", done => {
  //搭建本地的服务器，让dist里的页面在这个服务器运行
  connect.server({
    root: "dist",
    livereload: true
  })
  done();
});
gulp.task("html", done => {
  //将html文件拷贝到dist
  gulp
    .src("res/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
  done(); 
});
//将js文件拷贝到dist
gulp.task("js", done => {
  gulp.src("res/js/**")
    .pipe(gulp.dest("dist/js"))
  done();
});

//将img文件拷贝到dist
gulp.task("copyImg", done => {
  gulp.src("res/img/**")
    .pipe(gulp.dest("dist/img"))
  done();
});
//将iconfont拷贝到dist
gulp.task("font_khryhaqhs5i", done => {
  gulp.src("res/font_khryhaqhs5i/**")
    .pipe(gulp.dest("dist/font_khryhaqhs5i"))
  done();
}); 

gulp.task("sass", done => {
  //将scss文件转换成css，拷贝到dist
  gulp
    .src("res/sass/*.scss")
    .pipe(sourcemaps.init()) //浏览器调试代码时，让浏览器展示的代码和源代码发生关联
    .pipe(sass({ outputStyle: "nested" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  done();
});
gulp.task("watch", done => {
  //实时监听scss和html文件的变化，让源文件和dist目录的文件自动保持一致
  gulp.watch("res/sass/*.scss", gulp.series("sass"));
  gulp.watch("res/*.html", gulp.series("html"));
  gulp.watch("res/img/**", gulp.series("copyImg"));
  gulp.watch("res/js/**", gulp.series("js"));
  gulp.watch("res/js/font_khryhaqhs5i", gulp.series("font"));
  done();
});

gulp.task("default", gulp.parallel("server", "watch")); //建立默认任务，同时执行sever和watch两个任务
