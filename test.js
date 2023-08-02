const SlideNumbers = {
  reenlist: 1,
  ltcol: 2,
  major: 3,
  captain: 4,
  lieutenant: 5,
  "wing-commander": 6,
  "squadron-leader": 7,
  flt: 8,
  wo1: 9,
  wo2: 10,
  sgt: 11,
  cpl: 12,
  lcpl: 13,
  pte: 14,
  enlist: 15,
};
//list all the keys
let keys = [];
Object.keys(SlideNumbers).forEach(function (key) {
  keys.push(key);
});
console.log(keys);
console.log(keys.join(","));
//list all the value
