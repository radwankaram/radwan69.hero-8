







// // التأكد من دعم المتصفح لتحويل الصوت إلى نص
// if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
//     alert('Your browser does not support Speech Recognition. Please use Google Chrome.');
// }

// // تحديد العناصر
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const saveBtn = document.getElementById('saveBtn');
// const transcriptionContainer = document.getElementById('transcriptionContainer');
// const savedTranscriptions = document.getElementById('savedTranscriptions');
// const languageSelect = document.getElementById('languageSelect');
// const title = document.getElementById('title');

// let recognition;
// let isRecording = false;
// let currentTranscription = "";
// let finalTranscription = "";

// // تهيئة تحويل الصوت إلى نص
// function initializeRecognition() {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     recognition = new SpeechRecognition();
//     recognition.continuous = true;  // السماح بتدفق النص بشكل مستمر
//     recognition.interimResults = true;  // عرض النتائج المؤقتة
//     recognition.lang = languageSelect.value === 'ar' ? 'ar-SA' : 'en-US';

//     recognition.onresult = (event) => {
//         currentTranscription = ''; // لتجميع النص المؤقت

//         for (let i = event.resultIndex; i < event.results.length; i++) {
//             const transcript = event.results[i][0].transcript;
//             if (event.results[i].isFinal) {
//                 finalTranscription += transcript + ' ';
//             } else {
//                 currentTranscription += transcript + ' ';
//             }
//         }

//         transcriptionContainer.innerText = finalTranscription + currentTranscription; // عرض النص النهائي والمؤقت معًا
//     };

//     recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//     };

//     recognition.onend = () => {
//         if (isRecording) recognition.start();
//     };
// }

// // بدء التسجيل
// startBtn.addEventListener('click', () => {
//     initializeRecognition();
//     recognition.start();
//     isRecording = true;
//     startBtn.disabled = true;
//     stopBtn.disabled = false;
//     saveBtn.disabled = true;
//     finalTranscription = ''; // إعادة تعيين النص النهائي
//     transcriptionContainer.innerText = ''; // إعادة تعيين حاوية النص
// });

// // إيقاف التسجيل
// stopBtn.addEventListener('click', () => {
//     recognition.stop();
//     isRecording = false;
//     startBtn.disabled = false;
//     stopBtn.disabled = true;
//     saveBtn.disabled = false;
// });

// // حفظ النص المحول
// saveBtn.addEventListener('click', () => {
//     if (finalTranscription.trim() !== "") {
//         const li = document.createElement('li');
//         li.textContent = finalTranscription;

//         // زر النسخ
//         const copyBtn = document.createElement('button');
//         copyBtn.textContent = 'Copy';
//         copyBtn.classList.add('copy-btn');
//         copyBtn.addEventListener('click', () => {
//             navigator.clipboard.writeText(finalTranscription);
//             alert('Text copied to clipboard!');
//         });

//         li.appendChild(copyBtn);
//         savedTranscriptions.appendChild(li);
//         transcriptionContainer.innerText = '';
//         finalTranscription = '';
//         saveBtn.disabled = true;
//     }
// });

// // تغيير اللغة
// languageSelect.addEventListener('change', () => {
//     const lang = languageSelect.value;
//     if (lang === 'ar') {
//         title.innerText = 'تحويل الصوت إلى نص';
//         startBtn.innerText = 'ابدأ';
//         stopBtn.innerText = 'إيقاف';
//         saveBtn.innerText = 'حفظ';
//     } else {
//         title.innerText = 'Speech to Text Converter';
//         startBtn.innerText = 'Start';
//         stopBtn.innerText = 'Stop';
//         saveBtn.innerText = 'Save';
//     }
//     if (recognition) {
//         recognition.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
//     }
// });














function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const useNumbers = document.getElementById('numbers').checked;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useSymbols = document.getElementById('symbols').checked;

    if (!useNumbers && !useUppercase && !useLowercase && !useSymbols) {
        alert('يجب تحديد نوع واحد على الأقل من الأحرف!');
        return;
    }

    const numbers = "0123456789";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/";

    let charset = "";
    if (useNumbers) charset += numbers;
    if (useUppercase) charset += uppercase;
    if (useLowercase) charset += lowercase;
    if (useSymbols) charset += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('تم نسخ كلمة المرور إلى الحافظة!');
}




















function computeAge() {
    const dob = document.getElementById('dobInput').value;
    const ageDisplay = document.getElementById('ageDisplay');
    
    if (!dob) {
        ageDisplay.textContent = 'Please enter a valid date of birth.';
        return;
    }

    const dobDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const monthDifference = currentDate.getMonth() - dobDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dobDate.getDate())) {
        age--;
    }

    ageDisplay.textContent = `Your age is ${age} years.`;
}



















