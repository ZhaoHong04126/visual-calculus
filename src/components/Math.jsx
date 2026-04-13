import React, { useMemo } from 'react';
import katex from 'katex';

export const InlineMath = ({ math, children, errorColor, renderError }) => {
  const formula = math ?? children;
  const { html, error } = useMemo(() => {
    try {
      return { html: katex.renderToString(formula, { displayMode: false, errorColor, throwOnError: !!renderError, strict: false }) };
    } catch (e) {
      if (e instanceof katex.ParseError || e instanceof TypeError) return { error: e };
      throw e;
    }
  }, [formula, errorColor, renderError]);

  if (error) return renderError ? renderError(error) : <span dangerouslySetInnerHTML={{ __html: error.message }} />;
  return <span data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />;
};

export const BlockMath = ({ math, children, errorColor, renderError }) => {
  const formula = math ?? children;
  const { html, error } = useMemo(() => {
    try {
      return { html: katex.renderToString(formula, { displayMode: true, errorColor, throwOnError: !!renderError, strict: false }) };
    } catch (e) {
      if (e instanceof katex.ParseError || e instanceof TypeError) return { error: e };
      throw e;
    }
  }, [formula, errorColor, renderError]);

  if (error) return renderError ? renderError(error) : <div dangerouslySetInnerHTML={{ __html: error.message }} />;
  return (
    <div
      data-testid="react-katex"
      style={{ overflowX: 'auto', maxWidth: '100%' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
