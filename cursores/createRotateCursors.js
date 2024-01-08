const { readFileSync, writeFileSync } = require("fs");

const svg = readFileSync("./base_cursor.svg", "utf8");
const startIndex = svg.indexOf("<svg") + 4;
const startSVG = svg.slice(0, startIndex);
const endSVG = svg.slice(startIndex);
for (let i = 0; i < 360; i++) {
  const rotatedSVG = `${startSVG} transform="rotate(${i-75})" ${endSVG}`;
  writeFileSync(`${i}.svg`, rotatedSVG)
}
