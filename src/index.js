let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapinDiv = (str) => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapinDiv(toLowerCase(trim(input)));
 