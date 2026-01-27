(function () {
  'use strict';

  const input = document.getElementById('jsonInput');
  const output = document.getElementById('jsonOutput');
  const errorDisplay = document.getElementById('errorDisplay');
  const btnFormat = document.getElementById('btnFormat');
  const btnMinify = document.getElementById('btnMinify');
  const btnClear = document.getElementById('btnClear');
  const btnCopy = document.getElementById('btnCopy');

  function clearError() {
    errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';
  }

  function showError(msg) {
    errorDisplay.style.display = 'block';
    errorDisplay.textContent = msg;
    output.innerHTML = '';
  }

  function parseInput() {
    clearError();
    const raw = input.value.trim();
    if (!raw) {
      showError('Please paste some JSON into the input area.');
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      // Try to extract line/column info from the error message
      const match = e.message.match(/position\s+(\d+)/i);
      if (match) {
        const pos = parseInt(match[1], 10);
        const lines = raw.substring(0, pos).split('\n');
        const line = lines.length;
        const col = lines[lines.length - 1].length + 1;
        showError('Invalid JSON: ' + e.message + ' (line ' + line + ', column ' + col + ')');
      } else {
        showError('Invalid JSON: ' + e.message);
      }
      return null;
    }
  }

  function syntaxHighlight(json) {
    if (typeof json !== 'string') {
      json = JSON.stringify(json, null, 2);
    }
    // Escape HTML
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Wrap tokens in spans
    return json.replace(
      /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        var cls = 'json-number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'json-key';
          } else {
            cls = 'json-string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'json-boolean';
        } else if (/null/.test(match)) {
          cls = 'json-null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      }
    );
  }

  btnFormat.addEventListener('click', function () {
    var parsed = parseInput();
    if (parsed !== null) {
      var formatted = JSON.stringify(parsed, null, 2);
      output.innerHTML = syntaxHighlight(formatted);
    }
  });

  btnMinify.addEventListener('click', function () {
    var parsed = parseInput();
    if (parsed !== null) {
      var minified = JSON.stringify(parsed);
      output.innerHTML = syntaxHighlight(minified);
    }
  });

  btnClear.addEventListener('click', function () {
    input.value = '';
    output.innerHTML = '';
    clearError();
  });

  btnCopy.addEventListener('click', function () {
    var text = output.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      var orig = btnCopy.textContent;
      btnCopy.textContent = 'Copied!';
      setTimeout(function () { btnCopy.textContent = orig; }, 1500);
    });
  });
})();
