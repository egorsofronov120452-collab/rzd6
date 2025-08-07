<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Методичка для РЖД</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <div class="header">
        <h1>🚄 Методичка для РЖД</h1>
    </div>
    <div class="container">
        <div class="sidebar">
            <button class="button" onclick="showSection('content')">1️⃣ Содержание</button>
            <button class="button" onclick="showSection('lectures')">2️⃣ Лекции</button>
            <button class="button" onclick="showSection('training')">3️⃣ Тренировки</button>
            <button class="button" onclick="showSection('events')">4️⃣ Мероприятия</button>
            <button class="button" onclick="showSection('exams')">5️⃣ Экзамены</button>
            <button class="button" onclick="showSection('interview')">6️⃣ Собеседование</button>
        </div>
        <div class="content" id="content">
            <div class="section-title">Содержание</div>
            <div class="section">
                <div>📋 Разделы методички:</div>
                <ul>
                    <li>1️⃣ Содержание - Все разделы методички</li>
                    <li>2️⃣ Лекции - Проведение учебных занятий</li>
                    <li>3️⃣ Тренировки - Организация практических занятий</li>
                    <li>4️⃣ Мероприятия - Список основных мероприятий РЖД</li>
                    <li>5️⃣ Правила проведения экзаменов - Процедуры проведения экзаменов</li>
                    <li>6️⃣ Собеседование - Шаблонные действие при приеме граждан</li>
                    <li>7️⃣ Шаблоны для Доски Объявлений - Стандартные отписи в ДО</li>
                    <li>8️⃣ Работа по форуму - Краткое описание для работы по форуму</li>
                </ul>
                <div class="info">💡 Важно: Данная методичка содержит большинство инструкций для работы. Используйте навигацию слева для быстрого перехода к нужному разделу.</div>
            </div>
        </div>
        <div class="content" id="lectures" style="display:none;">
            <div class="section-title">Лекции</div>
            <div class="section">
                <div>📍 Место проведения: Лекции проводятся в актовом зале.</div>
                <div>📚 Основные лекции:</div>
                <button class="button" onclick="toggleDetails('lecture1')">Лекция 1: Вступительная лекция</button>
                <div id="lecture1" style="display:none;">Раскрываемый контент о лекции 1.</div>
                <button class="button" onclick="toggleDetails('lecture2')">Лекция 2: Монтёр пути</button>
                <div id="lecture2" style="display:none;">Раскрываемый контент о лекции 2.</div>
            </div>
        </div>
        <!-- Add more sections for Training, Events, Exams, and Interview -->
    </div>
    <script>
        function showSection(section) {
            const contentSections = document.querySelectorAll('.content');
            contentSections.forEach(sec => sec.style.display = 'none');
            document.getElementById(section).style.display = 'block';
        }

        function toggleDetails(lecture) {
            const details = document.getElementById(lecture);
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }
    </script>
</body>
</html>

body {
    margin: 0;
    background-color: white;
    font-family: Arial, sans-serif;
}

.header {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.header h1 {
    color: #ff6666;
    margin: 0;
}

.container {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 200px;
    background: rgba(128, 128, 128, 0.5);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}

.content {
    flex: 1;
    background: rgba(128, 128, 128, 0.9);
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    color: white;
}

.button {
    background-color: transparent;
    border: none;
    color: black;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.button:hover {
    background-color: #ff6666;
    transform: translateX(5px);
}

/* Styles for sections */
.section-title {
    font-size: 28px;
    color: #ff6666;
}

.section {
    background-color: rgba(255, 102, 102, 0.9);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
}

/* Info style */
.info {
    background-color: rgba(255, 255, 204, 0.8);
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
}