document.getElementById('currencyConvertBtn').addEventListener('click', function () {
    convertCurrency();
});

function convertCurrency() {
    const amountValue = parseFloat(document.getElementById('currencyAmount').value);
    const fromCurrencyValue = document.getElementById('currencyFrom').value;
    const toCurrencyValue = document.getElementById('currencyTo').value;

    if (isNaN(amountValue)) {
        alert('يرجى إدخال مبلغ صالح');
        return;
    }

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110 },
        EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129 },
        GBP: { USD: 1.33, EUR: 1.14, GBP: 1, JPY: 146 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, JPY: 1 }
    };

    const convertedResult = (amountValue * exchangeRates[fromCurrencyValue][toCurrencyValue]).toFixed(2);

    displayResult(amountValue, fromCurrencyValue, convertedResult, toCurrencyValue);
}

function displayResult(amount, fromCurrency, convertedAmount, toCurrency) {
    const resultElement = document.getElementById('conversionResult');
    resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}




























document.getElementById('depositBtn').addEventListener('click', function () {
    handleDeposit();
});

document.getElementById('withdrawBtn').addEventListener('click', function () {
    handleWithdrawal();
});

function handleDeposit() {
    const balanceElement = document.getElementById('balanceDisplay');
    const amountElement = document.getElementById('atmAmountInput');
    const depositAmount = parseFloat(amountElement.value);

    if (isNaN(depositAmount) || depositAmount <= 0) {
        displayAtmResult('يرجى إدخال مبلغ صالح للإيداع');
        return;
    }

    const currentBalance = parseFloat(balanceElement.value);
    const newBalance = currentBalance + depositAmount;

    balanceElement.value = newBalance.toFixed(2);
    displayAtmResult(`تم إيداع ${depositAmount} بنجاح!`);
    amountElement.value = '';
}

function handleWithdrawal() {
    const balanceElement = document.getElementById('balanceDisplay');
    const amountElement = document.getElementById('atmAmountInput');
    const withdrawalAmount = parseFloat(amountElement.value);

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        displayAtmResult('يرجى إدخال مبلغ صالح للسحب');
        return;
    }

    const currentBalance = parseFloat(balanceElement.value);

    if (withdrawalAmount > currentBalance) {
        displayAtmResult('الرصيد غير كافٍ لإتمام عملية السحب');
        return;
    }

    const newBalance = currentBalance - withdrawalAmount;

    balanceElement.value = newBalance.toFixed(2);
    displayAtmResult(`تم سحب ${withdrawalAmount} بنجاح!`);
    amountElement.value = '';
}

function displayAtmResult(message) {
    const resultElement = document.getElementById('atmResult');
    resultElement.innerText = message;
}





































// تحديد العنا


let audioRecorder;
let recordedAudioChunks = [];
let audioBlob;
let audioURL;

// تبديل اللغة وتغيير النص
function switchLanguage() {
    const language = document.getElementById('languageSelector').value;
    const startRecordBtn = document.getElementById('startRecordBtn');
    const stopRecordBtn = document.getElementById('stopRecordBtn');
    const editAudioBtn = document.getElementById('editAudioBtn');
    const pageTitle = document.getElementById('page-title');
    
    if (language === 'ar') {
        startRecordBtn.textContent = "بدء التسجيل";
        stopRecordBtn.textContent = "إيقاف التسجيل";
        editAudioBtn.textContent = "تحرير الصوت";
        pageTitle.textContent = "تسجيل الصوت";
        document.body.style.direction = 'rtl';
    } else {
        startRecordBtn.textContent = "Start Recording";
        stopRecordBtn.textContent = "Stop Recording";
        editAudioBtn.textContent = "Edit Audio";
        pageTitle.textContent = "Audio Recording";
        // document.body.style.direction = 'ltr';
    }
}

// بدء التسجيل
function startAudioRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            audioRecorder = new MediaRecorder(stream);
            audioRecorder.ondataavailable = event => recordedAudioChunks.push(event.data);
            audioRecorder.onstop = createAudioElement;
            audioRecorder.start();

            document.getElementById('recordingIndicator').hidden = false;
            document.getElementById('startRecordBtn').disabled = true;
            document.getElementById('stopRecordBtn').disabled = false;
        });
}

// إيقاف التسجيل
function stopAudioRecording() {
    audioRecorder.stop();
    document.getElementById('recordingIndicator').hidden = true;
    document.getElementById('startRecordBtn').disabled = false;
    document.getElementById('stopRecordBtn').disabled = true;
    document.getElementById('editAudioBtn').disabled = false;
}

