var fs = require("fs");

var gulp = require("gulp");
var awspublish = require("gulp-awspublish");


gulp.task("publish", function() {
  var publisher = awspublish.create(JSON.parse(fs.readFileSync("real-aws.json")));
  var headers = {
   "Cache-Control": "max-age=315360000, no-transform, public"
  };

  return gulp.src("./dist/**")
    .pipe(publisher.publish(headers), 10)
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
