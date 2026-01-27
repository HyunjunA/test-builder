document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('category');
  const fromUnit = document.getElementById('fromUnit');
  const toUnit = document.getElementById('toUnit');
  const fromValue = document.getElementById('fromValue');
  const toValue = document.getElementById('toValue');

  // Conversion data: each unit has a factor to convert TO the base unit.
  // To convert: result = value * fromFactor / toFactor
  // Temperature is handled separately.
  const data = {
    Length: {
      base: 'm',
      units: {
        'Millimeter (mm)': 0.001,
        'Centimeter (cm)': 0.01,
        'Meter (m)': 1,
        'Kilometer (km)': 1000,
        'Inch (in)': 0.0254,
        'Foot (ft)': 0.3048,
        'Yard (yd)': 0.9144,
        'Mile (mi)': 1609.344
      }
    },
    Weight: {
      base: 'kg',
      units: {
        'Milligram (mg)': 0.000001,
        'Gram (g)': 0.001,
        'Kilogram (kg)': 1,
        'Pound (lb)': 0.453592,
        'Ounce (oz)': 0.0283495,
        'Ton (t)': 1000
      }
    },
    Temperature: {
      base: 'C',
      units: {
        'Celsius (C)': 'C',
        'Fahrenheit (F)': 'F',
        'Kelvin (K)': 'K'
      }
    },
    Volume: {
      base: 'ml',
      units: {
        'Milliliter (ml)': 1,
        'Liter (L)': 1000,
        'US Gallon (gal)': 3785.41,
        'US Quart (qt)': 946.353,
        'US Cup': 236.588,
        'US Fluid Ounce (fl oz)': 29.5735
      }
    },
    Area: {
      base: 'sq m',
      units: {
        'Square Meter (sq m)': 1,
        'Square Kilometer (sq km)': 1000000,
        'Square Foot (sq ft)': 0.092903,
        'Acre': 4046.86,
        'Hectare (ha)': 10000
      }
    },
    Speed: {
      base: 'm/s',
      units: {
        'Meters/second (m/s)': 1,
        'Kilometers/hour (km/h)': 0.277778,
        'Miles/hour (mph)': 0.44704,
        'Knots (kn)': 0.514444
      }
    },
    Time: {
      base: 's',
      units: {
        'Second (s)': 1,
        'Minute (min)': 60,
        'Hour (hr)': 3600,
        'Day': 86400,
        'Week': 604800,
        'Month (avg)': 2629746,
        'Year (avg)': 31556952
      }
    },
    Data: {
      base: 'B',
      units: {
        'Byte (B)': 1,
        'Kilobyte (KB)': 1024,
        'Megabyte (MB)': 1048576,
        'Gigabyte (GB)': 1073741824,
        'Terabyte (TB)': 1099511627776
      }
    }
  };

  // Populate category dropdown
  Object.keys(data).forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });

  function populateUnits() {
    const cat = categorySelect.value;
    const units = Object.keys(data[cat].units);
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    units.forEach((u, i) => {
      const o1 = document.createElement('option');
      o1.value = u; o1.textContent = u;
      fromUnit.appendChild(o1);
      const o2 = document.createElement('option');
      o2.value = u; o2.textContent = u;
      toUnit.appendChild(o2);
    });
    if (toUnit.options.length > 1) toUnit.selectedIndex = 1;
    convert();
  }

  function convert() {
    const cat = categorySelect.value;
    const val = parseFloat(fromValue.value);
    if (isNaN(val)) { toValue.value = ''; return; }

    if (cat === 'Temperature') {
      toValue.value = convertTemp(val, fromUnit.value, toUnit.value);
    } else {
      const fromFactor = data[cat].units[fromUnit.value];
      const toFactor = data[cat].units[toUnit.value];
      const result = val * fromFactor / toFactor;
      toValue.value = formatNumber(result);
    }
  }

  function convertTemp(val, from, to) {
    // Convert to Celsius first
    let c;
    if (from.includes('Celsius')) c = val;
    else if (from.includes('Fahrenheit')) c = (val - 32) * 5 / 9;
    else c = val - 273.15; // Kelvin

    // Convert from Celsius to target
    let result;
    if (to.includes('Celsius')) result = c;
    else if (to.includes('Fahrenheit')) result = c * 9 / 5 + 32;
    else result = c + 273.15; // Kelvin

    return formatNumber(result);
  }

  function formatNumber(n) {
    if (Number.isInteger(n)) return n.toString();
    // Show up to 6 significant digits
    const s = n.toPrecision(10);
    return parseFloat(s).toString();
  }

  categorySelect.addEventListener('change', populateUnits);
  fromUnit.addEventListener('change', convert);
  toUnit.addEventListener('change', convert);
  fromValue.addEventListener('input', convert);

  populateUnits();
});
