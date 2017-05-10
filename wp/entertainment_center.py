import fresh_tomatoes
import media

avatar = media.Movie("Avatar","A marine on an alien planet",
	"http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg",
	"https://www.youtube.com/watch?v=-9ceBgWV8io")

#print(avatar.storyline)
#avatar.show_trailer()

school_of_rock = media.Movie("School of Rock", "Using rock music to learn",
	"http://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
	"https://www.youtube.com/watch?v=3PsUJFEBC74")

#print(school_of_rock.storyline)
#school_of_rock.show_trailer()

movies = [avatar,school_of_rock]
#fresh_tomatoes.open_movies_page(movies)
#print(media.Movie.VALID_RATINGS)
print(media.Movie._doc_)