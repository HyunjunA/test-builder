document.addEventListener('DOMContentLoaded', () => {
  const colorPicker = document.getElementById('colorPicker');
  const hexInput = document.getElementById('hexInput');
  const paletteOutput = document.getElementById('paletteOutput');
  const copyMsg = document.getElementById('copyMsg');
  const buttons = document.querySelectorAll('[data-type]');

  let currentType = 'complementary';

  // Sync color picker and hex input
  colorPicker.addEventListener('input', () => {
    hexInput.value = colorPicker.value;
    generate();
  });

  hexInput.addEventListener('input', () => {
    const val = hexInput.value;
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      colorPicker.value = val;
      generate();
    }
  });

  // Palette type buttons
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentType = btn.dataset.type;
      buttons.forEach(b => {
        b.className = b === btn ? 'tool-btn' : 'tool-btn-secondary';
      });
      generate();
    });
  });

  function generate() {
    const hex = colorPicker.value;
    const hsl = hexToHSL(hex);
    let colors = [];

    switch (currentType) {
      case 'complementary':
        colors = [
          hsl,
          { h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l }
        ];
        break;
      case 'analogous':
        colors = [
          { h: (hsl.h - 30 + 360) % 360, s: hsl.s, l: hsl.l },
          hsl,
          { h: (hsl.h + 30) % 360, s: hsl.s, l: hsl.l }
        ];
        break;
      case 'triadic':
        colors = [
          hsl,
          { h: (hsl.h + 120) % 360, s: hsl.s, l: hsl.l },
          { h: (hsl.h + 240) % 360, s: hsl.s, l: hsl.l }
        ];
        break;
      case 'split':
        colors = [
          hsl,
          { h: (hsl.h + 150) % 360, s: hsl.s, l: hsl.l },
          { h: (hsl.h + 210) % 360, s: hsl.s, l: hsl.l }
        ];
        break;
      case 'mono':
        colors = [
          { h: hsl.h, s: hsl.s, l: Math.min(95, hsl.l + 30) },
          { h: hsl.h, s: hsl.s, l: Math.min(85, hsl.l + 15) },
          hsl,
          { h: hsl.h, s: hsl.s, l: Math.max(15, hsl.l - 15) },
          { h: hsl.h, s: hsl.s, l: Math.max(5, hsl.l - 30) }
        ];
        break;
    }

    renderPalette(colors);
  }

  function renderPalette(colors) {
    paletteOutput.innerHTML = '';
    colors.forEach(c => {
      const hex = hslToHex(c.h, c.s, c.l);
      const swatch = document.createElement('div');
      swatch.style.display = 'flex';
      swatch.style.flexDirection = 'column';
      swatch.style.alignItems = 'center';
      swatch.style.gap = '6px';
      swatch.style.cursor = 'pointer';

      const colorDiv = document.createElement('div');
      colorDiv.className = 'color-swatch';
      colorDiv.style.backgroundColor = hex;
      colorDiv.style.width = '80px';
      colorDiv.style.height = '80px';

      const label = document.createElement('span');
      label.textContent = hex;
      label.style.fontSize = '0.75rem';
      label.style.fontWeight = '600';
      label.style.color = 'var(--text-secondary)';
      label.style.fontFamily = "'Courier New', monospace";

      swatch.appendChild(colorDiv);
      swatch.appendChild(label);
      swatch.addEventListener('click', () => {
        navigator.clipboard.writeText(hex).then(() => {
          copyMsg.textContent = 'Copied ' + hex + ' to clipboard!';
          setTimeout(() => { copyMsg.textContent = ''; }, 2000);
        });
      });
      paletteOutput.appendChild(swatch);
    });
  }

  // --- Color conversion utilities ---

  function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return '#' + f(0) + f(8) + f(4);
  }

  // Initial generation
  generate();
});