// إنشاء عنصر الصوت المسجل
function createAudioElement() {
    audioBlob = new Blob(recordedAudioChunks, { type: 'audio/webm' });
    audioURL = URL.createObjectURL(audioBlob);
    
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audioURL;
    
    const audioContainer = document.getElementById('recordedAudioContainer');
    audioContainer.innerHTML = '';
    audioContainer.appendChild(audioElement);
}

// تحرير الصوت (محاكاة لتحرير الصوت في هذا المثال)
function editRecordedAudio() {
    if (audioBlob) {
        const newAudioBlob = new Blob(recordedAudioChunks, { type: 'audio/webm' }); // يمكنك إضافة التعديلات على الصوت هنا
        const newAudioURL = URL.createObjectURL(newAudioBlob);
        
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = newAudioURL;
        
        const audioContainer = document.getElementById('recordedAudioContainer');
        audioContainer.innerHTML = ''; // مسح الصوت القديم وعرض الصوت المحرر
        audioContainer.appendChild(audioElement);
    }
}


































// دالة لزيادة العداد
function incrementCounter(counterId) {
    const counterElement = document.getElementById(counterId);
    let count = parseInt(counterElement.textContent, 10);
    count++;
    counterElement.textContent = count;
}

// دالة لإعادة ضبط العداد
function resetCounter(counterId) {
    const counterElement = document.getElementById(counterId);
    counterElement.textContent = '0';
}



























let totalSeconds = 0;
let interval;
let tasks = [];

// إضافة مهمة جديدة
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const priority = document.getElementById('prioritySelect').value;
    if (!taskInput) return;

    const task = {
        id: tasks.length + 1,
        name: taskInput,
        priority: priority,
        time: 0,
        running: false
    };

    tasks.push(task);
    renderTasks();
    document.getElementById('taskInput').value = '';
}

// عرض المهام
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div class="task">
                <span>${task.name} - أولوية: ${task.priority}</span>
                <span>الوقت: ${formatTime(task.time)}</span>
            </div>
            <div class="task-buttons">
                <button onclick="toggleTimer(${task.id})">${task.running ? 'إيقاف' : 'بدء'}</button>
                <button onclick="removeTask(${task.id})">حذف</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });

    updateTotalTime();
}

// تشغيل/إيقاف المؤقت
function toggleTimer(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.running = !task.running;

    if (task.running) {
        clearInterval(interval);
        interval = setInterval(() => {
            task.time++;
            totalSeconds++;
            renderTasks();
        }, 1000);
    } else {
        clearInterval(interval);
    }
}

// حذف المهمة
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// تنسيق الوقت
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// تحديث الوقت الكلي
function updateTotalTime() {
    document.getElementById('totalTime').textContent = `الوقت الكلي المستغرق: ${formatTime(totalSeconds)}`;
}































const gameBoard = document.getElementById('gameBoard');
const attemptCountElement = document.getElementById('attemptCount');
const successCountElement = document.getElementById('successCount');
const failureCountElement = document.getElementById('failureCount');
const cardValues = [
    'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
    'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'
];

let cardElements = [];
let flippedCards = [];
let matchedPairs = 0;
let attemptCount = 0;
let successCount = 0;
let failureCount = 0;
let difficulty = 'medium'; // Default difficulty

// Initialize the game board with shuffled cards
function initializeBoard() {
    gameBoard.innerHTML = '';  // Clear the board
    const shuffledCards = shuffle(cardValues);
    shuffledCards.forEach(value => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.addEventListener('click', onCardClick);
        gameBoard.appendChild(card);
        cardElements.push(card);
    });
}

// Shuffle function for card array
function shuffle(array) {
    if (difficulty === 'hard') {
        // Shuffle thoroughly for hard level
        return array.sort(() => Math.random() - 0.5);
    } else if (difficulty === 'medium') {
        // Shuffle moderately for medium level
        return array.sort(() => Math.random() - 0.25);
    } else {
        // Shuffle minimally for easy level
        return array.sort(() => Math.random() - 0.1);
    }
}

// Card click event handler
function onCardClick(e) {
    const card = e.target;
    if (card.classList.contains('flipped') || flippedCards.length === 2) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        attemptCount++;
        attemptCountElement.textContent = attemptCount;
        checkForMatch();
    }
}

