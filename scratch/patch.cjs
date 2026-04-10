const fs = require('fs');
const path = require('path');
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) walk(fp);
    else if (fp.endsWith('.jsx')) {
      let c = fs.readFileSync(fp, 'utf8');
      
      let modified = false;

      if (c.includes('\\\\text')) {
        c = c.replace(/\\\\text/g, '\\text');
        modified = true;
      }
      
      if (c.includes('<InlineMath ') && !c.includes('<InlineMath settings')) {
        c = c.replace(/<InlineMath /g, '<InlineMath settings={{ strict: false }} ');
        modified = true;
      }

      if (c.includes('<BlockMath ') && !c.includes('<BlockMath settings')) {
        c = c.replace(/<BlockMath /g, '<BlockMath settings={{ strict: false }} ');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fp, c);
        console.log('Fixed', fp);
      }
    }
  }
}
walk('src');
