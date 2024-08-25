document.getElementById('read-more-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Отключаем стандартное поведение ссылки
    const fullText = document.querySelector('.full-text');
    const shortText = document.querySelector('.short-text');
    
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        shortText.style.display = 'none'; // Скрыть краткий текст
        this.textContent = 'Скрыть'; // Изменить текст кнопки
    } else {
        fullText.style.display = 'none';
        shortText.style.display = 'block'; // Показать краткий текст
        this.textContent = 'Читать полностью'; // Вернуть исходный текст кнопки
    }
});