// Check if flipped cards match
function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs += 1;
        successCount++;
        successCountElement.textContent = successCount;

        if (matchedPairs === cardValues.length / 2) {
            setTimeout(() => alert('مبروك! لقد فزت!'), 500);
        }

        flippedCards = [];
    } else {
        failureCount++;
        failureCountElement.textContent = failureCount;
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];

            if (difficulty === 'hard') {
                // Shuffle cards after each failure in hard level
                initializeBoard();
            }
        }, 1000);
    }
}

// Set difficulty level and restart the game
function setDifficulty(level) {
    difficulty = level;
    cardElements = [];
    flippedCards = [];
    matchedPairs = 0;
    attemptCount = 0;
    successCount = 0;
    failureCount = 0;
    attemptCountElement.textContent = attemptCount;
    successCountElement.textContent = successCount;
    failureCountElement.textContent = failureCount;
    initializeBoard();
}

// Start the game
initializeBoard();


















function appendToCalc(value) {
    const display = document.getElementById('displayArea');
    display.textContent += value;
}

function clearCalculator() {
    const display = document.getElementById('displayArea');
    display.textContent = '';
}

function computeResult() {
    const display = document.getElementById('displayArea');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}




























const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !isGameActive) {
        return;
    }

    updateCell(cell, index);
    checkWinner();
}

function updateCell(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = 'none'; // Disable clicking on filled cells
}

function checkWinner() {
    let roundWon = false;

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        isGameActive = false;
    } else if (!board.includes('')) {
        statusText.textContent = 'Draw!';
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto'; // Enable clicking on all cells
    });
}









































const questionText = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start-button');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');

let score = 0;
let timeLeft = 30;
let correctAnswer;
let timer;

startButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkAnswer);

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreText.textContent = `Score: ${score}`;
    timerText.textContent = `Time Left: ${timeLeft}s`;
    startButton.disabled = true;
    generateQuestion();
    timer = setInterval(updateTimer, 1000);
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    switch (operator) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
    }

    questionText.textContent = `What is ${num1} ${operator} ${num2}?`;
    answerInput.value = '';
    answerInput.focus();
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
        score++;
        scoreText.textContent = `Score: ${score}`;
    }
    generateQuestion();
}

function updateTimer() {
    timeLeft--;
    timerText.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(timer);
        alert(`Time's up! Your final score is: ${score}`);
        startButton.disabled = false;
    }
}














    
















// document.addEventListener('DOMContentLoaded', function() {
//     const speechTitle = document.getElementById('speechTitle');
//     const btnStart = document.getElementById('btnStart');
//     const btnStop = document.getElementById('btnStop');
//     const btnSave = document.getElementById('btnSave');
//     const displayText = document.getElementById('displayText');
//     const savedTextList = document.getElementById('savedTextList');
//     const langSelect = document.getElementById('langSelect');

//     let recognition;
//     let isListening = false;

//     // Initialize Speech Recognition
//     if ('webkitSpeechRecognition' in window) {
//         recognition = new webkitSpeechRecognition();
//         recognition.continuous = true;
//         recognition.interimResults = true;
//         recognition.lang = 'ar';

//         let lastTranscript = '';

//         recognition.onresult = function(event) {
//             let interimTranscript = '';
//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 const transcript = event.results[i][0].transcript;
//                 if (event.results[i].isFinal) {
//                     if (lastTranscript !== transcript) {
//                         displayText.textContent += transcript + ' ';
//                         lastTranscript = transcript;
//                     }
//                 } else {
//                     interimTranscript += transcript;
//                 }
//             }
//             displayText.textContent = interimTranscript;
//         };

//         recognition.onerror = function(event) {
//             console.error('Speech recognition error:', event.error);
//         };
//     } else {
//         alert('متصفحك لا يدعم التعرف على الصوت.');
//     }

//     // Event Listeners
//     btnStart.addEventListener('click', function() {
//         if (recognition && !isListening) {
//             recognition.start();
//             isListening = true;
//             btnStart.disabled = true;
//             btnStop.disabled = false;
//         }
//     });

//     btnStop.addEventListener('click', function() {
//         if (recognition && isListening) {
//             recognition.stop();
//             isListening = false;
//             btnStart.disabled = false;
//             btnStop.disabled = true;
//         }
//     });

//     btnSave.addEventListener('click', function() {
//         if (displayText.textContent.trim()) {
//             const listItem = document.createElement('li');
//             listItem.textContent = displayText.textContent.trim();
//             const copyBtn = document.createElement('button');
//             copyBtn.textContent = 'نسخ';
//             copyBtn.className = 'copy-btn';
//             copyBtn.addEventListener('click', function() {
//                 navigator.clipboard.writeText(listItem.textContent);
//                 alert('تم نسخ النص!');
//             });
//             listItem.appendChild(copyBtn);
//             savedTextList.appendChild(listItem);
//             displayText.textContent = '';
//         }
//     });

