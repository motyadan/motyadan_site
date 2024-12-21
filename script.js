function downloadFile(fileUrl, fileName) {
    const link = document.createElement('a');  // Создаем новый элемент <a>
    link.href = fileUrl;  // Указываем путь к файлу
    link.download = fileName;  // Указываем имя файла при скачивании
    link.click();  // Инициируем клик по ссылке
}

document.getElementById('calc').addEventListener('click', function() {
    downloadFile('download/calculator.py', 'calculator.py');  // Вызываем функцию с нужными параметрами
});
