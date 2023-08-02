const canvas = require("canvas");
const { createCanvas, loadImage } = canvas;
const fs = require("fs");
const { glob } = require("glob");
const medalJSON = require("../medals.json");
canvas.registerFont(require("@canvas-fonts/times-new-roman"), {
  family: "Times New Roman",
});
const main = async (data) => {
  try {
    const canvas = createCanvas(951, 340);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      await loadImage(
        __dirname + "/../medal-box-images/Blank_Medal_Case_Template.png"
      ),
      0,
      0,
      951,
      340
    );
    const medals = data.medals;
    //arrange the elements of the arrays labelled eight_line, sixth_line and so on from the medals.json file
    //they should be arranged so the eight line if the first element of the conjoined array
    //the ninth line should be the second element of the conjoined array
    //the seventh line should be the third element of the conjoined array and so on

    const conjoined = [
      ...medalJSON.eighth_line.reverse(),

      ...medalJSON.seventh_line.reverse(),
      ...medalJSON.sixth_line.reverse(),
      ...medalJSON.fifth_line.reverse(),
      ...medalJSON.fourth_line.reverse(),
      ...medalJSON.third_line.reverse(),
      ...medalJSON.second_line.reverse(),
      ...medalJSON.first_line.reverse(),
    ];
    //iterate through the conjoined array
    const foundMedals = conjoined.filter((medal) => medals.includes(medal));
    console.log(foundMedals);
    //left  - 85,98
    //right - 795, 99
    //one medal is 70x153
    const left = 85;
    const right = 795;
    const top = 98;
  } catch (err) {
    console.log(err);
  }
};
main({
  medals: ["3 Year", "Founders", "Diplomat", "Public Relation", "1 Year"],
});
