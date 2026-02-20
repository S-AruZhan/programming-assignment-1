function calculateWater() {
    // 1. Извлечение данных и хранение в переменных
    const name = document.getElementById('userName').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    // Простейшая валидация
    if (!name || isNaN(weight) || isNaN(activity)) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
    }

    // 2. Выполнение расчетов
    // Базовая норма: 30 мл на 1 кг веса + 500 мл за каждый час активности
    const baseWater = weight * 0.03;
    const activityBonus = (activity / 60) * 0.5;
    const totalWater = (baseWater + activityBonus).toFixed(2);

    // 3. Использование if/else для классификации
    let interpretation = "";
    if (totalWater < 1.5) {
        interpretation = "Низкая потребность. Не забывайте пить даже при малой нагрузке.";
    } else if (totalWater >= 1.5 && totalWater <= 3.0) {
        interpretation = "Стандартная норма для поддержания здоровья.";
    } else {
        interpretation = "Высокая потребность. Следите за балансом электролитов при больших нагрузках.";
    }

    // 4. Вывод результата в HTML
    document.getElementById('greeting').innerText = `Привет, ${name}!`;
    document.getElementById('calculationText').innerText = `Твоя суточная норма воды: ${totalWater} л.`;
    document.getElementById('categoryText').innerText = interpretation;
    
    // Делаем блок с результатом видимым
    document.getElementById('result').style.display = 'block';
}
