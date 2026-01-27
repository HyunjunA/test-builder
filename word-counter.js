document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const statWords = document.getElementById('statWords');
  const statChars = document.getElementById('statChars');
  const statCharsNoSpace = document.getElementById('statCharsNoSpace');
  const statSentences = document.getElementById('statSentences');
  const statParagraphs = document.getElementById('statParagraphs');
  const statReadTime = document.getElementById('statReadTime');
  const statSpeakTime = document.getElementById('statSpeakTime');

  function update() {
    const text = textInput.value;

    // Characters
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;

    // Words
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).filter(w => w.length > 0).length;

    // Sentences: split by . ! ? and filter empty
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    // Paragraphs: split by double newline
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

    // Reading time (200 wpm)
    const readMin = Math.ceil(words / 200);

    // Speaking time (130 wpm)
    const speakMin = Math.ceil(words / 130);

    statWords.textContent = words;
    statChars.textContent = chars;
    statCharsNoSpace.textContent = charsNoSpace;
    statSentences.textContent = sentences;
    statParagraphs.textContent = paragraphs;
    statReadTime.textContent = readMin + ' min';
    statSpeakTime.textContent = speakMin + ' min';
  }

  textInput.addEventListener('input', update);
  update();
});
