// @ts-check

class Movie {
    constructor(obj) {
        Movie.TOTAL++ ;
        this.id = Movie.TOTAL;
        this.name = obj.movie_title;
        this.director_name = obj.director_name;
        this.actors = [obj.actor_1_name, obj.actor_2_name];
        this.genres = obj.genres.split('|');
        this.genres_list = obj.genres;
        this.language = obj.language;
        this.country = obj.country;
        this.rating = obj.content_rating;
        this.budget = obj.budget;
        this.year = obj.title_year;
        this.plot_keywords = obj.plot_keywords;
        this.plots = obj.plot_keywords.split('|');
        this.imdb_link = obj.movie_imdb_link;
    }
    getActors() {
        return this.actors.join(', ');
    }
}
Movie.TOTAL = -1;
module.exports = Movie;
  