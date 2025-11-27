const DaysInMonth = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}
const monthes = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь"
};
function dayToDate(day) {
    let monthDay = 0;
    let month = monthes[0];
    for (let i = 1; i < 13; i++) {
        day -= DaysInMonth[i];
        month = monthes[i];
        if (day <= 0) {
            monthDay = DaysInMonth[i] + day;
            break;
        }
    }
    return `${monthDay} ${month}`
}
function calc(what = null) {
    switch (what) {
        case "before":
            afterDay = predictedDay - 1;
            break;
        case "after":
            preDay = predictedDay + 1;
            break;
    }
    if (preDay > afterDay) {
        hint.innerText = "Похоже, пользователь вводит в заблуждение!";
    }
    predictedDay = Math.floor((preDay + afterDay) / 2);
    counter += 1;
    predictedDayElement.innerText = `Ваш день рождения - это ${dayToDate(predictedDay)}?`;
    counterElement.innerText = `Вопрос №${counter}`
}

function congrate() {
    hint.innerText = "Поздравляю с этим прекрасным днём дня!";
}
const predictedDayElement = document.getElementsByName("predictedDay")[0];
const hint = document.getElementsByName("hint")[0];
const counterElement = document.getElementsByName("questionCounter")[0];
let counter = 0;
let preDay = 1;
let afterDay = 366;
let predictedDay = Math.floor((preDay + afterDay) / 2);
calc();