const parser=require('@babel/parser');
const ast=parser.parse('const a = <div math="x \\neq y" />;', {plugins:['jsx']});
console.log(JSON.stringify(ast.program.body[0].declarations[0].init.openingElement.attributes[0].value.value));
