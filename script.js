function append(num) {
    const out = document.getElementById('out');
    out.value += num;

    const text = out.value;

    // Список операторов
    const operators = ['*', '-', '+', '/'];

    // Проверяем, есть ли в строке оператор
    const hasOperator = operators.some(op => text.includes(op));

    // Блокируем кнопки операторов, если найден хотя бы один оператор
    operators.forEach(op => {
        document.getElementById(op).disabled = hasOperator;
    });
}

function clear_all() {
    const out = document.getElementById('out');
    out.value = "";

    // Разблокируем кнопки операторов
    ['*', '-', '+', '/'].forEach(op => {
        document.getElementById(op).disabled = false;
    });
}

function answered() {
    const out = document.getElementById('out');
    const text = out.value;

    // Вычисляем результат на основе оператора
    if (text.includes('*')) {
        const [first, second] = text.split('*').map(Number);
        out.value = first * second;
    } else if (text.includes('-')) {
        const [first, second] = text.split('-').map(Number);
        out.value = first - second;
    } else if (text.includes('+')) {
        const [first, second] = text.split('+').map(Number);
        out.value = first + second;
    } else if (text.includes('/')) {
        const [first, second] = text.split('/').map(Number);
        out.value = first / second;
    }

    // Разблокируем кнопки операторов
    ['*', '-', '+', '/'].forEach(op => {
        document.getElementById(op).disabled = false;
    });
}
