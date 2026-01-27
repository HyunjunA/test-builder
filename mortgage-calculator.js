// mortgage-calculator.js
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };

  function fmt(n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function calculate() {
    var homePrice = parseFloat($('homePrice').value) || 0;
    var downPayment = parseFloat($('downPayment').value) || 0;
    var annualRate = (parseFloat($('interestRate').value) || 0) / 100;
    var termYears = parseInt($('loanTerm').value, 10);

    var principal = homePrice - downPayment;
    if (principal <= 0) { return; }

    var monthlyRate = annualRate / 12;
    var numPayments = termYears * 12;

    var monthlyPayment;
    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments;
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    var totalPayment = monthlyPayment * numPayments;
    var totalInterest = totalPayment - principal;

    $('results').style.display = 'grid';
    $('monthlyPayment').textContent = fmt(monthlyPayment);
    $('totalPayment').textContent = fmt(totalPayment);
    $('totalInterest').textContent = fmt(totalInterest);

    // Build amortization schedule
    var balance = principal;
    var monthlyTbody = $('monthlyTable').querySelector('tbody');
    var yearlyTbody = $('yearlyTable').querySelector('tbody');
    monthlyTbody.innerHTML = '';
    yearlyTbody.innerHTML = '';

    var yearPrincipal = 0;
    var yearInterest = 0;

    for (var m = 1; m <= numPayments; m++) {
      var intPayment = balance * monthlyRate;
      var prinPayment = monthlyPayment - intPayment;
      balance = Math.max(0, balance - prinPayment);

      yearPrincipal += prinPayment;
      yearInterest += intPayment;

      // Show first 12 months
      if (m <= 12) {
        var tr = document.createElement('tr');
        tr.innerHTML =
          '<td>' + m + '</td>' +
          '<td>' + fmt(monthlyPayment) + '</td>' +
          '<td>' + fmt(prinPayment) + '</td>' +
          '<td>' + fmt(intPayment) + '</td>' +
          '<td>' + fmt(balance) + '</td>';
        monthlyTbody.appendChild(tr);
      }

      // Yearly summary
      if (m % 12 === 0) {
        var yr = document.createElement('tr');
        yr.innerHTML =
          '<td>' + (m / 12) + '</td>' +
          '<td>' + fmt(yearPrincipal) + '</td>' +
          '<td>' + fmt(yearInterest) + '</td>' +
          '<td>' + fmt(balance) + '</td>';
        yearlyTbody.appendChild(yr);
        yearPrincipal = 0;
        yearInterest = 0;
      }
    }

    $('amortContainer').style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function () {
    $('calculateBtn').addEventListener('click', calculate);
    calculate();
  });
})();
