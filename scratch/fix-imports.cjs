const fs = require('fs');
const path = require('path');
function w(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) w(p);
    else if (p.endsWith('.jsx') && p.replace(/\\/g, '/') !== 'src/components/Math.jsx') {
      let c = fs.readFileSync(p, 'utf8');
      if (c.includes('react-katex')) {
        let relPath = path.relative(path.dirname(p), 'src/components/Math').replace(/\\/g, '/');
        if (!relPath.startsWith('.')) relPath = './' + relPath;
        c = c.replace(/from\s+['"]react-katex['"]/g, `from '${relPath}'`);
        fs.writeFileSync(p, c);
        console.log('Fixed imports in', p);
      }
    }
  }
}
w('src');
