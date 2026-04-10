const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { InlineMath } = require('react-katex');

const el = React.createElement(InlineMath, {
  math: "\\text{對邊}",
  settings: { strict: false }
});

console.log(ReactDOMServer.renderToString(el));
