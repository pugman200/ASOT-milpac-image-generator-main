const fs = require("fs");
((async) => {
  //read for all .mkv files and store them in an array
  //names will be like New.Amsterdam.2018.S04E01.720p.AMZN.WEBRip.x264-GalaxyTV.mkv
  //sort them by episode number
  //rename them to S04E01.mkv and so on
  fs.readdir("./", (err, files) => {
    if (err) {
      console.log(err);
    } else {
      let mkvFiles = [];
      files.forEach((file) => {
        if (file.endsWith(".mkv")) {
          mkvFiles.push(file);
        }
      });
      mkvFiles.sort((a, b) => {
        let aEp = a.split(".")[2].split("E")[1];
        let bEp = b.split(".")[2].split("E")[1];
        return aEp - bEp;
      });
      mkvFiles.forEach((file, index) => {
        let newFileName = `S04E${index + 1}.mkv`;
        fs.rename(file, newFileName, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`${file} renamed to ${newFileName}`);
          }
        });
      });
    }
  });
})();
