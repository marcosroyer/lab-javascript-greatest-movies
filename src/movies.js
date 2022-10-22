// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map( function(movie){
        return movie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramas_spielberg = moviesArray.filter( function(movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    return dramas_spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) { return 0}

    let average = moviesArray.reduce( function (acumulador, movie){
        if (movie.score){
            return (acumulador + movie.score)
        }
        return acumulador
    }, 0) / moviesArray.length
    return +average.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(!moviesArray.length) { return 0}
    let dramas = moviesArray.filter( function(movie){
        return movie.genre.includes('Drama')
    })
    return scoresAverage(dramas)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if(moviesArray.length === 1) { return [moviesArray[0]]}
    let nova = Array.from(moviesArray)
    nova.sort( function(a, b){
        if (a.year > b.year) { return 1}
        if (a.year < b.year) { return -1}
        if (a.title > b.title) { return 1}
        if (a.title < b.title) { return -1}
    })
    return nova
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


    let nova = moviesArray.map( function(movie) {
        return movie.title
    })
    console.log(nova)
    nova.sort()
    return nova.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let nova = moviesArray.map( function(movie){
        let hora = Number(movie.duration[0])
        let minutos = Number(movie.duration.slice(3,5))
        let objeto = {
            duration: hora * 60 + minutos
        }
        return objeto
    })
    return nova
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length) {return null}
    let nova = moviesArray.reduce( function (acumulador, movie){
        if (!acumulador[movie.year]){
            acumulador[movie.year] = []
        }
        
        acumulador[movie.year].push(movie.score)

        return acumulador

    }, {})
    let maximo = 0
    let ano = 10000
    for(let key in nova){

        let total = nova[key].reduce( function (soma, valor) {
            return soma + valor
        }, 0) / nova[key].length

        if (total > maximo){
            maximo = total
            ano = key
        } 
    }
    
    return `The best year was ${ano} with an average score of ${maximo}`
}
