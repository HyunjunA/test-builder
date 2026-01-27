(function () {
  'use strict';

  var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var NUMBERS = '0123456789';
  var SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  var slider = document.getElementById('pwLength');
  var lengthVal = document.getElementById('pwLengthVal');
  var optUpper = document.getElementById('optUpper');
  var optLower = document.getElementById('optLower');
  var optNumbers = document.getElementById('optNumbers');
  var optSymbols = document.getElementById('optSymbols');
  var result = document.getElementById('pwResult');
  var btnCopy = document.getElementById('btnCopyPw');
  var strengthBar = document.getElementById('strengthBar');
  var strengthLabel = document.getElementById('strengthLabel');

  function getCharset() {
    var cs = '';
    if (optUpper.checked) cs += UPPER;
    if (optLower.checked) cs += LOWER;
    if (optNumbers.checked) cs += NUMBERS;
    if (optSymbols.checked) cs += SYMBOLS;
    return cs;
  }

  function secureRandom(max) {
    var arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % max;
  }

  function generate() {
    var charset = getCharset();
    if (!charset) {
      result.value = '';
      strengthBar.style.width = '0';
      strengthLabel.textContent = 'Select at least one character set';
      strengthLabel.style.color = '#e74c3c';
      return;
    }
    var len = parseInt(slider.value, 10);
    var pw = '';
    for (var i = 0; i < len; i++) {
      pw += charset[secureRandom(charset.length)];
    }
    result.value = pw;
    updateStrength(len, charset.length);
  }

  function updateStrength(len, charsetSize) {
    var entropy = len * Math.log2(charsetSize);
    var pct, color, label;
    if (entropy < 40) {
      pct = 20; color = '#e74c3c'; label = 'Weak';
    } else if (entropy < 60) {
      pct = 40; color = '#f39c12'; label = 'Fair';
    } else if (entropy < 80) {
      pct = 65; color = '#f1c40f'; label = 'Strong';
    } else {
      pct = 100; color = '#27ae60'; label = 'Very Strong';
    }
    strengthBar.style.width = pct + '%';
    strengthBar.style.background = color;
    strengthLabel.textContent = label + ' (' + Math.round(entropy) + ' bits of entropy)';
    strengthLabel.style.color = color;
  }

  slider.addEventListener('input', function () {
    lengthVal.textContent = slider.value;
    generate();
  });

  [optUpper, optLower, optNumbers, optSymbols].forEach(function (cb) {
    cb.addEventListener('change', generate);
  });

  btnCopy.addEventListener('click', function () {
    var text = result.value;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      var orig = btnCopy.textContent;
      btnCopy.textContent = 'Copied!';
      setTimeout(function () { btnCopy.textContent = orig; }, 1500);
    });
  });

  // Generate on load
  generate();
})();
