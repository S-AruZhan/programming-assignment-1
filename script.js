function calculateWater() {
    // 1. Извлечение данных и хранение в переменных
    const name = document.getElementById('userName').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);
    
    // Простейшая валидация
    if (!name || isNaN(weight) || isNaN(activity)) {
        alert("Please fill in all fields correctly.");
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
        interpretation = "Low demand. Do not forget to drink even with a light load.";
    } else if (totalWater >= 1.5 && totalWater <= 3.0) {
        interpretation = "The standard norm for maintaining health.";
    } else {
        interpretation = "High demand. Monitor the balance of electrolytes under heavy loads.";
    }

    // 4. Вывод результата в HTML
    document.getElementById('greeting').innerText = `Hi, ${name}!`;
    document.getElementById('calculationText').innerText = `Your daily water allowance: ${totalWater} л.`;
    document.getElementById('categoryText').innerText = interpretation;
    
    // Делаем блок с результатом видимым
    document.getElementById('result').style.display = 'block';
}
