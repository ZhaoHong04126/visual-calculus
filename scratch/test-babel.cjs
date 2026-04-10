const parser = require("@babel/parser");
const code1 = "const el1 = <BlockMath math=\"\\text{hi}\" />;";
const code2 = "const el2 = <BlockMath math=\"\\\\text{hi}\" />;";
const ast1 = parser.parse(code1, { plugins: ["jsx"] });
const ast2 = parser.parse(code2, { plugins: ["jsx"] });
console.log("math value (\\text):", JSON.stringify(ast1.program.body[0].declarations[0].init.openingElement.attributes[0].value.value));
console.log("math value (\\\\text):", JSON.stringify(ast2.program.body[0].declarations[0].init.openingElement.attributes[0].value.value));
