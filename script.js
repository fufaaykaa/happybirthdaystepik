document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем текущую страницу через URL (для каждой страницы будет свой URL)
    const currentPage = window.location.pathname;
    let correctAnswer;

    // Прописываем правильные ответы для каждого вопроса
    if (currentPage.includes("question1.html")) {
        correctAnswer = 'тень';  // Правильный ответ для первого вопроса
    } else if (currentPage.includes("question2.html")) {
        correctAnswer = 'фотоальбом';  // Правильный ответ для второго вопроса
    } else if (currentPage.includes("question3.html")) {
        correctAnswer = 'друзья';  // Правильный ответ для третьего вопроса
    }
    // Добавь сюда условия для всех 14 вопросов
    
    // Получаем введенный пользователем ответ
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    // Сравниваем ответ с правильным
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Правильно! Перейди на следующую страницу!";
        feedback.style.color = 'green';

        // Перенаправляем на следующую страницу через 1.5 секунды
        setTimeout(() => {
            let nextPage = "";
            if (currentPage.includes("question1.html")) {
                nextPage = "question2.html";  // Переход ко второму вопросу
            } else if (currentPage.includes("question2.html")) {
                nextPage = "question3.html";  // Переход к третьему вопросу
            } else if (currentPage.includes("question3.html")) {
                nextPage = "question4.html";  // И так далее
            }
            // Убедись, что ты добавила все страницы квеста
            window.location.href = nextPage;
        }, 1500);
    } else {
        feedback.textContent = "Попробуй еще раз!";
        feedback.style.color = 'red';
    }
});