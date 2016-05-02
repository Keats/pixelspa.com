var fs = require("fs");

var gulp = require("gulp");
var awspublish = require("gulp-awspublish");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var lost = require("lost");
var autoprefixer = require("autoprefixer");

var sassFiles = "./pixelspa/sass/**/*.scss";

gulp.task("publish", function() {
  var publisher = awspublish.create(JSON.parse(fs.readFileSync("real-aws.json")));
  var headers = {
   "Cache-Control": "max-age=315360000, no-transform, public"
  };

  return gulp.src("./pixelspa/public/**")
    .pipe(publisher.publish(headers), 10)
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});


gulp.task("sass", function() {
  var processors = [
    lost,
    autoprefixer({ browsers: ["last 2 versions"] })
  ];

  return gulp.src(sassFiles)
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest("./pixelspa/static/"))
});

gulp.task("watch", function() {
  gulp.watch(sassFiles, gulp.parallel("sass"));
});
