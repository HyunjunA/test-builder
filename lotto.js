document.addEventListener('DOMContentLoaded', () => {
    const maxNumberInput = document.getElementById('maxNumber');
    const drawCountInput = document.getElementById('drawCount');
    const drawButton = document.getElementById('drawButton');
    const resultDiv = document.getElementById('result');

    const SET_COUNT = 10; // 한번에 생성할 세트 수

    // 번호에 따른 공 색상 반환
    function getBallColor(number) {
        if (number <= 10) return 'ball-yellow';
        if (number <= 20) return 'ball-blue';
        if (number <= 30) return 'ball-red';
        if (number <= 40) return 'ball-gray';
        return 'ball-green';
    }

    // 하나의 로또 세트 생성
    function generateLottoSet(maxNumber, drawCount) {
        const uniqueNumbers = new Set();

        while (uniqueNumbers.size < drawCount) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            uniqueNumbers.add(randomNumber);
        }

        return [...uniqueNumbers].sort((a, b) => a - b);
    }

    // 로또 세트 DOM 생성
    function createLottoSetElement(numbers, setIndex) {
        const setDiv = document.createElement('div');
        setDiv.className = 'lotto-set';
        setDiv.style.animationDelay = `${setIndex * 0.1}s`;

        const setNumber = document.createElement('div');
        setNumber.className = 'set-number';
        setNumber.textContent = setIndex + 1;
        setDiv.appendChild(setNumber);

        const numbersContainer = document.createElement('div');
        numbersContainer.className = 'numbers-container';

        numbers.forEach(number => {
            const ball = document.createElement('span');
            ball.className = `lotto-ball ${getBallColor(number)}`;
            ball.textContent = number;
            numbersContainer.appendChild(ball);
        });

        setDiv.appendChild(numbersContainer);
        return setDiv;
    }

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

        // 결과 초기화
        resultDiv.innerHTML = '';

        // 10개의 세트 생성
        for (let i = 0; i < SET_COUNT; i++) {
            const numbers = generateLottoSet(maxNumber, drawCount);
            const setElement = createLottoSetElement(numbers, i);
            resultDiv.appendChild(setElement);
        }
    });
});
