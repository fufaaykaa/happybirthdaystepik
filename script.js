document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем текущую страницу через URL (для каждой страницы будет свой URL)
    const currentPage = window.location.pathname;
    let correctAnswer;

    // Прописываем правильные ответы для каждого вопроса
    if (currentPage.includes("question1.html")) {
        correctAnswer = 'королевство полной луны';  // Правильный ответ для первого вопроса
    } else if (currentPage.includes("question2.html")) {
        correctAnswer = 'принцесса сиси';  // Правильный ответ для второго вопроса
    } else if (currentPage.includes("question3.html")) {
        correctAnswer = 'козлики';  // Правильный ответ для третьего вопроса
    } else if (currentPage.includes("question4.html")) {
        correctAnswer = 'ничего не бойся я с тобой';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question5.html")) {
        correctAnswer = 'гном';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question6.html")) {
        correctAnswer = 'валентин шишкин';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question7.html")) {
        correctAnswer = 'макан хуесос';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question8.html")) {
        correctAnswer = 'welcome to berlin';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question9.html")) {
        correctAnswer = 'пророк история александра пушкина';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question10.html")) {
        correctAnswer = 'пицца';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question11.html")) {
        correctAnswer = 'сосиски';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question12.html")) {
        correctAnswer = 'кеша';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question13.html")) {
        correctAnswer = '1000000';  // Правильный ответ для третьего вопроса
    }
    else if (currentPage.includes("question14.html")) {
        correctAnswer = 'wednesday';  // Правильный ответ для третьего вопроса
    }

    // Добавь сюда условия для всех 14 вопросов
    
    // Получаем введенный пользователем ответ
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    // Сравниваем ответ с правильным
    if (userAnswer === correctAnswer) {
        feedback.textContent = "пабедааааа ты самый лучший";
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
            else if (currentPage.includes("question4.html")) {
                nextPage = "question5.html";  // И так далее
            }
            else if (currentPage.includes("question5.html")) {
                nextPage = "question6.html";  // И так далее
            }
            else if (currentPage.includes("question6.html")) {
                nextPage = "question7.html";  // И так далее
            }
            else if (currentPage.includes("question7.html")) {
                nextPage = "question8.html";  // И так далее
            }
            else if (currentPage.includes("question8.html")) {
                nextPage = "question9.html";  // И так далее
            }
            else if (currentPage.includes("question9.html")) {
                nextPage = "question10.html";  // И так далее
            }
            else if (currentPage.includes("question10.html")) {
                nextPage = "question11.html";  // И так далее
            }
            else if (currentPage.includes("question11.html")) {
                nextPage = "question12.html";  // И так далее
            }
            else if (currentPage.includes("question12.html")) {
                nextPage = "question13.html";  // И так далее
            }
            else if (currentPage.includes("question13.html")) {
                nextPage = "question14.html";  // И так далее
            }
            else if (currentPage.includes("question14.html")) {
                nextPage = "final_page.html";  // И так далее
            }
            // Убедись, что ты добавила все страницы квеста
            window.location.href = nextPage;
        }, 1500);
    } else {
        feedback.textContent = "эй ты че бубубубуббу";
        feedback.style.color = 'red';
    }
});