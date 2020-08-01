'use strict';


const howFilms = +prompt("Кількість фільмів");
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const lowNumber = 'Просмотрено довольно мало фильмов',
      mediumNumber = 'Вы классический зритель',
      largeNumber = 'Вы киноман',
      messegeError = 'Произошла ошибка';

const personalMovieDB = {
    count: [numberOfFilms],
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    showNumberFilms: function() {
        let count = this.count;
        
        if (count < 10) {
            return lowNumber;
        } else if (count >= 10 && this.count <= 30) { 
            return mediumNumber;
        } else if (count > 30) {
            return largeNumber;
        } else {
            return messegeError;
        }
    },

    showInfo: function() {
        let moviesPrint = '';
        for (const key in this.movies) {
            moviesPrint += `Film: ${key}, rating ${this.movies[key]} \n`;
        }
        console.log(`NumberOfMovies: ${this.count} \n${moviesPrint} \n${this.showNumberFilms()}`);
    }
};

for (let index = 0; index < howFilms; index++) {
    let   lastFilm = prompt("Один из последних просмотренных фильмов?"),
          ratingFilm = +prompt("На сколько оцените его?");

    if((lastFilm  && ratingFilm) !== null && (lastFilm  && ratingFilm) !== "" && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = ratingFilm;
    } else {
        index--;
    }
}

personalMovieDB.showInfo();