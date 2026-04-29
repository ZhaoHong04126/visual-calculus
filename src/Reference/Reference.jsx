import React from 'react';
import OperationsRules from './OperationsRules';
import Theorems from './Theorems';
import FormulaTable from './FormulaTable';
import BasicCalculusFormulas from './BasicCalculusFormulas';
import AdvancedFormulas from './AdvancedFormulas';
import QuestionBank from './QuestionBank';

export default function Reference() {
  return (
    <div className="chapter-content">
      <h1 className="topic-title">第九章：公式表 / 題庫</h1>
      <p className="topic-description mb-8 text-gray-700">
        本章收錄微積分常用的公式表以及精選題庫，方便隨時複習與查閱。
      </p>

      <div id="operations"><OperationsRules /></div>
      <div id="theorems"><Theorems /></div>
      <div id="formulas"><FormulaTable /></div>
      <div id="basic-calculus"><BasicCalculusFormulas /></div>
      <div id="advanced-formulas"><AdvancedFormulas /></div>
      <div id="questions"><QuestionBank /></div>

    </div>
  );
}
