document.addEventListener('DOMContentLoaded', () => {
    const maxNumberInput = document.getElementById('maxNumber');
    const drawCountInput = document.getElementById('drawCount');
    const drawButton = document.getElementById('drawButton');
    const resultDiv = document.getElementById('result');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const langButton = document.getElementById('langButton');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');

    const SET_COUNT = 10;

    // Translations
    const translations = {
        en: {
            title: "Lotto Number Generator",
            subtitle: "Pick your lucky numbers!",
            maxNumber: "Max Number",
            drawCount: "Numbers to Draw",
            drawButton: "Draw Numbers",
            footer: "© 2024 Lotto Generator | Good Luck! 🍀",
            errorPositive: "Max number and draw count must be positive integers.",
            errorMax: "Max number must be greater than or equal to draw count.",
            code: "EN"
        },
        ko: {
            title: "로또 번호 추첨기",
            subtitle: "행운의 번호를 뽑아보세요!",
            maxNumber: "최대 숫자",
            drawCount: "추첨 개수",
            drawButton: "번호 추첨",
            footer: "© 2024 로또 생성기 | 행운을 빕니다! 🍀",
            errorPositive: "최대 번호와 추첨 개수는 양의 정수여야 합니다.",
            errorMax: "최대 번호는 추첨 개수보다 크거나 같아야 합니다.",
            code: "KO"
        },
        ja: {
            title: "ロト番号ジェネレーター",
            subtitle: "ラッキーナンバーを選ぼう！",
            maxNumber: "最大数",
            drawCount: "抽選数",
            drawButton: "番号を抽選",
            footer: "© 2024 ロトジェネレーター | 幸運を！🍀",
            errorPositive: "最大数と抽選数は正の整数である必要があります。",
            errorMax: "最大数は抽選数以上である必要があります。",
            code: "JA"
        },
        zh: {
            title: "乐透号码生成器",
            subtitle: "选择你的幸运号码！",
            maxNumber: "最大数字",
            drawCount: "抽取数量",
            drawButton: "抽取号码",
            footer: "© 2024 乐透生成器 | 祝你好运！🍀",
            errorPositive: "最大数字和抽取数量必须是正整数。",
            errorMax: "最大数字必须大于或等于抽取数量。",
            code: "ZH"
        },
        es: {
            title: "Generador de Lotería",
            subtitle: "¡Elige tus números de la suerte!",
            maxNumber: "Número Máximo",
            drawCount: "Números a Sortear",
            drawButton: "Sortear Números",
            footer: "© 2024 Generador de Lotería | ¡Buena suerte! 🍀",
            errorPositive: "El número máximo y la cantidad deben ser enteros positivos.",
            errorMax: "El número máximo debe ser mayor o igual a la cantidad a sortear.",
            code: "ES"
        },
        fr: {
            title: "Générateur de Loto",
            subtitle: "Choisissez vos numéros chanceux !",
            maxNumber: "Numéro Maximum",
            drawCount: "Numéros à Tirer",
            drawButton: "Tirer les Numéros",
            footer: "© 2024 Générateur de Loto | Bonne chance ! 🍀",
            errorPositive: "Le numéro maximum et le nombre de tirages doivent être des entiers positifs.",
            errorMax: "Le numéro maximum doit être supérieur ou égal au nombre de tirages.",
            code: "FR"
        },
        de: {
            title: "Lotto-Zahlengenerator",
            subtitle: "Wähle deine Glückszahlen!",
            maxNumber: "Maximale Zahl",
            drawCount: "Anzahl Zahlen",
            drawButton: "Zahlen Ziehen",
            footer: "© 2024 Lotto-Generator | Viel Glück! 🍀",
            errorPositive: "Maximale Zahl und Anzahl müssen positive ganze Zahlen sein.",
            errorMax: "Die maximale Zahl muss größer oder gleich der Anzahl sein.",
            code: "DE"
        },
        pt: {
            title: "Gerador de Loteria",
            subtitle: "Escolha seus números da sorte!",
            maxNumber: "Número Máximo",
            drawCount: "Números a Sortear",
            drawButton: "Sortear Números",
            footer: "© 2024 Gerador de Loteria | Boa sorte! 🍀",
            errorPositive: "O número máximo e a quantidade devem ser inteiros positivos.",
            errorMax: "O número máximo deve ser maior ou igual à quantidade a sortear.",
            code: "PT"
        },
        ru: {
            title: "Генератор Лотереи",
            subtitle: "Выберите свои счастливые номера!",
            maxNumber: "Макс. Число",
            drawCount: "Кол-во Номеров",
            drawButton: "Выбрать Номера",
            footer: "© 2024 Генератор Лотереи | Удачи! 🍀",
            errorPositive: "Максимальное число и количество должны быть положительными целыми числами.",
            errorMax: "Максимальное число должно быть больше или равно количеству.",
            code: "RU"
        },
        ar: {
            title: "مولد أرقام اليانصيب",
            subtitle: "!اختر أرقامك المحظوظة",
            maxNumber: "الحد الأقصى",
            drawCount: "عدد الأرقام",
            drawButton: "سحب الأرقام",
            footer: "🍀 !© 2024 مولد اليانصيب | حظاً سعيداً",
            errorPositive: ".يجب أن يكون الحد الأقصى وعدد الأرقام أعداداً صحيحة موجبة",
            errorMax: ".يجب أن يكون الحد الأقصى أكبر من أو يساوي عدد الأرقام",
            code: "AR"
        },
        hi: {
            title: "लॉटरी नंबर जनरेटर",
            subtitle: "अपने भाग्यशाली नंबर चुनें!",
            maxNumber: "अधिकतम संख्या",
            drawCount: "नंबरों की संख्या",
            drawButton: "नंबर निकालें",
            footer: "© 2024 लॉटरी जनरेटर | शुभकामनाएं! 🍀",
            errorPositive: "अधिकतम संख्या और गिनती धनात्मक पूर्णांक होनी चाहिए।",
            errorMax: "अधिकतम संख्या गिनती से अधिक या बराबर होनी चाहिए।",
            code: "HI"
        },
        th: {
            title: "เครื่องสุ่มเลขล็อตโต้",
            subtitle: "เลือกเลขนำโชคของคุณ!",
            maxNumber: "ตัวเลขสูงสุด",
            drawCount: "จำนวนที่สุ่ม",
            drawButton: "สุ่มตัวเลข",
            footer: "© 2024 Lotto Generator | โชคดี! 🍀",
            errorPositive: "ตัวเลขสูงสุดและจำนวนต้องเป็นจำนวนเต็มบวก",
            errorMax: "ตัวเลขสูงสุดต้องมากกว่าหรือเท่ากับจำนวนที่สุ่ม",
            code: "TH"
        },
        vi: {
            title: "Máy Tạo Số Lotto",
            subtitle: "Chọn số may mắn của bạn!",
            maxNumber: "Số Tối Đa",
            drawCount: "Số Lượng",
            drawButton: "Quay Số",
            footer: "© 2024 Lotto Generator | Chúc may mắn! 🍀",
            errorPositive: "Số tối đa và số lượng phải là số nguyên dương.",
            errorMax: "Số tối đa phải lớn hơn hoặc bằng số lượng.",
            code: "VI"
        },
        it: {
            title: "Generatore Lotto",
            subtitle: "Scegli i tuoi numeri fortunati!",
            maxNumber: "Numero Massimo",
            drawCount: "Numeri da Estrarre",
            drawButton: "Estrai Numeri",
            footer: "© 2024 Generatore Lotto | Buona fortuna! 🍀",
            errorPositive: "Il numero massimo e la quantità devono essere interi positivi.",
            errorMax: "Il numero massimo deve essere maggiore o uguale alla quantità.",
            code: "IT"
        }
    };

    let currentLang = 'en';

    // Theme Management
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    // Language Management
    function initLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
    }

    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });

        currentLangSpan.textContent = t.code;
        document.documentElement.lang = lang;
        document.title = t.title;

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });

        localStorage.setItem('language', lang);
    }

    function toggleDropdown() {
        langButton.classList.toggle('active');
        langDropdown.classList.toggle('show');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
            langButton.classList.remove('active');
            langDropdown.classList.remove('show');
        }
    });

    // Ball color based on number
    function getBallColor(number) {
        if (number <= 10) return 'ball-yellow';
        if (number <= 20) return 'ball-blue';
        if (number <= 30) return 'ball-red';
        if (number <= 40) return 'ball-gray';
        return 'ball-green';
    }

    // Generate lotto set
    function generateLottoSet(maxNumber, drawCount) {
        const uniqueNumbers = new Set();
        while (uniqueNumbers.size < drawCount) {
            const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
            uniqueNumbers.add(randomNumber);
        }
        return [...uniqueNumbers].sort((a, b) => a - b);
    }

    // Create lotto set element
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

    // Event Listeners
    initTheme();
    initLanguage();

    themeToggle.addEventListener('click', toggleTheme);
    langButton.addEventListener('click', toggleDropdown);

    langDropdown.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.dataset.lang);
            toggleDropdown();
        });
    });

    drawButton.addEventListener('click', () => {
        const maxNumber = parseInt(maxNumberInput.value, 10);
        const drawCount = parseInt(drawCountInput.value, 10);
        const t = translations[currentLang];

        if (isNaN(maxNumber) || isNaN(drawCount) || maxNumber <= 0 || drawCount <= 0) {
            alert(t.errorPositive);
            return;
        }

        if (maxNumber < drawCount) {
            alert(t.errorMax);
            return;
        }

        resultDiv.innerHTML = '';

        for (let i = 0; i < SET_COUNT; i++) {
            const numbers = generateLottoSet(maxNumber, drawCount);
            const setElement = createLottoSetElement(numbers, i);
            resultDiv.appendChild(setElement);
        }
    });
});
