import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import katex from 'katex';
import 'katex/dist/katex.min.css';

// 全域覆寫 KaTeX 的配置，強制關閉嚴格模式，避免對中文產生大量無害警告
const originalRenderToString = katex.renderToString;
katex.renderToString = function(math, options) {
  return originalRenderToString(math, { ...options, strict: false });
};
const originalRender = katex.render;
katex.render = function(math, element, options) {
  return originalRender(math, element, { ...options, strict: false });
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);