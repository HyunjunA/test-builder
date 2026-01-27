// tax-calculator.js
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };

  // 2024 Federal Tax Brackets
  var brackets = {
    single: [
      { min: 0, max: 11600, rate: 0.10 },
      { min: 11600, max: 47150, rate: 0.12 },
      { min: 47150, max: 100525, rate: 0.22 },
      { min: 100525, max: 191950, rate: 0.24 },
      { min: 191950, max: 243725, rate: 0.32 },
      { min: 243725, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 }
    ],
    married: [
      { min: 0, max: 23200, rate: 0.10 },
      { min: 23200, max: 94300, rate: 0.12 },
      { min: 94300, max: 201050, rate: 0.22 },
      { min: 201050, max: 383900, rate: 0.24 },
      { min: 383900, max: 487450, rate: 0.32 },
      { min: 487450, max: 731200, rate: 0.35 },
      { min: 731200, max: Infinity, rate: 0.37 }
    ],
    hoh: [
      { min: 0, max: 16550, rate: 0.10 },
      { min: 16550, max: 63100, rate: 0.12 },
      { min: 63100, max: 100500, rate: 0.22 },
      { min: 100500, max: 191950, rate: 0.24 },
      { min: 191950, max: 243700, rate: 0.32 },
      { min: 243700, max: 609350, rate: 0.35 },
      { min: 609350, max: Infinity, rate: 0.37 }
    ]
  };

  var standardDeductions = {
    single: 14600,
    married: 29200,
    hoh: 21900
  };

  function fmt(n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function fmtBracket(b) {
    if (b.max === Infinity) return fmt(b.min) + '+';
    return fmt(b.min) + ' - ' + fmt(b.max);
  }

  function calculate() {
    var income = parseFloat($('annualIncome').value) || 0;
    var status = $('filingStatus').value;
    var deductions = parseFloat($('deductions').value) || 0;

    var taxableIncome = Math.max(0, income - deductions);
    var statusBrackets = brackets[status];
    var totalTax = 0;
    var breakdown = [];

    for (var i = 0; i < statusBrackets.length; i++) {
      var b = statusBrackets[i];
      if (taxableIncome <= b.min) break;

      var taxable = Math.min(taxableIncome, b.max) - b.min;
      var tax = taxable * b.rate;
      totalTax += tax;

      breakdown.push({
        bracket: b,
        taxable: taxable,
        tax: tax
      });
    }

    var effectiveRate = income > 0 ? (totalTax / income * 100) : 0;
    var takeHome = income - totalTax;

    $('results').style.display = 'grid';
    $('taxableIncome').textContent = fmt(taxableIncome);
    $('federalTax').textContent = fmt(totalTax);
    $('effectiveRate').textContent = effectiveRate.toFixed(2) + '%';
    $('takeHomePay').textContent = fmt(takeHome);

    // Build bracket table
    var tbody = $('bracketTable').querySelector('tbody');
    tbody.innerHTML = '';
    breakdown.forEach(function (d) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + fmtBracket(d.bracket) + '</td>' +
        '<td>' + (d.bracket.rate * 100) + '%</td>' +
        '<td>' + fmt(d.taxable) + '</td>' +
        '<td>' + fmt(d.tax) + '</td>';
      tbody.appendChild(tr);
    });
    $('bracketContainer').style.display = 'block';
  }

  // Update default deduction when filing status changes
  function updateDeduction() {
    var status = $('filingStatus').value;
    $('deductions').value = standardDeductions[status];
  }

  document.addEventListener('DOMContentLoaded', function () {
    $('calculateBtn').addEventListener('click', calculate);
    $('filingStatus').addEventListener('change', function () {
      updateDeduction();
      calculate();
    });
    calculate();
  });
})();
