var movies = [
    { title: "Soy Leyenda", minAge: 13 },
    { title: "El Rey León", minAge: 3 },
    { title: "La marca del Demonio", minAge: 18 }
];


var whatMoviesCanISee = (age) => {
    return movies.map((movie)=>{
        movie.can = age >= movie.minAge ? 'yes' : 'no';
        return movie;
    })
}

var getMoviesCanISee = (age) => {
    return movies.filter((movie) =>  age >= movie.minAge)
}

var getMoviesCantISee = (age) => {
    return movies.filter((movie) =>  age < movie.minAge)
}

var findMovie = (title) => {
    return movies.find((movie) => movie.title === title )
}

var addMovie = (movie) => {
    movies.push(movie);
    return movies;
}