document.addEventListener('DOMContentLoaded', () => {
    const maxNumberInput = document.getElementById('maxNumber');
    const drawCountInput = document.getElementById('drawCount');
    const drawButton = document.getElementById('drawButton');
    const resultDiv = document.getElementById('result');

    drawButton.addEventListener('click', () => {
        const maxNumber = parseInt(maxNumberInput.value, 10);
        const drawCount = parseInt(drawCountInput.value, 10);

        if (isNaN(maxNumber) || isNaN(drawCount) || maxNumber <= 0 || drawCount <= 0) {
            alert('최대 번호와 추첨 개수는 양의 정수여야 합니다.');
            return;
        }

        if (maxNumber < drawCount) {
            alert('최대 번호는 추첨 개수보다 크거나 같아야 합니다.');
            return;
        }

        const numbers = [];
        const uniqueNumbers = new Set();

        while (uniqueNumbers.size < drawCount) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            uniqueNumbers.add(randomNumber);
        }

        numbers.push(...uniqueNumbers);
        numbers.sort((a, b) => a - b);

        resultDiv.innerHTML = ''; // Clear previous results
        numbers.forEach(number => {
            const span = document.createElement('span');
            span.textContent = number;
            span.style.margin = '5px'; // Basic styling, could be moved to CSS
            span.style.padding = '8px';
            span.style.border = '1px solid #ccc';
            span.style.borderRadius = '50%';
            span.style.display = 'inline-block';
            span.style.minWidth = '30px';
            span.style.textAlign = 'center';
            span.style.backgroundColor = '#f0f0f0';
            resultDiv.appendChild(span);
        });
    });
});