//     langSelect.addEventListener('change', function(event) {
//         const selectedLang = event.target.value;
//         if (selectedLang === 'ar') {
//             recognition.lang = 'ar';
//             speechTitle.textContent = 'تحويل الصوت إلى نص';
//             btnStart.textContent = 'بدء';
//             btnStop.textContent = 'إيقاف';
//             btnSave.textContent = 'حفظ';
//         } else {
//             recognition.lang = 'en-US';
//             speechTitle.textContent = 'Speech to Text Converter';
//             btnStart.textContent = 'Start';
//             btnStop.textContent = 'Stop';
//             btnSave.textContent = 'Save';
//         }
//     });
// });











document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        document.getElementById('amPm').textContent = amPm;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the time immediately
});














let customRecognition;
let customIsRecording = false;
let customCurrentText = '';
let customInterimText = '';
let customTextDisplay = null;

function customInitializeRecognition() {
    customRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    customRecognition.lang = document.getElementById('customLanguageSelect').value === 'ar' ? 'ar-SA' : 'en-US';
    customRecognition.continuous = true;
    customRecognition.interimResults = true;

    customRecognition.onresult = function(event) {
        customInterimText = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                customCurrentText += event.results[i][0].transcript + ' ';
            } else {
                customInterimText += event.results[i][0].transcript + ' ';
            }
        }
        customTextDisplay.textContent = customCurrentText + customInterimText;
    };

    customRecognition.onerror = function(event) {
        console.error('Error occurred in recognition: ', event.error);
    };
}

function customStartRecording() {
    if (!customIsRecording) {
        // إنشاء منطقة نص جديدة
        customCurrentText = '';
        customTextDisplay = document.createElement('div');
        customTextDisplay.className = 'custom-text-output';
        document.getElementById('customTextArea').appendChild(customTextDisplay);

        customInitializeRecognition();
        customRecognition.start();
        customIsRecording = true;
    }
}

function customStopRecording() {
    if (customIsRecording) {
        customRecognition.stop();
        customIsRecording = false;
    }
}

function customSaveText() {
    if (customCurrentText.trim() !== '') {
        const customSavedTextsContainer = document.getElementById('customSavedTexts');
        const customSavedTextDiv = document.createElement('div');
        const customSavedTextSpan = document.createElement('span');
        const customCopyBtn = document.createElement('button');

        customSavedTextSpan.textContent = customCurrentText;
        customCopyBtn.textContent = 'نسخ';
        customCopyBtn.onclick = function() {
            navigator.clipboard.writeText(customSavedTextSpan.textContent);
        };

        customSavedTextDiv.appendChild(customSavedTextSpan);
        customSavedTextDiv.appendChild(customCopyBtn);
        customSavedTextsContainer.appendChild(customSavedTextDiv);
    }
}

function customChangeLanguage() {
    const customLanguage = document.getElementById('customLanguageSelect').value;
    const customTitle = document.getElementById('customTitle');
    const customStartBtn = document.getElementById('customStartBtn');
    const customStopBtn = document.getElementById('customStopBtn');
    const customSaveBtn = document.getElementById('customSaveBtn');

    if (customLanguage === 'ar') {
        customTitle.textContent = 'تحويل الصوت إلى نص';
        customStartBtn.textContent = 'ابدأ';
        customStopBtn.textContent = 'إيقاف';
        customSaveBtn.textContent = 'حفظ';
        document.body.style.direction = 'rtl';
        document.querySelectorAll('.custom-text-output').forEach(el => el.style.direction = 'ltr');
    } else {
        customTitle.textContent = 'Speech to Text';
        customStartBtn.textContent = 'Start';
        customStopBtn.textContent = 'Stop';
        customSaveBtn.textContent = 'Save';
        document.body.style.direction = 'ltr';
        document.querySelectorAll('.custom-text-output').forEach(el => el.style.direction = 'ltr');
    }
}






















// دالة لإنشاء الفقاعات
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // تحديد حجم وموقع الفقاعة بشكل عشوائي
    const size = Math.random() * 60 + 20; // حجم الفقاعة بين 20px و80px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // الموقع الأفقي العشوائي
    bubble.style.left = `${Math.random() * 100}%`;

    // تأخير الحركة لتوزيع الفقاعات بشكل جيد
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    document.querySelector('.bubbles-container').appendChild(bubble);

    // إزالة الفقاعة بعد انتهاء الحركة لتوفير الموارد
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// إنشاء فقاعات كل فترة محددة
setInterval(createBubble, 500);
