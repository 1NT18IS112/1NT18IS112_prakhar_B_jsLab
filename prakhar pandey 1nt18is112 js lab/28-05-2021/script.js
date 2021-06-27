var list_movies = []

function pushData() {
    var movie_data = {}
    movie_data.id = document.getElementById('id').value;
    movie_data.name = document.getElementById('name').value;
    movie_data.actor = document.getElementById('actor').value;
    movie_data.actress = document.getElementById('actress').value;
    movie_data.direcor = document.getElementById('director').value;
    list_movies.push(movie_data)
    console.table(list_movies)
}

function getData() {
    var _id = document.getElementById('getById').value;
    const search = list_movies.find((obj => obj.id === _id));
    if (search == null) {
        console.log("Not found");
        document.getElementById('output').innerHTML = ('Movie Not Found\n');
    }
    else {
        document.getElementById('output').innerHTML = (`Movie Id:${search.id}\n`);
        document.getElementById('output').innerHTML += (`Movie Name:${search.name}\n`);
        document.getElementById('output').innerHTML += (`Actor Name:${search.actor}\n`);
        document.getElementById('output').innerHTML += (`Actress Name:${search.actress}\n`);
        document.getElementById('output').innerHTML += (`Director Name:${search.direcor}\n`);

        console.log(search);
    }
}
