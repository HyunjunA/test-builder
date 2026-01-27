// compound-interest.js
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);

  function formatCurrency(n) {
    return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function calculate() {
    const P = parseFloat($('principal').value) || 0;
    const r = (parseFloat($('rate').value) || 0) / 100;
    const t = parseInt($('years').value, 10) || 0;
    const pmt = parseFloat($('monthlyContrib').value) || 0;
    const n = parseInt($('compoundFreq').value, 10);

    const periodsPerYear = n;
    const totalPeriods = periodsPerYear * t;
    const ratePerPeriod = r / periodsPerYear;
    const monthsPerPeriod = 12 / periodsPerYear;

    // Build year-by-year data
    let balance = P;
    let totalContrib = P;
    const yearData = [];

    for (let year = 1; year <= t; year++) {
      const startBalance = balance;
      const startContrib = totalContrib;
      for (let p = 0; p < periodsPerYear; p++) {
        balance = balance * (1 + ratePerPeriod) + pmt * monthsPerPeriod;
        totalContrib += pmt * monthsPerPeriod;
      }
      yearData.push({
        year: year,
        contributions: totalContrib,
        interest: balance - totalContrib,
        balance: balance
      });
    }

    const futureValue = balance;
    const totalInterest = balance - totalContrib;

    // Show results
    $('results').style.display = 'grid';
    $('futureValue').textContent = formatCurrency(futureValue);
    $('totalContributions').textContent = formatCurrency(totalContrib);
    $('totalInterest').textContent = formatCurrency(totalInterest);

    // Build table
    const tbody = $('breakdownTable').querySelector('tbody');
    tbody.innerHTML = '';
    yearData.forEach(function (d) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td>' + d.year + '</td>' +
        '<td>' + formatCurrency(d.contributions) + '</td>' +
        '<td>' + formatCurrency(d.interest) + '</td>' +
        '<td>' + formatCurrency(d.balance) + '</td>';
      tbody.appendChild(tr);
    });
    $('tableContainer').style.display = 'block';

    // Draw chart
    drawChart(yearData);
  }

  function drawChart(yearData) {
    const container = $('chartContainer');
    container.style.display = 'block';
    const canvas = $('growthChart');
    const ctx = canvas.getContext('2d');

    // Responsive sizing
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 350 * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = '350px';
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = 350;
    const pad = { top: 30, right: 20, bottom: 40, left: 70 };
    const plotW = W - pad.left - pad.right;
    const plotH = H - pad.top - pad.bottom;

    const maxVal = yearData.length ? yearData[yearData.length - 1].balance : 0;
    const yMax = Math.ceil(maxVal / 1000) * 1000 || 1000;

    requestAnimationFrame(function () {
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 5; i++) {
        const y = pad.top + plotH - (plotH * i / 5);
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(pad.left + plotW, y);
        ctx.stroke();

        ctx.fillStyle = '#666';
        ctx.font = '11px Poppins, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('$' + (yMax * i / 5).toLocaleString('en-US', { maximumFractionDigits: 0 }), pad.left - 8, y + 4);
      }

      // X-axis labels
      ctx.textAlign = 'center';
      const step = Math.max(1, Math.floor(yearData.length / 10));
      yearData.forEach(function (d, idx) {
        if (idx % step === 0 || idx === yearData.length - 1) {
          const x = pad.left + (plotW * idx / (yearData.length - 1 || 1));
          ctx.fillText('Yr ' + d.year, x, H - pad.bottom + 20);
        }
      });

      // Contributions area
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top + plotH);
      yearData.forEach(function (d, idx) {
        const x = pad.left + (plotW * idx / (yearData.length - 1 || 1));
        const y = pad.top + plotH - (plotH * d.contributions / yMax);
        ctx.lineTo(x, y);
      });
      ctx.lineTo(pad.left + plotW, pad.top + plotH);
      ctx.closePath();
      ctx.fillStyle = 'rgba(102, 126, 234, 0.25)';
      ctx.fill();

      // Balance area
      ctx.beginPath();
      ctx.moveTo(pad.left, pad.top + plotH);
      yearData.forEach(function (d, idx) {
        const x = pad.left + (plotW * idx / (yearData.length - 1 || 1));
        const y = pad.top + plotH - (plotH * d.balance / yMax);
        ctx.lineTo(x, y);
      });
      ctx.lineTo(pad.left + plotW, pad.top + plotH);
      ctx.closePath();
      ctx.fillStyle = 'rgba(118, 75, 162, 0.25)';
      ctx.fill();

      // Balance line
      ctx.beginPath();
      ctx.strokeStyle = '#764ba2';
      ctx.lineWidth = 2.5;
      yearData.forEach(function (d, idx) {
        const x = pad.left + (plotW * idx / (yearData.length - 1 || 1));
        const y = pad.top + plotH - (plotH * d.balance / yMax);
        if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Contributions line
      ctx.beginPath();
      ctx.strokeStyle = '#667eea';
      ctx.lineWidth = 2;
      yearData.forEach(function (d, idx) {
        const x = pad.left + (plotW * idx / (yearData.length - 1 || 1));
        const y = pad.top + plotH - (plotH * d.contributions / yMax);
        if (idx === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Legend
      ctx.fillStyle = '#764ba2';
      ctx.fillRect(pad.left + 10, pad.top + 5, 14, 10);
      ctx.fillStyle = '#333';
      ctx.font = '12px Poppins, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Total Balance', pad.left + 30, pad.top + 14);

      ctx.fillStyle = '#667eea';
      ctx.fillRect(pad.left + 140, pad.top + 5, 14, 10);
      ctx.fillStyle = '#333';
      ctx.fillText('Contributions', pad.left + 160, pad.top + 14);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    $('calculateBtn').addEventListener('click', calculate);
    calculate();
  });
})();
