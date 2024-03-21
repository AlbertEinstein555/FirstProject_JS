'use strict'
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

	//Проверка - нельзя оставить строку пустой или нельзя нажать отмену или ввести нечисло
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		//вопрос повторяется, если проверка не пройдена
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
	}
}
//вызов функции
start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

//функция - обертка, которая вызывает цикл по требованию
function rememberMyFilms() {
	//цикл задает пользователю 2 вопроса
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
	//если проверка выполняется, то результат запишется в объект
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			//если проверка не выполняется, то возвращаемся к предыдущему вопросу
			console.log('error');
			i--;
		}
	}
}

//вызов функции
rememberMyFilms();

//функция - обертка, которая отвечает за уровень киномании и вызывается по необходимости
function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

//вызов функции
detectPersonalLevel();

function showMyDB (hidden) {
	//если база данных не скрыта, то мы ее показываем
	//знак отрицания, чтобы получить true
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

//значение private передается в hidden
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	//начинаем с 1 для удобства пользователя. Цикл повторяется 3 раза
	for (let i = 1; i <= 3; i++) {
		//задаем пользователю вопрос
		//то, что ответил пользователь, запишем в главную базу данных
		//ставим i-1, так как нумерация начинается с 0
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
		//так быстрее, но можно было создать const = genre;
	}
}

//вызов функции
writeYourGenres();