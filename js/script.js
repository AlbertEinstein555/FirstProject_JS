'use strict'
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	//start теперь метод, а был функцией
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

		//Проверка - нельзя оставить строку пустой или нельзя нажать отмену или ввести нечисло
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			//вопрос повторяется, если проверка не пройдена
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
		}
	},
	rememberMyFilms: function() {
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		//если база данных не скрыта, то мы ее показываем
		//знак отрицания, чтобы получить true
		if (!hidden) {
			console.log(personalMovieDB);
		} 
	},
	//включает или выключает приватность
	toggleVisibleMyDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
	} else {
		personalMovieDB.privat = true;	
	}
},
	writeYourGenres: function() {
		//начинаем с 1 для удобства пользователя. Цикл повторяется 3 раза
		for (let i = 1; i <= 3; i++) {
			//промежуточная переменная
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			//genre не должен содержать пустую строку
			if (genre === '' || genre == null) {
				console.log('Вы ввели некорректные данные или не ввели их вовсе');
				//откатываемся на шаг назад
				i--;
			} else {
				//ставим i-1, так как нумерация начинается с 0
			personalMovieDB.genres[i - 1] = genre;
			}	
		}
		//выведем на экран какие жанры и под какими номерами, запустив call-back функцию
		//item - каждый элемент в массиве, который перебираем. В нашем случае - жанр
		//i - номер по порядку. Номер жанра 
		personalMovieDB.genres.forEach((item, i) => {
			//Любимый жанр #(номер по порядку, начиная с 1)
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		})
	}
};
