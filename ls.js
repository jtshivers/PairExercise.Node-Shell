const fs = require("fs");

// const directory = fs.readdir("./", "utf8", (err, files) => {
//   if (err) {
//     throw err;
//   } else {
//     process.stdout.write(files.join("\n"));
//     process.stdout.write("prompt > ");
//   }
// });

module.exports = () => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write("\n" + files.join("\n"));
      process.stdout.write("\nprompt > ");
    }
  });
};
