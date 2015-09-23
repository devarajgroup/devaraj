var harp = require("harp");

console.log('Preparing to compile...');

harp.compile('./', './htdocs', function(){
  console.log('Finished compiling.');
});

console.log("Devaraj site should be compiled into htdocs. Ready to push.");
